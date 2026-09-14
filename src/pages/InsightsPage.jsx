import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { BLOG_POSTS } from '../data/blogPosts'
import { getLenis } from '../hooks/useSmoothScroll'

export default function InsightsPage() {
  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [])

  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="insights-page">
      <SiteHeader blog />

      <section className="insights-hero">
        <img
          src={featured.img}
          alt=""
          width="1920"
          height="1080"
          decoding="async"
        />
        <div className="insights-hero-fade" aria-hidden="true" />
        <div className="wrap insights-hero-copy">
          <p className="insights-crumbs">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            Insights
          </p>
          <h1>
            Zanzibar property &amp; <em className="g">investment insights.</em>
          </h1>
          <p className="insights-hero-lead">
            Guides, market notes and ownership perspectives from the Majestic team.
          </p>
        </div>
      </section>

      <section className="insights-list wrap">
        <Link className="insights-featured" to={`/insights/${featured.slug}`}>
          <div className="insights-featured-img">
            <img
              src={featured.img}
              alt={featured.alt}
              width="960"
              height="640"
              decoding="async"
            />
          </div>
          <div className="insights-featured-copy">
            <span className="insights-cat">{featured.cat}</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className="insights-meta">
              {featured.date} · {featured.readTime}
            </span>
            <span className="arrow">Read article →</span>
          </div>
        </Link>

        <div className="insights-grid">
          {rest.map((post) => (
            <article className="insights-card" key={post.slug}>
              <Link className="insights-card-media" to={`/insights/${post.slug}`}>
                <img
                  src={post.img}
                  alt={post.alt}
                  width="640"
                  height="420"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="insights-card-body">
                <p className="insights-cat">
                  {post.cat} · {post.date}
                </p>
                <h3>
                  <Link to={`/insights/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link className="arrow" to={`/insights/${post.slug}`}>
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
