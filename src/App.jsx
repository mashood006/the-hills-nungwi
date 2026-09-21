import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { useSiteEffects } from './hooks/useSiteEffects'
import { getLenis, smoothScrollTo, useSmoothScroll } from './hooks/useSmoothScroll'
import { BlogSlider } from './components/BlogSlider'
import { LeadForm } from './components/LeadForm'
import { ResidenceUnits } from './components/ResidenceUnits'
import { BackToTop } from './components/BackToTop'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import BlogPost from './pages/BlogPost'
import CareersPage from './pages/CareersPage'
import InsightsPage from './pages/InsightsPage'
import MediaPage from './pages/MediaPage'
import TeamPage from './pages/TeamPage'

const WA_URL =
  'https://wa.me/255670004400?text=Hello%2C%20I%20am%20interested%20in%20The%20Hills%2C%20Nungwi.'

function Home() {
  useSiteEffects()
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')

    let cancelled = false

    function scrollToTarget() {
      if (cancelled) return
      const el = document.getElementById(id)
      if (!el) return false

      const lenis = getLenis()
      if (lenis) {
        lenis.scrollTo(el, { offset: -84, immediate: true })
      } else {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
        window.scrollBy(0, -84)
      }
      return true
    }

    let attempts = 0
    function poll() {
      if (cancelled) return
      if (scrollToTarget()) {
        window.setTimeout(() => { if (!cancelled) scrollToTarget() }, 400)
        return
      }
      if (++attempts < 40) window.setTimeout(poll, 80)
    }

    window.setTimeout(poll, 50)
    return () => { cancelled = true }
  }, [hash])

  return (
    <>


<SiteHeader />

<main id="top">

{/* ══ HERO ══ */}
<section className="hero">
  <div className="hero-img">
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/hero.jpg"
      aria-label="The Hills, Nungwi — aerial view"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
    <img className="hero-fallback" src="/images/hero.jpg" alt="" width="1920" height="1080" decoding="async" />
  </div>
  <div className="scroll-cue" aria-hidden="true"></div>
  <div className="wrap">
    <div className="chips hl hl1">
      <span className="chip">Nungwi, Zanzibar</span>
    </div>
    <h1 className="hl hl2">Crafting the spaces that will define <em className="g">Tanzania’s tomorrow.</em></h1>
    <div className="hero-row">
      <p className="hl hl3">At Majestic, we design and construct landmark developments that elevate communities, spark economic growth, and shape the future of Tanzania. From iconic commercial hubs to destination-defining hospitality, we build enduring spaces that set a new standard for excellence across the region.</p>
      <div className="hero-btns hl hl4">
        <a className="btn btn--gold" href="#Contact">Register interest</a>
        <a className="btn btn--glass" href="/the-hills-brochure.pdf" target="_blank" rel="noopener noreferrer">Download brochure</a>
      </div>
    </div>
  </div>
  <dl className="glass hl hl5">
    <div><dt>Starting from</dt><dd>$148,800 <span style={{fontSize: '.5em', letterSpacing: '.1em'}}>USD</span></dd></div>
    <div><dt>Total units</dt><dd>88</dd></div>
    <div><dt>Opening</dt><dd>March 2028</dd></div>
    <div><dt>To the beach</dt><dd>1 min walk</dd></div>
  </dl>
</section>

<div className="mq" aria-hidden="true">
  <div className="mq-in">
    <span>88 total units</span><span>The Hills, Nungwi</span><span>Opening March 2028</span>
    <span>88 total units</span><span>The Hills, Nungwi</span><span>Opening March 2028</span>
  </div>
</div>

{/* ══ OUR VISION ══ */}
<section className="sec" id="Vision">
  <div className="wrap">
    <div className="duo">
      <div>
        <span className="kick a a-up">Our Vision</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>Redefining <em className="g">PREMIUM</em> Real Estate</h2>
        <p className="body a a-up" style={{'--d': '.16s', marginTop: '24px'}}>We envision a Zanzibar where world-class architecture meets timeless natural beauty, creating spaces that inspire, endure, and appreciate in value.</p>
        <p className="body a a-up" style={{'--d': '.22s'}}>Our mission is to develop properties that serve as benchmarks for quality, sustainability, and investor confidence in the region. Each project reflects our commitment to excellence and our deep respect for Zanzibar&apos;s unique heritage.</p>
        <a className="arrow a a-up" href="#Contact" style={{'--d': '.28s', marginTop: '16px'}}>Talk to an advisor →</a>
      </div>
      <div className="frame wide a a-clip" style={{'--d': '.1s'}}>
        <img className="ph par" src="/images/vision-facade.jpg" alt="The Hills illuminated facade at dusk" width="2752" height="1536" loading="lazy" decoding="async" />
      </div>
    </div>
  </div>
</section>

{/* ══ DEVELOPER ══ */}
<section className="devband" id="Developer">
  <div className="wrap devband-inner">
    <div className="devband-grid">
      <div className="devband-left a a-l">
        <figure className="devband-photo">
          <img src="/images/developer-portrait.png" alt="Majestic leadership" width="764" height="1024" loading="lazy" decoding="async" />
          <figcaption>
            <strong>Majestic</strong>
            <span>Developer · The Hills, Nungwi</span>
          </figcaption>
        </figure>
        <div className="devband-actions">
          <a className="devband-btn" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="devband-btn" href="https://majestic.tz/" target="_blank" rel="noopener noreferrer">majestic.tz</a>
        </div>
      </div>
      <div className="devband-copy a a-r">
        <span className="devband-quote" aria-hidden="true">“</span>
        <span className="devband-eyebrow">Managing Director | Majestic Luxury Suites Ltd</span>
        <h2 className="devband-headline">Mohammed Munir Omar</h2>
        <div className="devband-text">
          <p>
            Mohammed Munir Omar is an entrepreneur and business leader with more than a decade of experience across hospitality, real estate, trading, and investment. As Managing Director of Majestic Luxury Suites Ltd, he leads with a clear philosophy: to build with purpose, grow with discipline, and create assets with enduring value.
          </p>
          <p>
            Under his leadership, Majestic has built a distinctive hospitality portfolio that includes{" "}
            <em>Ocean Breeze Property</em>, <em>Double A Property</em>, <em>The Roundabout Property</em>, and <em>Ocean Breeze BnB</em>, collectively representing more than <strong>100 rooms under management</strong>.
          </p>
          <p>
            Today, Mohammed is guiding the Group into its next chapter through real estate development. At the forefront is{" "}
            <em>The Hills Nungwi</em>, an exclusive collection of <strong>88 residences</strong>, with a further{" "}
            <strong>150 units in the development pipeline</strong>.
          </p>
          <p>
            His vision extends beyond buildings and hospitality assets. It is about creating places with identity, investments with longevity, and experiences that remain meaningful long after the first impression.
          </p>
          <p>
            Rooted in Zanzibar and shaped by a long-term perspective, Mohammed continues to position Majestic as a distinguished hospitality and real estate platform defined by thoughtful growth, refined execution, and legacy.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ══ ZANZIBAR INTRO + CINEMATIC ══ */}
