import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogPosts'

const AUTO_MS = 5000

export function BlogSlider() {
  const trackRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false })
  const pauseRef = useRef(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const step = useCallback(() => {
    const track = trackRef.current
    if (!track || !track.children[0]) return 362
    const card = track.children[0]
    const gap = parseFloat(getComputedStyle(track).gap) || 22
    return card.getBoundingClientRect().width + gap
  }, [])

  const scrollByStep = useCallback(
    (dir, smooth = true) => {
      const track = trackRef.current
      if (!track) return
      const max = track.scrollWidth - track.clientWidth
      if (dir > 0 && track.scrollLeft >= max - 4) {
        track.scrollTo({ left: 0, behavior: smooth && !reduceMotion ? 'smooth' : 'auto' })
        return
      }
      if (dir < 0 && track.scrollLeft <= 4) {
        track.scrollTo({ left: max, behavior: smooth && !reduceMotion ? 'smooth' : 'auto' })
        return
      }
      track.scrollBy({ left: dir * step(), behavior: smooth && !reduceMotion ? 'smooth' : 'auto' })
    },
    [reduceMotion, step],
  )

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined
    const id = window.setInterval(() => {
      if (pauseRef.current) return
      scrollByStep(1)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, scrollByStep])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    function onPointerDown(e) {
      if (e.button !== 0) return
      dragRef.current = {
        active: true,
        startX: e.clientX,
        scrollLeft: track.scrollLeft,
        moved: false,
        pointerId: e.pointerId,
      }
      pauseRef.current = true
    }

    function onPointerMove(e) {
      if (!dragRef.current.active) return
      const dx = e.clientX - dragRef.current.startX
      if (!dragRef.current.moved && Math.abs(dx) > 8) {
        dragRef.current.moved = true
        track.setPointerCapture(dragRef.current.pointerId)
        track.classList.add('is-dragging')
      }
      if (dragRef.current.moved) {
        track.scrollLeft = dragRef.current.scrollLeft - dx
      }
    }

    function endDrag(e) {
      if (!dragRef.current.active) return
      dragRef.current.active = false
      track.classList.remove('is-dragging')
      if (track.hasPointerCapture(e.pointerId)) {
        track.releasePointerCapture(e.pointerId)
      }
      window.setTimeout(() => {
        pauseRef.current = false
      }, AUTO_MS)
    }

    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', endDrag)
    track.addEventListener('pointercancel', endDrag)
    track.addEventListener('pointerleave', endDrag)

    return () => {
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', endDrag)
      track.removeEventListener('pointercancel', endDrag)
      track.removeEventListener('pointerleave', endDrag)
    }
  }, [])

  return (
    <div
      className="blog-slider"
      onMouseEnter={() => {
        pauseRef.current = true
      }}
      onMouseLeave={() => {
        pauseRef.current = false
      }}
      onFocusCapture={() => {
        pauseRef.current = true
      }}
      onBlurCapture={() => {
        pauseRef.current = false
      }}
    >
      <div
        className="blog-track"
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-label="Insights articles"
        onClickCapture={(e) => {
          if (dragRef.current.moved) {
            e.preventDefault()
            e.stopPropagation()
            dragRef.current.moved = false
          }
        }}
      >
        {BLOG_POSTS.map((post) => (
          <article className="blog-card" key={post.slug}>
            <Link className="blog-media" to={`/insights/${post.slug}`}>
              <img src={post.img} alt={post.alt} width="640" height="420" loading="lazy" decoding="async" />
            </Link>
            <div className="blog-body">
              <p className="blog-kicker">
                {post.cat} · {post.date}
              </p>
              <h3>
                <Link to={`/insights/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <div className="blog-author">
                <span className="blog-avatar" aria-hidden="true">
                  {post.initials}
                </span>
                <span>{post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-slider-bar wrap">
        <p className="blog-slider-hint">Drag to explore</p>
        <div className="blog-slider-nav" role="group" aria-label="Insights slider controls">
          <button type="button" className="circ circ--blog" aria-label="Previous article" onClick={() => scrollByStep(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" className="circ circ--blog" aria-label="Next article" onClick={() => scrollByStep(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
