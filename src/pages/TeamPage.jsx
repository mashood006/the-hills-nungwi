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

  const director = TEAM.find((m) => m.featured)
  const members = TEAM.filter((m) => !m.featured)

  return (
    <div className="team-page">
      <SiteHeader blog />

      <section className="team-hero">
        <img
          src="/images/team/team-group.jpg"
          alt="Majestic team group photo"
          width="2306"
          height="1536"
          decoding="async"
        />
        <div className="team-hero-fade" />
        <div className="wrap team-hero-copy">
          <p className="team-hero-crumbs">
            <Link to="/">Home</Link> / Our Team
          </p>
          <h1>The people behind <em className="g">Majestic.</em></h1>
          <p className="team-hero-lead">
            A leadership team rooted in Zanzibar, building with purpose and precision.
          </p>
        </div>
      </section>

      {director && (
        <section className="team-director wrap">
          <div className="team-director-grid">
            <div className="team-director-img">
              <img
                src={director.img}
                alt={director.name}
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="team-director-copy">
              <span className="kick">{director.role}</span>
              <h2>{director.name}</h2>
              <p>
                Mohammed Munir Omar is an entrepreneur and business leader with more than a decade
                of experience across hospitality, real estate, trading, and investment. As Managing
                Director of Majestic Luxury Suites Ltd, he leads with a clear philosophy: to build
                with purpose, grow with discipline, and create assets with enduring value.
              </p>
              <p>
                Under his leadership, Majestic has built a distinctive hospitality portfolio that
                includes <em>Ocean Breeze Hotel</em>, <em>Double A Hotel</em>,{' '}
                <em>The Roundabout Hotel</em>, and <em>Ocean Breeze BnB</em>, collectively
                representing more than <strong>100 rooms under management</strong>.
              </p>
              <p>
                Rooted in Zanzibar and shaped by a long-term perspective, Mohammed continues to
                position Majestic as a distinguished hospitality and real estate platform defined by
                thoughtful growth, refined execution, and legacy.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="team-grid-sec wrap">
        <h2 className="team-grid-title">Our Team</h2>
        <div className="team-grid">
          {members.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card-img">
                <img
                  src={member.img}
                  alt={member.name}
                  width="600"
                  height="800"
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
          <Link className="btn btn--gold" to="/#Contact">
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
