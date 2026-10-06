import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getPostBySlug, BLOG_POSTS } from '../data/blogPosts'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { getLenis } from '../hooks/useSmoothScroll'

const WA_URL =
  'https://wa.me/255670004400?text=Hello%2C%20I%20am%20interested%20in%20The%20Hills%20Nungwi%20apartments.%20Please%20send%20me%20more%20information'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/insights" replace />

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="blog-page">
      <SiteHeader blog />

      <section className="blog-hero">
        <img src={post.img} alt={post.alt} width="1920" height="1080" decoding="async" />
        <div className="blog-hero-fade" aria-hidden="true" />
        <div className="wrap blog-hero-copy">
          <p className="blog-crumbs">
            <Link to="/insights">Insights</Link>
            <span aria-hidden="true"> › </span>
            <span>{post.cat}</span>
            <span aria-hidden="true"> › </span>
            <span>{post.title}</span>
          </p>
          <span className="blog-hero-tag">{post.cat}</span>
          <h1>{post.title}</h1>
          <p className="blog-hero-meta">
            {post.date}
            <span aria-hidden="true"> · </span>
            {post.readTime}
            <span aria-hidden="true"> · </span>
            By {post.author}
          </p>
        </div>
      </section>

      <article className="blog-article">
        <div className="wrap blog-article-inner">
          {post.body.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
          <div className="blog-article-cta">
            <Link className="btn btn--navy" to="/#Contact">
              Talk to an advisor
            </Link>
            <a className="btn btn--line" href={WA_URL} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="blog-related">
          <div className="wrap">
            <h2>More insights</h2>
            <div className="blog-related-grid">
              {related.map((item) => (
                <Link className="blog-related-card" to={`/insights/${item.slug}`} key={item.slug}>
                  <img src={item.img} alt="" width="480" height="300" loading="lazy" decoding="async" />
                  <div>
                    <span>{item.cat}</span>
                    <strong>{item.title}</strong>
                  </div>
                </Link>
              ))}
            </div>
            <p className="blog-back">
              <Link to="/insights">← Back to all insights</Link>
            </p>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}
