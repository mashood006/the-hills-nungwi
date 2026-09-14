import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { getLenis } from '../hooks/useSmoothScroll'

const SHEET_BEFORE = [
  { href: '#Vision', label: 'Our Vision', num: '01' },
  { href: '#Zanzibar', label: 'Zanzibar', num: '02' },
  { href: '#About', label: 'About Us', num: '03' },
]

const SHEET_AFTER = [
  { href: '#Gallery', label: 'Gallery', num: '04' },
  { href: '/insights', label: 'Insights', num: '05', route: true },
  { href: '/media', label: 'Media', num: '06', route: true },
  { href: '#Amenities', label: 'Amenities', num: '07' },
  { href: '#Ownership', label: 'Ownership', num: '08' },
  { href: '#Residences', label: 'Residences', num: '09' },
  { href: '#Returns', label: 'Returns', num: '10' },
  { href: '#Finance', label: 'Finance', num: '11' },
  { href: '#Location', label: 'Location', num: '12' },
  { href: '#Excellence', label: 'Excellence', num: '13' },
  { href: '/team', label: 'Our Team', num: '14', route: true },
  { href: '/careers', label: 'Careers', num: '15', route: true },
  { href: '#Contact', label: 'Register interest', num: '16' },
]

const NAV_LINKS = [
  { href: '#Vision', label: 'Our Vision' },
  { href: '#About', label: 'About Us' },
  { href: '#Gallery', label: 'Gallery' },
  { href: '/insights', label: 'Insights', route: true },
  { href: '/media', label: 'Media', route: true },
  { href: '#Residences', label: 'Residences' },
  { href: '#Location', label: 'Location' },
  { href: '#FAQ', label: 'FAQ' },
  { href: '/team', label: 'Our Team', route: true },
  { href: '#Contact', label: 'Contact' },
]

function hashHref(href, blog) {
  if (!href.startsWith('#')) return href
  return blog ? `/${href}` : href
}

function ProjectCard({ project, onNavigate, compact = false, blog = false }) {
  const external = project.external || /^https?:\/\//.test(project.href)
  const href = external ? project.href : hashHref(project.href, blog)
  return (
    <a
      className="mega-card"
      href={href}
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

function SheetLink({ href, label, num, route, blog, onNavigate }) {
  if (route) {
    return (
      <Link to={href} onClick={onNavigate}>
        {label}
        <span>{num}</span>
      </Link>
    )
  }
  if (blog) {
    return (
      <Link to={hashHref(href, true)} onClick={onNavigate}>
        {label}
        <span>{num}</span>
      </Link>
    )
  }
  return (
    <a href={href} onClick={onNavigate}>
      {label}
      <span>{num}</span>
    </a>
  )
}

export function SiteHeader({ blog = false }) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
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

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : ''
    const lenis = getLenis()
    if (lenis) {
      if (sheetOpen) lenis.stop()
      else lenis.start()
    }
    return () => {
      document.body.style.overflow = ''
      if (lenis) lenis.start()
    }
  }, [sheetOpen])

  useEffect(() => {
    if (!sheetOpen) return undefined
    function onKey(e) {
      if (e.key === 'Escape') closeSheet()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [sheetOpen])

  function closeMega() {
    setMegaOpen(false)
    setMobileProjectsOpen(false)
  }

  function closeSheet() {
    setSheetOpen(false)
    setMobileProjectsOpen(false)
  }

  function toggleSheet() {
    setSheetOpen((open) => !open)
    setMegaOpen(false)
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
                  <Link key={item.href} to={hashHref(item.href, true)}>
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
                  <Link key={item.href} to={hashHref(item.href, true)}>
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

            <button
              type="button"
              className="burg"
              id="burg"
              aria-label={sheetOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={sheetOpen}
              aria-controls="sheet"
              onClick={toggleSheet}
            >
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
                  <a className="btn btn--line mega-all" href={hashHref('#Gallery', blog)} onClick={closeMega}>
                    View all projects
                  </a>
                </div>

                <div className="mega-grid">
                  {PROJECTS.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onNavigate={closeMega}
                      compact
                      blog={blog}
                    />
                  ))}
                  <a className="mega-card mega-card-term" href={hashHref('#Gallery', blog)} onClick={closeMega}>
                    <span>View the full collection →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`sheet${sheetOpen ? ' on' : ''}`} id="sheet" data-lenis-prevent>
        {SHEET_BEFORE.map((item) => (
          <SheetLink key={item.href} {...item} blog={blog} onNavigate={closeSheet} />
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
                <ProjectCard
                  key={project.id}
                  project={project}
                  onNavigate={closeSheet}
                  blog={blog}
                />
              ))}
            </div>
            <a className="sheet-projects-all" href={hashHref('#Gallery', blog)} onClick={closeSheet}>
              View the full collection →
            </a>
          </div>
        </div>

        {SHEET_AFTER.map((item) => (
          <SheetLink key={item.href} {...item} blog={blog} onNavigate={closeSheet} />
        ))}
      </div>
    </>
  )
}
