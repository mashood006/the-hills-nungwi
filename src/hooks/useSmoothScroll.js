import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

/** Site-wide Lenis smooth scroll (same approach as hcidr.com). */
export function useSmoothScroll() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    })
    lenisInstance = lenis
    document.documentElement.classList.add('lenis')

    let rafId = 0
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const headerOffset = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--hdr')
      const n = parseFloat(raw)
      return Number.isFinite(n) ? -n - 8 : -84
    }

    function onAnchorClick(e) {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#' || href === '#top') {
        e.preventDefault()
        lenis.scrollTo(0, { duration: 1.2 })
        return
      }
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      window.history.replaceState(null, '', href)
      lenis.scrollTo(el, { offset: headerOffset(), duration: 1.2 })
    }

    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
      document.documentElement.classList.remove('lenis')
    }
  }, [])
}

export function smoothScrollTo(target, options = {}) {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(target, options)
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: options.immediate ? 'auto' : 'smooth' })
    return
  }
  if (typeof target === 'string' && target.startsWith('#')) {
    document.getElementById(target.slice(1))?.scrollIntoView({
      behavior: options.immediate ? 'auto' : 'smooth',
      block: 'start',
    })
  } else if (target instanceof Element) {
    target.scrollIntoView({ behavior: options.immediate ? 'auto' : 'smooth', block: 'start' })
  }
}
