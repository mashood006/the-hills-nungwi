import { useEffect } from 'react'

function countUp(el) {
  const end = parseFloat(el.dataset.count)
  const dec = parseInt(el.dataset.dec || '0', 10)
  const suf = el.dataset.suffix || ''
  const dur = 1500
  let t0 = null
  function frame(t) {
    if (!t0) t0 = t
    const p = Math.min((t - t0) / dur, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    el.textContent = (end * eased).toFixed(dec) + suf
    if (p < 1) requestAnimationFrame(frame)
    else el.textContent = end.toFixed(dec) + suf
  }
  requestAnimationFrame(frame)
}

function bindCarousel(root, navRoot, reduce) {
  const track = root.querySelector('[data-track]')
  if (!track) return () => {}
  const nav = navRoot || root
  const prev = nav.querySelector('[data-prev]')
  const next = nav.querySelector('[data-next]')
  function step() {
    const slide = track.children[0]
    if (!slide) return 280
    const styles = getComputedStyle(track)
    const gap = parseFloat(styles.columnGap || styles.gap) || 16
    return slide.getBoundingClientRect().width + gap
  }
  function go(dir) {
    track.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' })
  }
  const onPrev = () => go(-1)
  const onNext = () => go(1)
  if (prev) prev.addEventListener('click', onPrev)
  if (next) next.addEventListener('click', onNext)
  return () => {
    if (prev) prev.removeEventListener('click', onPrev)
    if (next) next.removeEventListener('click', onNext)
  }
}

/** Ports the original script.js behaviour into React. */
export function useSiteEffects() {
  useEffect(() => {
    const hdr = document.getElementById('hdr')
    const burg = document.getElementById('burg')
    const sheet = document.getElementById('sheet')
    if (!hdr || !burg || !sheet) return

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups = []

    function onScroll() {
      hdr.classList.toggle('stuck', window.scrollY > window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    function onBurg() {
      const on = sheet.classList.toggle('on')
      burg.setAttribute('aria-expanded', on)
      document.body.style.overflow = on ? 'hidden' : ''
    }
    burg.addEventListener('click', onBurg)
    cleanups.push(() => burg.removeEventListener('click', onBurg))

    function onSheetClick(e) {
      if (e.target.closest('a')) {
        sheet.classList.remove('on')
        burg.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
      }
    }
    sheet.addEventListener('click', onSheetClick)
    cleanups.push(() => sheet.removeEventListener('click', onSheetClick))

    const targets = document.querySelectorAll('.a, .stg, [data-count]')
    if (!('IntersectionObserver' in window) || reduce) {
      targets.forEach((el) => {
        el.classList.add('in')
        if (el.dataset.count) {
          el.textContent =
            parseFloat(el.dataset.count).toFixed(parseInt(el.dataset.dec || '0', 10)) +
            (el.dataset.suffix || '')
        }
      })
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((x) => {
            const el = x.target
            if (x.isIntersecting) {
              el.classList.add('in')
              if (el.dataset.count) countUp(el)
            } else {
              el.classList.remove('in')
              if (el.dataset.count) {
                const dec = parseInt(el.dataset.dec || '0', 10)
                el.textContent = (0).toFixed(dec) + (el.dataset.suffix || '')
              }
            }
          })
        },
        { rootMargin: '-8% 0px -12% 0px', threshold: [0, 0.08, 0.18] },
      )
      targets.forEach((el) => io.observe(el))

      function sweep() {
        targets.forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.height < 1 && r.width < 1) return
          const visible = r.top < innerHeight * 0.88 && r.bottom > innerHeight * 0.12
          if (visible) {
            if (!el.classList.contains('in')) {
              el.classList.add('in')
              if (el.dataset.count) countUp(el)
            }
          } else if (el.classList.contains('in')) {
            el.classList.remove('in')
            if (el.dataset.count) {
              const dec = parseInt(el.dataset.dec || '0', 10)
              el.textContent = (0).toFixed(dec) + (el.dataset.suffix || '')
            }
          }
        })
      }
      const t1 = setTimeout(sweep, 400)
      const t2 = setTimeout(sweep, 1200)
      cleanups.push(() => {
        clearTimeout(t1)
        clearTimeout(t2)
        io.disconnect()
      })
    }

    if (!reduce) {
      const par = [...document.querySelectorAll('.par')]
      let ticking = false
      function move() {
        const vh = window.innerHeight
        par.forEach((el) => {
          const parent = el.parentElement
          if (!parent) return
          const r = parent.getBoundingClientRect()
          if (r.bottom < -200 || r.top > vh + 200) return
          const pct = (r.top + r.height / 2 - vh / 2) / vh
          el.style.transform = `translate3d(0,${(pct * -22).toFixed(2)}px,0) scale(1.06)`
        })
        ticking = false
      }
      function onParScroll() {
        if (!ticking) {
          requestAnimationFrame(move)
          ticking = true
        }
      }
      window.addEventListener('scroll', onParScroll, { passive: true })
      window.addEventListener('resize', move, { passive: true })
      move()
      cleanups.push(() => {
        window.removeEventListener('scroll', onParScroll)
        window.removeEventListener('resize', move)
      })
    }

    document.querySelectorAll('[data-carousel]').forEach((el) => {
      const featNav = el.classList.contains('feat-carousel')
        ? document.querySelector('[data-feat-nav]')
        : null
      cleanups.push(bindCarousel(el, featNav, reduce))
    })

    return () => {
      cleanups.forEach((fn) => fn && fn())
      document.body.style.overflow = ''
    }
  }, [])
}
