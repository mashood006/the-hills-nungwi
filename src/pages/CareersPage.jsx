import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { JOBS } from '../data/jobs'
import { getLenis } from '../hooks/useSmoothScroll'

function formatPosted(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

function mailtoFor(job) {
  const subject = encodeURIComponent(`Application — ${job.title}`)
  const body = encodeURIComponent(
    [
      `Dear Majestic Careers Team,`,
      ``,
      `I wish to apply for the position of ${job.title} (${job.id}).`,
      ``,
      `Please find my CV / résumé attached.`,
      ``,
      `Full name:`,
      `Phone:`,
      `Current location:`,
      `LinkedIn / portfolio (optional):`,
      ``,
      `Thank you for your consideration.`,
    ].join('\n')
  )
  return `mailto:${job.applyEmail}?subject=${subject}&body=${body}`
}

export default function CareersPage() {
  const [openId, setOpenId] = useState(JOBS[0]?.id ?? null)

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [])

  return (
    <div className="careers-page">
      <SiteHeader blog />

      <section className="careers-hero">
        <img
          src="/images/team/team-group.jpg"
          alt=""
          width="2306"
          height="1536"
          decoding="async"
        />
        <div className="careers-hero-fade" aria-hidden="true" />
        <div className="wrap careers-hero-copy">
          <p className="careers-crumbs">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            Careers
          </p>
          <h1>
            Careers at <em className="g">Majestic.</em>
          </h1>
          <p className="careers-hero-lead">
            Join a Zanzibar-rooted hospitality and real estate team building places with identity,
            discipline, and lasting value.
          </p>
        </div>
      </section>

      <section className="careers-list wrap">
        <div className="careers-list-head">
          <h2>Open roles</h2>
          <p>{JOBS.length} positions · Updated regularly</p>
        </div>

        <div className="careers-jobs">
          {JOBS.map((job) => {
            const open = openId === job.id
            return (
              <article className={`careers-job${open ? ' is-open' : ''}`} key={job.id} id={job.id}>
                <button
                  type="button"
                  className="careers-job-toggle"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : job.id)}
                >
                  <div>
                    <h3>{job.title}</h3>
                    <p className="careers-job-meta">
                      <span>{job.department}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.employmentType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.workplaceType}</span>
                    </p>
                  </div>
                  <span className="careers-job-posted">Posted {formatPosted(job.posted)}</span>
                </button>

                {open && (
                  <div className="careers-job-body">
                    <p className="careers-job-summary">{job.summary}</p>

                    <h4>Key responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="careers-apply">
                      <p>
                        To apply, send your CV / résumé and a brief cover note to{' '}
                        <a href={`mailto:${job.applyEmail}`}>{job.applyEmail}</a>. Please use the
                        role title in your subject line. We review applications on a rolling basis
                        and will contact shortlisted candidates.
                      </p>
                      <a className="btn btn--navy" href={mailtoFor(job)}>
                        Apply by email
                      </a>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <aside className="careers-note">
          <h3>Equal opportunity</h3>
          <p>
            Majestic Luxury Suites Ltd is an equal opportunity employer. We consider all qualified
            applicants without regard to gender, age, religion, nationality, disability, or other
            protected characteristics under applicable law. Unsolicited agency CVs will not be
            accepted unless engaged under a signed agreement.
          </p>
        </aside>
      </section>

      <SiteFooter />
    </div>
  )
}
