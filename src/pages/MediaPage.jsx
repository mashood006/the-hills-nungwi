import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { MEDIA_VIDEOS, youtubeEmbedUrl } from '../data/media'
import { getLenis } from '../hooks/useSmoothScroll'

export default function MediaPage() {
  const [activeId, setActiveId] = useState(MEDIA_VIDEOS[0]?.id ?? null)
  const [playing, setPlaying] = useState(false)

  const active = MEDIA_VIDEOS.find((v) => v.id === activeId) || MEDIA_VIDEOS[0]

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setPlaying(false)
  }, [activeId])

  function playVideo(video) {
    setActiveId(video.id)
    setPlaying(true)
  }

  return (
    <div className="media-page">
      <SiteHeader blog />

      <section className="media-hero">
        <img
          src="/images/vision-facade.jpg"
          alt=""
          width="2752"
          height="1536"
          decoding="async"
        />
        <div className="media-hero-fade" aria-hidden="true" />
        <div className="wrap media-hero-copy">
          <p className="media-crumbs">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            Media
          </p>
          <h1>
            Film &amp; <em className="g">gallery.</em>
          </h1>
          <p className="media-hero-lead">
            Stories from The Hills and Majestic — place, craft and the coast of Zanzibar.
          </p>
        </div>
      </section>

      <section className="media-stage wrap">
        <div className="media-player">
          {playing && active ? (
            <iframe
              key={active.youtubeId}
              title={active.title}
              src={youtubeEmbedUrl(active.youtubeId, { autoplay: true })}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              type="button"
              className="media-poster"
              onClick={() => active && setPlaying(true)}
              aria-label={`Play ${active?.title || 'video'}`}
            >
              <img
                src={active?.thumb || '/images/vision-facade.jpg'}
                alt=""
                width="1280"
                height="720"
                decoding="async"
              />
              <span className="media-poster-scrim" aria-hidden="true" />
              <span className="media-play" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5L8 5.5z" />
                </svg>
              </span>
            </button>
          )}
        </div>

        {active && (
          <div className="media-active-copy">
            <span className="media-cat">{active.category}</span>
            <h2>{active.title}</h2>
            <p>{active.description}</p>
          </div>
        )}
      </section>

      <section className="media-gallery wrap">
        <div className="media-gallery-head">
          <h2>Video gallery</h2>
          <p>{MEDIA_VIDEOS.length} film{MEDIA_VIDEOS.length === 1 ? '' : 's'}</p>
        </div>

        <div className="media-grid">
          {MEDIA_VIDEOS.map((video, index) => (
            <article
              className={`media-card${activeId === video.id ? ' is-active' : ''}`}
              key={video.id}
            >
              <button type="button" className="media-card-media" onClick={() => playVideo(video)}>
                <img
                  src={video.thumb}
                  alt=""
                  width="640"
                  height="360"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="media-card-scrim" aria-hidden="true" />
                <span className="media-card-play" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.5v13l11-6.5L8 5.5z" />
                  </svg>
                </span>
                <span className="media-card-num">{String(index + 1).padStart(2, '0')}</span>
              </button>
              <div className="media-card-body">
                <span>{video.category}</span>
                <h3>
                  <button type="button" onClick={() => playVideo(video)}>
                    {video.title}
                  </button>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
