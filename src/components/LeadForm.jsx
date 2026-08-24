import { useState } from 'react'

const ENDPOINT = '' // put your form endpoint here

function isBad(type, value) {
  const v = value.trim()
  if (!v) return true
  if (type === 'email') return !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
  if (type === 'tel') return v.replace(/\D/g, '').length < 7
  return false
}

export function LeadForm() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' })
  const [bad, setBad] = useState({})
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const [btnLabel, setBtnLabel] = useState('Send my details')

  function update(e) {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    setBad((b) => ({ ...b, [name]: false }))
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

    if (!ENDPOINT) {
      setDone(true)
      return
    }

    setSending(true)
    setBtnLabel('Sending…')
    try {
      const body = new FormData()
      Object.entries(fields).forEach(([k, v]) => body.append(k, v))
      await fetch(ENDPOINT, { method: 'POST', body })
      setDone(true)
    } catch {
      setSending(false)
      setBtnLabel('Try again')
    }
  }

  if (done) {
    return (
      <div className="thanks" style={{ display: 'block' }}>
        <h3>Thank you</h3>
        <p style={{ marginTop: '14px', opacity: 0.72 }}>
          The Majestic sales team will be in touch shortly with the brochure and the current price list.
        </p>
      </div>
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
        <p className="legal">
          By sending this form you agree to be contacted by Majestic about The Hills, Nungwi. Your details are not sold or shared.
        </p>
        <button className="btn btn--navy" type="submit" style={{ width: '100%' }} disabled={sending}>
          {btnLabel}
        </button>
      </form>
    </div>
  )
}
