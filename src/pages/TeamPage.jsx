import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { TEAM } from '../data/team'
import { getLenis } from '../hooks/useSmoothScroll'

export default function TeamPage() {
  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [])

  return (
    <div className="team-page">
      <SiteHeader blog />

      <section className="team-hero">
        <img
          src="/images/vision-facade.jpg"
          alt=""
          width="2752"
          height="1536"
          decoding="async"
        />
        <div className="team-hero-fade" aria-hidden="true" />
        <div className="wrap team-hero-copy">
          <p className="team-crumbs">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            Our Team
          </p>
          <h1>
            The people behind <em className="g">Majestic.</em>
          </h1>
          <p className="team-intro-lead">
            A collective rooted in Zanzibar — building with purpose, discipline, and care.
          </p>
        </div>
      </section>

      <section className="team-grid-sec wrap">
        <div className="team-grid">
          {TEAM.map((member) => (
            <article className="team-card" key={member.name}>
              <div className={`team-card-img${member.focus === 'top' ? ' team-card-img--top' : ''}`}>
                <img
                  src={member.img}
                  alt={member.name}
                  width="480"
                  height="480"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="team-card-info">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-cta">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2>
            Join us in shaping <em className="g">Zanzibar&apos;s future.</em>
          </h2>
          <p>
            Whether you are an investor, partner, or prospective buyer, our team is here to guide
            you.
          </p>
          <Link className="btn btn--navy" to="/#Contact">
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
