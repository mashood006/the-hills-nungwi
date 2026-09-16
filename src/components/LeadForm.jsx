import { useState } from 'react'

const FORM_ID = '39b3ff885a7b6607f436a215bfc49694'
const FORMSUBMIT = `https://formsubmit.co/ajax/${FORM_ID}`

function isLocalHost() {
  if (typeof window === 'undefined') return false
  const h = window.location.hostname
  return h === 'localhost' || h === '127.0.0.1'
}

function isBad(type, value) {
  const v = value.trim()
  if (!v) return true
  if (type === 'email') return !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
  if (type === 'tel') return v.replace(/\D/g, '').length < 7
  return false
}

async function postJson(url, payload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Request failed')
  return res
}

export function LeadForm({ variant = 'card' }) {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', interest: '', message: '', website: '' })
  const [bad, setBad] = useState({})
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [btnLabel, setBtnLabel] = useState(variant === 'inquiry' ? 'Send inquiry' : 'Send my details')
  const isInquiry = variant === 'inquiry'

  function update(e) {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    setBad((b) => ({ ...b, [name]: false }))
    setError('')
  }

  async function onSubmit(e) {
    e.preventDefault()
    const next = {
      name: isBad('text', fields.name),
      email: isBad('email', fields.email),
      phone: isBad('tel', fields.phone),
    }
    setBad(next)
    if (next.name || next.email || next.phone) return

    setSending(true)
    setError('')
    setBtnLabel('Sending…')

    const payload = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      interest: fields.interest || 'Not specified',
      message: fields.message.trim() || '—',
      website: fields.website,
      _subject: 'New inquiry — Majestic / The Hills',
      _template: 'table',
      _replyto: fields.email.trim(),
    }

    try {
      if (isLocalHost()) {
        await postJson(FORMSUBMIT, payload)
      } else {
        try {
          await postJson('/contact.php', payload)
        } catch {
          // Fallback if PHP mail is unavailable on the host
          await postJson(FORMSUBMIT, payload)
        }
      }
      setDone(true)
    } catch {
      setSending(false)
      setBtnLabel('Try again')
      setError('Something went wrong. Please try again or email mashood@sourcingsquare.com.')
    }
  }

  if (done) {
    return (
      <div className={isInquiry ? 'inquiry-thanks' : 'thanks'} style={isInquiry ? undefined : { display: 'block' }}>
        <h3>Thank you</h3>
        <p>
          The Majestic sales team will be in touch shortly with the brochure and the current price list.
        </p>
      </div>
    )
  }

  if (isInquiry) {
    return (
      <form className="inquiry-form" id="leadForm" noValidate onSubmit={onSubmit}>
        <div className={`f${bad.name ? ' bad' : ''}`}>
          <label htmlFor="n">Full name</label>
          <input id="n" name="name" type="text" placeholder="Your name" required value={fields.name} onChange={update} />
          <span className="e">Enter your name.</span>
        </div>
        <div className={`f${bad.email ? ' bad' : ''}`}>
          <label htmlFor="e">Email</label>
          <input id="e" name="email" type="email" placeholder="you@email.com" required value={fields.email} onChange={update} />
          <span className="e">Enter a valid email address.</span>
        </div>
        <div className="inquiry-form-row">
          <div className={`f${bad.phone ? ' bad' : ''}`}>
            <label htmlFor="p">Phone</label>
            <input id="p" name="phone" type="tel" placeholder="+255 000 000 000" required value={fields.phone} onChange={update} />
            <span className="e">Enter a valid phone number.</span>
          </div>
          <div className="f">
            <label htmlFor="i">I am a</label>
            <select id="i" name="interest" value={fields.interest} onChange={update}>
              <option value="">Select one</option>
              <option value="investor">Investor</option>
              <option value="buyer">Prospective buyer</option>
              <option value="realtor">Realtor</option>
              <option value="press">Press</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="f">
          <label htmlFor="m">Message</label>
          <textarea id="m" name="message" placeholder="Which unit type interests you?" value={fields.message} onChange={update} rows={3} />
        </div>
        <input
          type="text"
          name="website"
          value={fields.website}
          onChange={update}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
        />
        {error ? <p className="inquiry-form-error">{error}</p> : null}
        <button className="btn inquiry-submit" type="submit" disabled={sending}>
          {btnLabel}
          <span aria-hidden="true">→</span>
        </button>
      </form>
    )
  }

  return (
    <div className="formcard">
      <form id="leadForm" noValidate onSubmit={onSubmit}>
        <div className={`f${bad.name ? ' bad' : ''}`}>
          <label htmlFor="n">Full name</label>
          <input id="n" name="name" type="text" placeholder="Your name" required value={fields.name} onChange={update} />
          <span className="e">Enter your name.</span>
        </div>
        <div className={`f${bad.email ? ' bad' : ''}`}>
          <label htmlFor="e">Email</label>
          <input id="e" name="email" type="email" placeholder="you@email.com" required value={fields.email} onChange={update} />
          <span className="e">Enter a valid email address.</span>
        </div>
        <div className={`f${bad.phone ? ' bad' : ''}`}>
          <label htmlFor="p">Phone</label>
          <input id="p" name="phone" type="tel" placeholder="+255 000 000 000" required value={fields.phone} onChange={update} />
          <span className="e">Enter a valid phone number.</span>
        </div>
        <div className="f">
          <label htmlFor="m">Message</label>
          <textarea id="m" name="message" placeholder="Which unit type interests you?" value={fields.message} onChange={update} />
        </div>
        <input
          type="text"
          name="website"
          value={fields.website}
          onChange={update}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
        />
        <p className="legal">
          By sending this form you agree to be contacted by Majestic about The Hills, Nungwi. Your details are not sold or shared.
        </p>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="btn btn--navy" type="submit" style={{ width: '100%' }} disabled={sending}>
          {btnLabel}
        </button>
      </form>
    </div>
  )
}
