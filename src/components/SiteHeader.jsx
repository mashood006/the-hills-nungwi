import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const SHEET_BEFORE = [
  { href: '#Vision', label: 'Our Vision', num: '01' },
  { href: '#Zanzibar', label: 'Zanzibar', num: '02' },
  { href: '#About', label: 'About Us', num: '03' },
]

const SHEET_AFTER = [
  { href: '#Gallery', label: 'Gallery', num: '04' },
  { href: '#Amenities', label: 'Amenities', num: '05' },
  { href: '#Ownership', label: 'Ownership', num: '06' },
  { href: '#Residences', label: 'Residences', num: '07' },
  { href: '#Returns', label: 'Returns', num: '08' },
  { href: '#Finance', label: 'Finance', num: '09' },
  { href: '#Location', label: 'Location', num: '10' },
  { href: '#Excellence', label: 'Excellence', num: '11' },
  { href: '/team', label: 'Our Team', num: '12', route: true },
  { href: '#Contact', label: 'Register interest', num: '13' },
]

const NAV_LINKS = [
  { href: '#Vision', label: 'Our Vision' },
  { href: '#About', label: 'About Us' },
  { href: '#Gallery', label: 'Gallery' },
  { href: '#Insights', label: 'Insights' },
  { href: '#Residences', label: 'Residences' },
  { href: '#Location', label: 'Location' },
  { href: '#FAQ', label: 'FAQ' },
  { href: '/team', label: 'Our Team', route: true },
  { href: '#Contact', label: 'Contact' },
]

function ProjectCard({ project, onNavigate, compact = false }) {
  const external = project.external || /^https?:\/\//.test(project.href)
  return (
    <a
      className="mega-card"
      href={project.href}
      onClick={onNavigate}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <img src={project.img} alt="" width="640" height="640" loading="lazy" decoding="async" />
      <div className="mega-card-cap">
        <span>{project.location}</span>
        <strong>{project.name}</strong>
        {!compact && <em>{project.tagline}</em>}
      </div>
    </a>
  )
}

function SheetLink({ href, label, num, route }) {
  if (route) {
    return (
      <Link to={href}>
        {label}
        <span>{num}</span>
      </Link>
    )
  }
  return (
    <a href={href}>
      {label}
      <span>{num}</span>
    </a>
  )
}

export function SiteHeader({ blog = false }) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!megaOpen) return undefined

    function onKey(e) {
      if (e.key === 'Escape') setMegaOpen(false)
    }

    function onPointerDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setMegaOpen(false)
      }
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [megaOpen])

  function closeMega() {
    setMegaOpen(false)
    setMobileProjectsOpen(false)
  }

  const logo = blog ? (
    <Link className="mark" to="/">
      <img src="/images/logo-majestic.png" alt="Majestic" width="180" height="41" />
    </Link>
  ) : (
    <a className="mark" href="#top">
      <img src="/images/logo-majestic.png" alt="Majestic" width="180" height="41" />
    </a>
  )

  const cta = blog ? (
    <Link className="btn btn--gold hcta" to="/#Contact">
      Register interest
    </Link>
  ) : (
    <a className="btn btn--gold hcta" href="#Contact">
      Register interest
    </a>
  )

  return (
    <>
      <div
        className={`hdr-mega-wrap${megaOpen ? ' is-open' : ''}`}
        ref={wrapRef}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <header className={`hdr${blog ? ' stuck blog-page-hdr' : ''}${megaOpen ? ' hdr--mega-open' : ''}`} id="hdr">
          <div className="wrap hdr-row">
            {logo}

            <nav className="nav" aria-label="Primary">
              {NAV_LINKS.slice(0, 2).map((item) =>
                item.route ? (
                  <Link key={item.href} to={item.href}>
                    {item.label}
                  </Link>
                ) : blog ? (
                  <Link key={item.href} to={`/${item.href}`}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                )
              )}

              <div className={`nav-item nav-item--mega${megaOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="nav-mega-trigger"
                  aria-expanded={megaOpen}
                  aria-controls="projects-mega"
                  onMouseEnter={() => setMegaOpen(true)}
                  onClick={() => setMegaOpen((open) => !open)}
                >
                  Projects
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>

              {NAV_LINKS.slice(2).map((item) =>
                item.route ? (
                  <Link key={item.href} to={item.href}>
                    {item.label}
                  </Link>
                ) : blog ? (
                  <Link key={item.href} to={`/${item.href}`}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {cta}

            <button className="burg" id="burg" aria-label="Open menu" aria-expanded="false" aria-controls="sheet">
              <span></span>
            </button>
          </div>
        </header>

        {megaOpen && (
          <div className="mega is-open" id="projects-mega" onMouseEnter={() => setMegaOpen(true)}>
            <button type="button" className="mega-scrim" aria-label="Close projects menu" onClick={closeMega} />
            <div className="mega-glass">
              <div className="mega-in wrap">
                <div className="mega-intro">
                  <h3>The Collection</h3>
                  <p>Branded residences, resorts and hotels across Zanzibar.</p>
                  <a className="btn btn--line mega-all" href="#Gallery" onClick={closeMega}>
                    View all projects
                  </a>
                </div>

                <div className="mega-grid">
                  {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} onNavigate={closeMega} compact />
                  ))}
                  <a className="mega-card mega-card-term" href="#Gallery" onClick={closeMega}>
                    <span>View the full collection →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="sheet" id="sheet">
        {!blog && (
          <>
            {SHEET_BEFORE.map((item) => (
              <SheetLink key={item.href} {...item} />
            ))}

            <div className="sheet-projects">
              <button
                type="button"
                className={`sheet-projects-toggle${mobileProjectsOpen ? ' is-open' : ''}`}
                aria-expanded={mobileProjectsOpen}
                onClick={() => setMobileProjectsOpen((open) => !open)}
              >
                <span>Projects</span>
                <span className="sheet-projects-num">—</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>

              <div className={`sheet-projects-panel${mobileProjectsOpen ? ' is-open' : ''}`}>
                <p className="sheet-projects-lead">Branded residences, resorts and hotels across Zanzibar.</p>
                <div className="sheet-projects-grid">
                  {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} onNavigate={closeMega} />
                  ))}
                </div>
                <a className="sheet-projects-all" href="#Gallery" onClick={closeMega}>
                  View the full collection →
                </a>
              </div>
            </div>

            {SHEET_AFTER.map((item) => (
              <SheetLink key={item.href} {...item} />
            ))}
          </>
        )}

        {blog && (
          <>
            <Link to="/#Insights">Insights</Link>
            <Link to="/#Residences">Residences</Link>
            <Link to="/#Contact">Contact</Link>
          </>
        )}
      </div>
    </>
  )
}