<section className="znintro">
  <div className="wrap znintro-in">
    <h2 className="znintro-title a a-up">Redefining development in Zanzibar as a harmonious blend of place, design and permanence.</h2>
    <p className="znintro-desc a a-up" style={{'--d': '.12s'}}>Majestic conceives and delivers branded residences and hospitality assets across Zanzibar. At The Hills, Nungwi, that means titled beachfront living above a full property operation — architecture, hospitality and long-term value working as one, for owners who want a home and a working asset on Africa’s leading island destination.</p>
  </div>
</section>

<section className="cine" aria-label="Zanzibar">
  <div className="cine-media">
    <video
      className="cine-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/aerial2.jpg"
      aria-hidden="true"
    >
      <source src="/videos/zanzibar.mp4" type="video/mp4" />
    </video>
    <img className="cine-fallback" src="/images/aerial2.jpg" alt="" width="1920" height="1080" decoding="async" />
  </div>
  <div className="cine-scrim" aria-hidden="true" />
  <div className="cine-grad" aria-hidden="true" />
  <div className="cine-pin">
    <svg width="17" height="20" viewBox="0 0 16 18" fill="none" aria-hidden="true"><path d="M8 1.1C4.6 1.1 1.9 3.8 1.9 7.2c0 4.35 6.1 9.4 6.1 9.4s6.1-5.05 6.1-9.4C14.1 3.8 11.4 1.1 8 1.1z" stroke="#fff" strokeWidth="1.1"/><circle cx="8" cy="7.1" r="2.1" stroke="#fff" strokeWidth="1.1"/></svg>
    <span>Zanzibar</span>
  </div>
