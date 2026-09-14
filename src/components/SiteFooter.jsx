import { Link } from 'react-router-dom'
import { FindUsMap } from './FindUsMap'

const WA_URL =
  'https://wa.me/255670004400?text=Hello%2C%20I%20am%20interested%20in%20The%20Hills%2C%20Nungwi.'

export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <Link className="mark" to="/">
              <img src="/images/logo-majestic.png" alt="Majestic" width="180" height="45" />
            </Link>
            <p className="ft-blurb">
              Premier real estate developer in Zanzibar, creating world-class properties with
              architectural excellence and luxury living.
            </p>
          </div>
          <div>
            <h5>Quick navigation</h5>
            <ul>
              <li>
                <Link to="/#Developer">About Majestic</Link>
              </li>
              <li>
                <Link to="/#About">Our Projects</Link>
              </li>
              <li>
                <Link to="/#Ownership">Why Invest</Link>
              </li>
              <li>
                <Link to="/careers">Careers at Majestic</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/#Contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/#Contact">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Office hours</h5>
            <ul className="ft-hours">
              <li>
                <span>Mon – Fri</span>
                <b>9:00 AM – 4:00 PM</b>
              </li>
              <li>
                <span>Sat &amp; Holidays</span>
                <b>9:00 AM – 12:30 PM</b>
              </li>
              <li>
                <span className="ft-closed-label">Sunday</span>
                <b className="ft-closed">Closed</b>
              </li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul className="ft-contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>Malindi, Stone Town, Zanzibar</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.4 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-6.4-5.6c-.5-.8-.8-1.7-.8-2.5 0-.9.4-1.6.9-2 .2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6a8.7 8.7 0 0 0 3.8 3.3c.3.1.5.1.6-.1l.8-1c.2-.2.3-.2.6-.1l2 1c.2.1.4.2.4.4s0 .8-.2 1.3z" />
                </svg>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  +255 670 004 400
                </a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" />
                  <path d="m3 7 9 7 9-7" />
                </svg>
                <a href="mailto:sales@majestic.tz">sales@majestic.tz</a>
              </li>
            </ul>
            <div className="soc">
              <a href="#" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.9 21.4H3V8.9h3.9v12.5zM4.9 7.2a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zM21.4 21.4h-3.9v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2v6.2H9.3V8.9H13v1.7h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.6 4.6 5.9v6.9z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8.5V6.8c0-.8.2-1.2 1.4-1.2H17V2.6h-2.6c-3.2 0-4.3 1.5-4.3 4v1.9H8V12h2.1v9.4h3.9V12h2.6l.4-3.5H14z" />
                </svg>
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.4 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-6.4-5.6c-.5-.8-.8-1.7-.8-2.5 0-.9.4-1.6.9-2 .2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6a8.7 8.7 0 0 0 3.8 3.3c.3.1.5.1.6-.1l.8-1c.2-.2.3-.2.6-.1l2 1c.2.1.4.2.4.4s0 .8-.2 1.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <FindUsMap />

        <div className="ft-affil">
          <div className="ft-affil-left">
            <p className="ft-affil-label">In affiliation with</p>
            <div className="ft-affil-logos">
              <a href="https://metropolishotel.ca/" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo-metropolis.png" alt="Metropolis" width="100" height="51" />
              </a>
              <a href="https://metropolisgroup.ca/" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo-mmg-group.png" alt="Metropolis Management Group" width="180" height="58" />
              </a>
            </div>
          </div>
          <div className="ft-affil-partners">
            <a className="ft-affil-right" href="https://www.crdbbank.co.tz/en" target="_blank" rel="noopener noreferrer">
              <img src="/images/logo-crdb.png" alt="CRDB Bank" width="140" height="63" />
              <div>
                <strong>Financing Partner</strong>
                <span>Financing available through CRDB</span>
              </div>
            </a>
            <a className="ft-affil-right" href="https://www.zipa.go.tz/" target="_blank" rel="noopener noreferrer">
              <img src="/images/logo-zipa.png" alt="ZIPA" width="72" height="54" />
              <div>
                <strong>ZIPA Approved</strong>
                <span>Zanzibar Investment Promotion Authority</span>
              </div>
            </a>
          </div>
        </div>

        <div className="ft-bar">
          <p>© 2026 Majestic Development. All rights reserved.</p>
          <p>
            Zanzibar, Tanzania <span aria-hidden="true">|</span> Designed by Archxstudio
          </p>
        </div>
      </div>
    </footer>
  )
}
