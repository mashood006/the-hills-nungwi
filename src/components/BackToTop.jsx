import { useEffect, useRef } from 'react'
import { getLenis } from '../hooks/useSmoothScroll'

export function BackToTop() {
  const btnRef = useRef(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

    function onScroll() {
      btn.classList.toggle('on', window.scrollY > window.innerHeight * 0.55)
    }

    function onTop() {
      const lenis = getLenis()
      if (reduce) {
        if (lenis) lenis.scrollTo(0, { immediate: true })
        else window.scrollTo(0, 0)
        return
      }
      if (lenis) lenis.scrollTo(0, { duration: 1.2 })
      else {
        const top = document.getElementById('top')
        if (top) top.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    btn.addEventListener('click', onTop)
    return () => {
      window.removeEventListener('scroll', onScroll)
      btn.removeEventListener('click', onTop)
    }
  }, [])

  return (
    <button type="button" className="totop" id="totop" ref={btnRef} aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </button>
  )
}