</section>

{/* ══ ZANZIBAR ══ */}
<section className="why-invest" id="Zanzibar">
  <div className="why-invest-bg" aria-hidden="true">
    <img src="/images/why-invest.jpg" alt="" width="1920" height="1080" decoding="async" />
    <div className="why-invest-scrim" />
  </div>
  <div className="wrap why-invest-in">
    <div className="why-invest-copy a a-up">
      <span className="kick">Why invest in The Hills Nungwi</span>
      <h2>Tanzania in Africa, Zanzibar <em className="g">at the Heart of Opportunity</em></h2>
      <p>The leading Beach destination in Africa</p>
    </div>
    <div className="why-stats stg">
      <div><b data-count="7" data-suffix="%">0</b><span>Economic growth</span></div>
      <div><b data-count="15" data-suffix="%">0</b><span>Tourism growth</span></div>
      <div><b>15–20%</b><span>Return on Investment</span></div>
      <div><b data-count="20" data-suffix="+">0</b><span>International direct flight destinations</span></div>
      <div><b data-count="1.9" data-dec="1">0</b><span>Million residents</span></div>
      <div><b data-count="50" data-suffix="%">0</b><span>Population growth in the last 10 years</span></div>
    </div>
    <p className="why-invest-note a a-up">Figures as published by the developer. Past performance is not a guide to future returns.</p>
  </div>
</section>

{/* ══ ABOUT US ══ */}
<section className="sec" id="About">
  <div className="wrap">
    <div className="duo duo--top">
      <div>
        <span className="kick a a-up">About Us</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>Building Trust Through <em className="g">Excellence</em></h2>
        <p className="body a a-up" style={{'--d': '.16s', marginTop: '24px'}}>Majestic Development stands as Zanzibar&apos;s premier PREMIUM real estate developer, committed to creating properties that define new standards of excellence in East Africa&apos;s most captivating destination.</p>
        <span className="kick about-subkick a a-up" style={{'--d': '.2s'}}>Committed to Zanzibar</span>
        <p className="body a a-up" style={{'--d': '.24s'}}>We are not simply building properties; we are investing in Zanzibar&apos;s future. Our developments create employment opportunities, support local craftsmen, and contribute to the island&apos;s growing reputation as a world-class destination.</p>
        <p className="body a a-up" style={{'--d': '.28s'}}>Through responsible development practices and community engagement, we ensure that our growth contributes positively to the economic and social fabric of this extraordinary island.</p>
        <a className="arrow a a-up" href="#Contact" style={{'--d': '.34s', marginTop: '16px'}}>Talk to an advisor →</a>
      </div>
      <div className="frame tall a a-clip" style={{'--d': '.1s'}}><img className="ph par" src="/images/property-lagoon.jpg" alt="Boats in a turquoise mangrove lagoon near Zanzibar" width="2752" height="1536" decoding="async" /></div>
    </div>
  </div>
</section>

{/* ══ GALLERY ══ */}
<section className="sec on-dark" id="Gallery">
  <div className="wrap">
    <div className="gal-head a a-up">
      <span className="pill pill--dark">Image gallery</span>
      <h2>Project <em className="g">gallery</em></h2>
    </div>
  </div>
  <div className="carousel" data-carousel>
    <div className="carousel-track" data-track tabIndex="0" aria-label="Project gallery images">
      <figure className="carousel-slide"><img src="/images/aerial2.jpg" alt="The Hills seen from the ocean side at Nungwi" width="1400" height="900" decoding="async" /><figcaption>The site</figcaption></figure>
      <figure className="carousel-slide"><img src="/images/court.jpg" alt="Courtyard pool, fire feature and cabanas" width="1400" height="900" decoding="async" /><figcaption>The pool</figcaption></figure>
      <figure className="carousel-slide"><img src="/images/facade.jpg" alt="Illuminated facade at dusk" width="1400" height="900" decoding="async" /><figcaption>Facade</figcaption></figure>
      <figure className="carousel-slide"><img src="/images/lobby.jpg" alt="Arrival lounge with sculptural lighting" width="1400" height="900" decoding="async" /><figcaption>Lobby</figcaption></figure>
      <figure className="carousel-slide"><img src="/images/bar.jpg" alt="Rooftop bar lit at dusk" width="1400" height="900" decoding="async" /><figcaption>Rooftop &amp; bar</figcaption></figure>
      <figure className="carousel-slide"><img src="/images/kitchen.jpg" alt="Living and dining space with sea view" width="1400" height="900" decoding="async" /><figcaption>Interiors</figcaption></figure>
      <figure className="carousel-slide"><img src="/images/terrace.jpg" alt="Terrace overlooking the coast" width="1400" height="900" decoding="async" /><figcaption>Terraces</figcaption></figure>
      <figure className="carousel-slide"><img src="/images/pool.jpg" alt="Pool deck with parasols" width="1400" height="900" decoding="async" /><figcaption>Pool deck</figcaption></figure>
    </div>
    <div className="wrap">
      <div className="carousel-bar">
        <a className="btn btn--cream" href="#Contact">View full gallery
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <div className="carousel-nav" role="group" aria-label="Gallery controls">
          <button type="button" className="circ" data-prev aria-label="Previous images">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <button type="button" className="circ" data-next aria-label="Next images">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ══ AMENITIES ══ */}
<section className="sec cream2" id="Amenities">
  <div className="wrap">
    <span className="kick a a-up">Why Zanzibar</span>
    <h2 className="head a a-up" style={{'--d': '.08s'}}>A destination that <em className="g">endures.</em></h2>
    <div className="amen stg">
      <div>
        <span className="amen-ico" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 16l6-6 4 4 6-8"/><path d="M14 6h6v6"/></svg>
        </span>
        <h4>Year-Round Paradise</h4>
        <p>Tropical climate with consistent sunshine and pristine beaches throughout the year.</p>
      </div>
      <div>
        <span className="amen-ico" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>
        </span>
        <h4>Global Connectivity</h4>
        <p>Direct flights from major hubs in Europe, Middle East, and Africa.</p>
      </div>
      <div>
        <span className="amen-ico" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v10"/><path d="M15.2 9.2A2.4 2.4 0 0 0 12 8.2c-1.5 0-2.6.8-2.6 2s1.1 1.8 2.6 2.2 2.6.8 2.6 2-1.1 2-2.6 2a2.5 2.5 0 0 1-3.1-1.2"/></svg>
        </span>
        <h4>Growing Economy</h4>
        <p>Double-digit tourism growth and expanding premium real estate market.</p>
      </div>
      <div>
        <span className="amen-ico" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4c1.8 2.2 3 4.2 3 6a3 3 0 1 1-6 0c0-1.8 1.2-3.8 3-6z"/><path d="M7.5 14c1.2 1.4 2 2.6 2 3.6a2.5 2.5 0 1 1-5 0c0-1 .8-2.2 2-3.6z"/><path d="M16.5 14c1.2 1.4 2 2.6 2 3.6a2.5 2.5 0 1 1-5 0c0-1 .8-2.2 2-3.6z"/></svg>
        </span>
        <h4>Natural Beauty</h4>
        <p>UNESCO sites, marine reserves, and untouched natural landscapes.</p>
      </div>
      <div>
        <span className="amen-ico" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/></svg>
        </span>
        <h4>Modern Infrastructure</h4>
        <p>Rapidly developing facilities with world-class hospitality standards.</p>
      </div>
      <div>
        <span className="amen-ico" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><rect x="4" y="7" width="16" height="14"/><path d="M4 12h16"/></svg>
        </span>
        <h4>Investment Friendly</h4>
        <p>Favorable policies for international investors and property ownership.</p>
      </div>
    </div>
    <div className="bento bento--split stg" style={{marginTop: '14px'}}>
      <div className="bento-stack">
        <div className="frame bento-pool">
          <div className="ph bg-pool" role="img" aria-label="Pool deck with parasols and loungers"></div>
        </div>
        <div className="frame">
          <div className="ph bg-beach-girl" role="img" aria-label="Looking out over the beach and dhows at Nungwi"></div>
        </div>
      </div>
      <div className="frame bento-feature">
        <div className="ph bg-cabanas-hand" role="img" aria-label="Hand holding shells on the Nungwi shore at sunset"></div>
      </div>
    </div>
  </div>
</section>

{/* ══ OWNERSHIP ══ */}
<section className="priv" id="Ownership">
  <div className="ph par bg-ownership-sea" role="img" aria-label="Traditional outrigger boat on clear turquoise water in Zanzibar"></div>
  <div className="wrap" style={{position: 'relative', zIndex: '2'}}>
    <div className="priv-b" style={{paddingLeft: '0', paddingRight: '0'}}>
      <span className="kick a a-up">Ownership privileges</span>
      <h2 className="a a-up" style={{'--d': '.08s'}}>Imagine your <em className="g">life here.</em></h2>
      <p className="lead lead--hl a a-up" style={{'--d': '.16s', marginTop: '18px'}}>Wake to turquoise water, spend 21 days a year in your own titled residence, and let the investment earn when you are away.</p>
    </div>
  </div>
</section>

{/* ══ RESIDENCES ══ */}
<section className="sec cream2" id="Residences">
  <div className="wrap">
    <span className="kick a a-up">Unit types</span>
    <h2 className="head a a-up" style={{'--d': '.08s'}}>Three ways to <em className="g">own here.</em></h2>
    <p className="lead a a-up" style={{'--d': '.16s', marginTop: '20px'}}>All remaining inventory is now in final pre-sale. Each floor runs 1,113.52 m².</p>
    <ResidenceUnits />
    <div className="a a-up" style={{marginTop: '30px'}}><a className="arrow" href="#Contact">Request full floor plans →</a></div>
  </div>
</section>

{/* ══ RETURNS ══ */}
<section className="sec on-dark" id="Returns">
  <div className="wrap">
    <div className="duo duo--top">
      <div>
        <span className="kick a a-up">The returns</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>Your capital <em className="g">working from day one.</em></h2>
        <p className="lead a a-up" style={{'--d': '.16s', marginTop: '20px'}}>Net, annual, on invested principal — as set out in the purchase contract.</p>
      </div>
      <div>
        <div className="ret">
          <div className="ret-row a a-r"><b>10%</b><div className="bar" style={{'--r': '33%'}}><i></i></div><div className="lbl"><em>Years 1–2</em><span>Net · operation</span></div></div>
          <div className="ret-row a a-r" style={{'--d': '.12s'}}><b>12%</b><div className="bar" style={{'--r': '22%'}}><i></i></div><div className="lbl"><em>Years 3–5</em><span>Net · operation</span></div></div>
          <div className="ret-row a a-r" style={{'--d': '.24s'}}><b>8–15%</b><div className="bar" style={{'--r': '6%'}}><i></i></div><div className="lbl"><em>Year 6 onward</em><span>Net · operation</span></div></div>
        </div>
        <div className="note a a-up" style={{'--d': '.34s'}}>
          <span className="mono">Exit · developer buyback</span>
          <p style={{fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.1rem', margin: '0'}}>A contractual buyback option from the developer at the end of the term — a fixed, contractual, developer-backed programme.</p>
        </div>
        <p className="a a-up" style={{'--d': '.4s', marginTop: '20px', fontSize: '.78rem', color: 'rgba(255,255,255,.42)'}}>Return figures are projections provided by the developer, not guarantees. They depend on operating performance and market conditions. Take independent financial and legal advice before committing.</p>
      </div>
    </div>
  </div>
</section>

{/* ══ PAYMENT ══ */}
<section className="sec" id="Payment">
  <div className="wrap">
    <span className="kick a a-up">Payment</span>
    <h2 className="head a a-up" style={{'--d': '.08s'}}>Two ways <em className="g">to pay.</em></h2>
    <div className="pay">
      <div className="a a-l">
        <h4>Standard construction plan</h4>
        <ul>
          <li><b>30%</b><div><em>initial payment</em></div></li>
          <li><b>20%</b><div><em>second payment</em></div></li>
          <li><b>30%</b><div><em>third payment</em></div></li>
          <li><b>20%</b><div><em>final payment</em></div></li>
        </ul>
        <p className="pay-note">Payment timing and milestones are governed by the SPA.</p>
      </div>
      <div className="a a-r" style={{'--d': '.12s'}}>
        <h4>Escrow option</h4>
        <p className="pay-lead">Deposits protected through escrow</p>
        <p className="pay-body">
          Escrow is optional. The current fee is 1% per deposit, with funds released against agreed construction milestones.
        </p>
      </div>
    </div>
    <div className="after a a-up" style={{'--d': '.2s'}}>
      <strong className="after-label">Prices are VAT exclusive.</strong>
      VAT is 15% and may be paid with instalments or at the end, as agreed in the payment schedule.
    </div>
  </div>
</section>

{/* ══ LOCATION ══ */}
<section className="sec on-dark" id="Location">
  <div className="wrap">
    <div className="duo duo--top">
      <div>
        <span className="kick a a-up">The location: Nungwi</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>The crown of <em className="g">the north.</em></h2>
        <p className="lead a a-up" style={{'--d': '.16s', marginTop: '20px'}}>Nungwi is famous for its non-tidal beaches — the ocean here stays swimmable from sunrise to sunset.</p>
        <p className="body a a-up" style={{'--d': '.22s', marginTop: '1.2em'}}>Unlike much of the island, where the tide shifts the shoreline dramatically through the day, the water at the northern tip holds. That means uninterrupted turquoise, open horizon views, and the freedom to swim, sail or dive whenever you feel like it — not when the chart allows.</p>
        <ul className="times stg">
          <li><b>The beach</b><span>1 minute walk</span></li>
          <li><b>Essque Zalu</b><span>500 metres</span></li>
          <li><b>Nungwi Dreams by Mantis</b><span>Next door</span></li>
          <li><b>Sunset cruise departure point</b><span>Under 5 min drive</span></li>
          <li><b>Nungwi Airport</b><span>5 km</span></li>
        </ul>
      </div>
      <div className="frame tall a a-clip" style={{'--d': '.1s'}}><img className="ph par" src="/images/location-turtles.jpg" alt="Snorkeling with sea turtles in clear turquoise water near Nungwi" width="1200" height="1600" decoding="async" /></div>
    </div>
  </div>
</section>

{/* ══ FAQ ══ */}
<section className="sec cream2" id="FAQ">
  <div className="wrap">
    <div className="duo duo--top">
      <div>
        <span className="kick a a-up">FAQ</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>Questions buyers <em className="g">ask first.</em></h2>
        <p className="lead a a-up" style={{'--d': '.16s', marginTop: '20px'}}>Anything not covered here, the Majestic sales team can answer directly.</p>
      </div>
      <div className="faq stg">
        <details open>
          <summary>What exactly am I buying?</summary>
          <div className="qa"><p>A titled unit inside the property. You hold the deed to the apartment; a professional property operator runs the property operation around it. You collect returns from that operation and you use the unit yourself.</p></div>
        </details>
        <details>
          <summary>How many days a year can I use it?</summary>
          <div className="qa"><p>21 usage days per year, with no blackout dates, subject to availability.</p></div>
        </details>
        <details>
          <summary>When does it open?</summary>
          <div className="qa"><p>March 2028. All remaining inventory is now in final pre-sale.</p></div>
        </details>
        <details>
          <summary>What does it cost?</summary>
          <div className="qa"><p>Units start at $148,800 USD. One-bedroom suites start from $148,800, two-bedroom apartments from $165,300, and three-bedroom penthouses from $499,000. Prices are confirmed at reservation — ask for the live availability list.</p></div>
        </details>
        <details>
          <summary>What returns are projected?</summary>
          <div className="qa"><p>The developer's programme sets out 10% net annually in Years 1–2, 12% in Years 3–5 and 8–15% from Year 6, on invested principal and per contract, with a contractual buyback option at the end of the term. These are projections rather than guarantees, and depend on how the property actually performs.</p></div>
        </details>
        <details>
          <summary>Can I buy from abroad?</summary>
          <div className="qa"><p>Yes. Reservations can be completed remotely. The ownership structure and any tax treatment are set out in the executed purchase documents — take independent legal and tax advice on those before you commit.</p></div>
        </details>
      </div>
    </div>
  </div>
</section>

{/* ══ EXCELLENCE ══ */}
<section className="sec on-dark excellence" id="Excellence">
  <div className="wrap">
    <div className="excellence-copy a a-up">
      <span className="pill pill--dark">Luxury property</span>
      <h2>A new standard of <em className="g">excellence</em></h2>
      <p>The Hills Nungwi brings titled beachfront living to Zanzibar’s northern tip — contemporary residences, a full property operation, and the calm of a non-tidal shore, crafted by Majestic for owners who want both a home and a working asset.</p>
    </div>
  </div>
  <div className="excellence-media a a-up">
    <img src="/images/excellence.jpg" alt="The Hills beachfront development at Nungwi at dusk" width="2752" height="1536" loading="lazy" decoding="async" />
  </div>
  <div className="wrap">
    <div className="excellence-cta a a-up">
      <a className="btn btn--cream" href="#Contact">Speak to sales team
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 6h16v10H8l-4 4V6z"/></svg>
      </a>
    </div>
  </div>
</section>

{/* ══ INSIGHTS / BLOG ══ */}
<section className="sec blog" id="Insights">
  <div className="wrap">
    <div className="blog-head a a-up">
      <span className="kick">Nungwi living</span>
      <h2>Zanzibar <em className="g">property</em> &amp; investment insights.</h2>
      <p>Expert guidance on luxury real estate, investment opportunities, and premium living at The Hills Nungwi.</p>
      <Link className="arrow" to="/insights" style={{ marginTop: '18px' }}>
        View all insights →
      </Link>
    </div>
  </div>
  <BlogSlider />
</section>

{/* ══ CONTACT ══ */}
<section className="contact-band" id="Contact">
  <div className="contact-band-bg" aria-hidden="true">
    <img src="/images/contact-beach.jpg" alt="" width="2752" height="1536" decoding="async" />
    <div className="contact-band-scrim" />
  </div>
  <div className="wrap">
    <div className="contact-panel a a-up">
      <div className="contact-panel-copy">
        <h2>Let&apos;s shape the future of<br /><em className="g">Zanzibar&apos;s coastlines.</em></h2>
        <p>
          Whether you are a developer, a luxury property operator, or a media representative, our team provides the insight, vision, and local expertise needed to turn high-value opportunities into iconic destinations.
        </p>
        <div className="contact-panel-meta">
          <div>
            <h3>Contact</h3>
            <a className="contact-meta-line" href="mailto:sales@majestic.tz">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 7 9-7"/></svg>
              sales@majestic.tz
            </a>
            <a className="contact-meta-line" href={WA_URL} target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4.5 3.5h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15.5 13.5l5 2v4a1 1 0 0 1-1.1 1A16.5 16.5 0 0 1 3.5 4.6a1 1 0 0 1 1-1.1z"/></svg>
              +255 670 004 400
            </a>
          </div>
          <div>
            <h3>Address</h3>
            <p className="contact-meta-line">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
              Malindi, Stone Town, Zanzibar
            </p>
          </div>
        </div>
      </div>
      <div className="contact-panel-form">
        <LeadForm variant="inquiry" />
      </div>
    </div>
  </div>
</section>
</main>

<SiteFooter />

<a
  className="wa-fab"
  href={WA_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.4 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-6.4-5.6c-.5-.8-.8-1.7-.8-2.5 0-.9.4-1.6.9-2 .2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6a8.7 8.7 0 0 0 3.8 3.3c.3.1.5.1.6-.1l.8-1c.2-.2.3-.2.6-.1l2 1c.2.1.4.2.4.4s0 .8-.2 1.3z" />
  </svg>
</a>

    </>
  )
}

export default function App() {
  useSmoothScroll()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<BlogPost />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  )
}
