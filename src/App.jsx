import { useSiteEffects } from './hooks/useSiteEffects'
import { LeadForm } from './components/LeadForm'

export default function App() {
  useSiteEffects()

  return (
    <>


<header className="hdr" id="hdr">
  <div className="wrap">
    <a className="mark" href="#top"><i></i>Majestic</a>
    <nav className="nav">
      <a href="#Overview">Overview</a>
      <a href="#Property">The property</a>
      <a href="#Gallery">Gallery</a>
      <a href="#Features">Features</a>
      <a href="#Residences">Residences</a>
      <a href="#Location">Location</a>
      <a href="#FAQ">FAQ</a>
      <a href="#Contact">Contact</a>
    </nav>
    <a className="btn btn--gold hcta" href="#Contact">Register interest</a>
    <button className="burg" id="burg" aria-label="Open menu" aria-expanded="false" aria-controls="sheet"><span></span></button>
  </div>
</header>

<div className="sheet" id="sheet">
  <a href="#Overview">Overview <span>01</span></a>
  <a href="#Zanzibar">Zanzibar <span>02</span></a>
  <a href="#Property">The property <span>03</span></a>
  <a href="#Gallery">Gallery <span>04</span></a>
  <a href="#Features">Key features <span>05</span></a>
  <a href="#Ownership">Ownership <span>06</span></a>
  <a href="#Amenities">Amenities <span>07</span></a>
  <a href="#Residences">Residences <span>08</span></a>
  <a href="#Returns">Returns <span>09</span></a>
  <a href="#Finance">Finance <span>10</span></a>
  <a href="#Location">Location <span>11</span></a>
  <a href="#Excellence">Excellence <span>12</span></a>
  <a href="#Contact">Register interest <span>13</span></a>
</div>

<main id="top">

{/* ══ HERO ══ */}
<section className="hero">
  <div className="hero-img"><div className="ph par bg-hero" role="img" aria-label="The Hills, Nungwi — sunset over the Indian Ocean"></div></div>
  <div className="scroll-cue" aria-hidden="true"></div>
  <div className="wrap">
    <div className="chips hl hl1">
      <span className="chip">Nungwi, Zanzibar</span>
      <span className="chip">A project by Majestic</span>
      <span className="chip chip--g">Final pre-sale</span>
    </div>
    <h1 className="hl hl2">Built for the discerning <em className="g">traveler.</em></h1>
    <div className="hero-row">
      <p className="hl hl3">Seven floors of titled beachfront residences on the northern tip of Zanzibar — one minute's walk from a beach the tide never takes away.</p>
      <div className="hero-btns hl hl4">
        <a className="btn btn--gold" href="#Contact">Register interest</a>
        <a className="btn btn--glass" href="#Residences">View residences</a>
      </div>
    </div>
  </div>
  <dl className="glass hl hl5">
    <div><dt>Starting from</dt><dd>$140,000 <span style={{fontSize: '.5em', letterSpacing: '.1em'}}>USD</span></dd></div>
    <div><dt>Titled units</dt><dd>96</dd></div>
    <div><dt>Opening</dt><dd>Q4 2027</dd></div>
    <div><dt>To the beach</dt><dd>1 min walk</dd></div>
  </dl>
</section>

<div className="mq" aria-hidden="true">
  <div className="mq-in">
    <span>The first branded four-star condo-hotel in Zanzibar</span><span>96 titled units</span><span>60 owner usage days a year</span><span>Operated by Paragon &amp; Sonesta</span><span>Opening Q4 2027</span>
    <span>The first branded four-star condo-hotel in Zanzibar</span><span>96 titled units</span><span>60 owner usage days a year</span><span>Operated by Paragon &amp; Sonesta</span><span>Opening Q4 2027</span>
  </div>
</div>

{/* ══ OVERVIEW ══ */}
<section className="sec" id="Overview">
  <div className="wrap">
    <div className="overview a a-up">
      <div className="overview-copy">
        <span className="pill">Overview</span>
        <h2>The Hills, <em className="g">Nungwi</em></h2>
        <p className="body">The first branded four-star condo-hotel on the northern tip of Zanzibar — ninety-six titled residences above a full hotel operation run by Paragon and Sonesta.</p>
        <p className="body">Buyers hold the deed, use the unit sixty days a year, and collect contractual returns from the hotel around it. Opening Q4 2027, with remaining inventory now in final pre-sale.</p>
        <a className="btn btn--navy" href="#Contact">Talk to an advisor
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 6h16v10H8l-4 4V6z"/></svg>
        </a>
      </div>
      <aside className="overview-side" aria-label="Project highlights">
        <div>
          <span>Starting from</span>
          <b>$140,000 <small>USD</small></b>
        </div>
        <div>
          <span>Opening</span>
          <b>Q4 2027</b>
        </div>
        <div>
          <span>Titled units</span>
          <b className="badge-n">96</b>
        </div>
      </aside>
    </div>
  </div>
</section>

{/* ══ ZANZIBAR ══ */}
<section className="sec on-dark" id="Zanzibar">
  <div className="wrap">
    <div style={{maxWidth: '720px'}}>
      <span className="kick a a-up">Why invest here</span>
      <h2 className="a a-up" style={{'--d': '.08s'}}>Tanzania in Africa, Zanzibar <em className="g">at the heart of opportunity.</em></h2>
      <p className="lead a a-up" style={{'--d': '.16s', marginTop: '22px'}}>The leading beach destination in Africa — and a market that has run at high occupancy for five straight years.</p>
    </div>
    <div className="stats stg">
      <div><b data-count="80" data-suffix="%+">0</b><span>Average occupancy<br />Zanzibar, last 5 years</span></div>
      <div><b data-count="5.6" data-dec="1" data-suffix="M">0</b><span>Tourists in 2025<br />Record year</span></div>
      <div><b data-count="7" data-suffix="%">0</b><span>Economic<br />growth</span></div>
      <div><b data-count="15" data-suffix="%">0</b><span>Tourism<br />growth</span></div>
      <div><b data-count="20" data-suffix="+">0</b><span>International direct<br />flight destinations</span></div>
      <div><b data-count="50" data-suffix="%">0</b><span>Population growth<br />last 10 years</span></div>
    </div>
    <p className="a a-up" style={{marginTop: '26px', fontSize: '.8rem', color: 'rgba(255,255,255,.42)'}}>Figures as published by the developer. Past performance is not a guide to future returns.</p>
  </div>
</section>

{/* ══ PROPERTY ══ */}
<section className="sec" id="Property">
  <div className="wrap">
    <div className="duo duo--top">
      <div>
        <span className="kick a a-up">The property</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>The first branded four-star <em className="g">condo-hotel</em> in Zanzibar.</h2>
        <p className="lead a a-up" style={{'--d': '.16s', marginTop: '24px'}}>Seven floors. Private balconies. Contemporary architecture wrapped in tropical green.</p>
        <p className="body a a-up" style={{'--d': '.22s', marginTop: '1.3em'}}>Ninety-six titled units sit above a full hotel operation — lobby, restaurant, pool deck, gym, coworking and a rooftop bar. You hold the deed to your unit; Paragon Hotel &amp; Condo Operations and Sonesta run the hotel around it.</p>
        <p className="body a a-up" style={{'--d': '.28s'}}>That structure is what makes it unusual here. Nungwi has no shortage of resorts, but almost none of them let an individual buyer own a titled unit inside a branded four-star operation and still use it themselves.</p>
        <a className="arrow a a-up" href="#Ownership" style={{'--d': '.34s', marginTop: '16px'}}>How ownership works →</a>
      </div>
      <div className="frame tall a a-clip" style={{'--d': '.1s'}}><img className="ph par" src="/images/terrace.jpg" alt="View from a balcony across the beach club to the ocean" width="1200" height="1500" decoding="async" /></div>
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

{/* ══ OWNERSHIP ══ */}
<section className="priv" id="Ownership">
  <div className="ph par bg-night" role="img" aria-label="The development lit at night from above"></div>
  <div className="wrap" style={{position: 'relative', zIndex: '2'}}>
    <div className="priv-b" style={{paddingLeft: '0', paddingRight: '0'}}>
      <span className="kick a a-up">Ownership privileges</span>
      <h2 className="a a-up" style={{'--d': '.08s'}}>Stay in <em className="g">your hotel.</em></h2>
      <p className="lead a a-up" style={{'--d': '.16s', marginTop: '18px'}}>Real ownership perks for the owner of a titled unit.</p>
      <div className="days a a-l" style={{'--d': '.24s'}}>
        <b data-count="60">0</b>
        <div>usage days per year<span>For owners</span></div>
      </div>
      <ul className="plist stg">
        <li>No blackout dates, subject to availability</li>
        <li>Beach club and golf access from delivery</li>
        <li>Friends &amp; family — 30% off the published rate, subject to availability</li>
        <li>You hold the deed; Paragon Operations / Sonesta run the operation</li>
      </ul>
    </div>
  </div>
</section>

{/* ══ AMENITIES ══ */}
<section className="sec cream2" id="Amenities">
  <div className="wrap">
    <span className="kick a a-up">Amenities</span>
    <h2 className="head a a-up" style={{'--d': '.08s'}}>Everything <em className="g">on site.</em></h2>
    <div className="amen stg">
      <div><h4>The pool</h4><p>A terraced pool with water features at the centre of the site, wrapped by the two blocks.</p></div>
      <div><h4>Balconies with sea view</h4><p>Private balconies on most units, angled to hold the water and the sunset in frame.</p></div>
      <div><h4>Rooftop &amp; bar</h4><p>A circular bar under a lit canopy, open through the evening above the courtyard.</p></div>
      <div><h4>Restaurant</h4><p>Covered dining on the seaward edge of the site, looking out over the beach.</p></div>
      <div><h4>Supermarket</h4><p>An on-site store, so the basics don't need a drive into the village.</p></div>
      <div><h4>Gym</h4><p>Free weights, racks, cardio and a turf lane, glazed on two sides and open to the terrace.</p></div>
      <div><h4>Coworking</h4><p>A glazed meeting room and desks for the days that aren't a holiday.</p></div>
      <div><h4>Lounge &amp; art</h4><p>A double-height arrival lounge with concierge, seating and commissioned pieces.</p></div>
      <div><h4>Cabanas &amp; daybeds</h4><p>Timber pergolas at the water's edge, lit from within after dark.</p></div>
    </div>
    <div className="bento stg" style={{marginTop: '14px'}}>
      <div className="frame frame--cap g1"><div className="ph bg-pool" role="img" aria-label="Pool deck with parasols and loungers"></div><span className="cap"><i>01</i>Pool deck</span></div>
      <div className="frame frame--cap g2"><div className="ph bg-cabana" role="img" aria-label="Lit poolside cabana with daybed"></div><span className="cap"><i>02</i>Cabanas</span></div>
      <div className="frame frame--cap g3"><div className="ph bg-gym" role="img" aria-label="Fitness centre"></div><span className="cap"><i>03</i>Gym</span></div>
      <div className="frame frame--cap g4"><div className="ph bg-board" role="img" aria-label="Coworking and meeting room"></div><span className="cap"><i>04</i>Coworking</span></div>
      <div className="frame frame--cap g5"><div className="ph bg-top" role="img" aria-label="The buildings and the beach from above"></div><span className="cap"><i>05</i>The site</span></div>
      <div className="frame frame--cap g6"><div className="ph bg-couple" role="img" aria-label="A couple on a terrace at sunset"></div><span className="cap"><i>06</i>Terraces</span></div>
    </div>
  </div>
</section>

{/* ══ KEY FEATURES ══ */}
<section className="sec on-dark" id="Features">
  <div className="wrap">
    <div className="feat-head a a-up">
      <div>
        <span className="pill pill--dark">Features</span>
        <h2>Key <em className="g">features</em></h2>
      </div>
      <div className="carousel-nav" data-feat-nav role="group" aria-label="Feature controls">
        <button type="button" className="circ" data-prev aria-label="Previous features">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 6l-6 6 6 6"/></svg>
        </button>
        <button type="button" className="circ" data-next aria-label="Next features">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  </div>
  <div className="carousel feat-carousel" data-carousel>
    <div className="carousel-track" data-track tabIndex="0" aria-label="Key features">
      <article className="feat-card">
        <div className="feat-media"><img src="/images/facade.jpg" alt="Illuminated facade of The Hills" width="960" height="600" loading="lazy" decoding="async" /></div>
        <h3>Branded four-star operation</h3>
        <p>Paragon Hotel &amp; Condo Operations and Sonesta run the hotel — you own a titled unit inside it.</p>
      </article>
      <article className="feat-card">
        <div className="feat-media"><img src="/images/aerial1.jpg" alt="Aerial view of Nungwi beachfront" width="960" height="600" loading="lazy" decoding="async" /></div>
        <h3>Prime Nungwi beachfront</h3>
        <p>One minute’s walk to a non-tidal beach on the northern tip of Zanzibar — swimmable from sunrise to sunset.</p>
      </article>
      <article className="feat-card">
        <div className="feat-media"><img src="/images/pool.jpg" alt="Pool deck at The Hills" width="960" height="600" loading="lazy" decoding="async" /></div>
        <h3>60 owner usage days</h3>
        <p>Stay in your own hotel each year with no blackout dates, subject to availability, plus friends &amp; family rates.</p>
      </article>
      <article className="feat-card">
        <div className="feat-media"><img src="/images/court.jpg" alt="Courtyard and pool" width="960" height="600" loading="lazy" decoding="async" /></div>
        <h3>Contractual net returns</h3>
        <p>10% net in years 1–2, 12% in years 3–5, and 8–15% from year 6 — as set out in the purchase contract.</p>
      </article>
      <article className="feat-card">
        <div className="feat-media"><img src="/images/living.jpg" alt="Residence living space" width="960" height="600" loading="lazy" decoding="async" /></div>
        <h3>Titled ownership</h3>
        <p>You hold the deed to your apartment. Ninety-six units across seven floors, from one-bed suites to penthouses.</p>
      </article>
      <article className="feat-card">
        <div className="feat-media"><img src="/images/terrace.jpg" alt="Sea-view terrace" width="960" height="600" loading="lazy" decoding="async" /></div>
        <h3>Developer-backed finance</h3>
        <p>USD lending at 50% LTV, 5–6.5% fixed over 15 years — open to local and international buyers.</p>
      </article>
    </div>
  </div>
</section>

{/* ══ RESIDENCES ══ */}
<section className="sec" id="Residences">
  <div className="wrap">
    <span className="kick a a-up">Unit types</span>
    <h2 className="head a a-up" style={{'--d': '.08s'}}>Three ways to <em className="g">own here.</em></h2>
    <p className="lead a a-up" style={{'--d': '.16s', marginTop: '20px'}}>All remaining inventory is now in final pre-sale. Each floor runs 1,113.52 m².</p>
    <div className="res stg">
      <article className="unit">
        <div className="frame"><div className="ph bg-living" role="img" aria-label="One bedroom living space"></div></div>
        <div className="unit-b">
          <div className="t">One bedroom suite</div>
          <h3>Starting from</h3>
          <div className="pr">135,000 USD</div>
          <p>The smart investment — suited to the solo traveller or digital nomad, and optimised for high-occupancy short-term letting.</p>
          <ul className="spec">
            <li><span>Living room</span><b>13.3 m²</b></li>
            <li><span>Bedroom</span><b>14.5 m²</b></li>
            <li><span>Bathroom</span><b>5.8 m²</b></li>
            <li><span>Balcony</span><b>12.6 m²</b></li>
            <li><span>Total area</span><b>89.7 m²</b></li>
          </ul>
        </div>
      </article>
      <article className="unit">
        <div className="frame"><div className="ph bg-kitchen" role="img" aria-label="Two bedroom living and dining"></div></div>
        <div className="unit-b">
          <div className="t">Two bedroom sanctuary</div>
          <h3>Starting from</h3>
          <div className="pr">150,000 USD</div>
          <p>Space to breathe. Balanced between privacy and shared space, with an en-suite master, a generous lounge and a large terrace.</p>
          <ul className="spec">
            <li><span>Living room</span><b>12.8 m²</b></li>
            <li><span>Bedroom 1</span><b>15.7 m²</b></li>
            <li><span>Bedroom 2</span><b>13.4 m²</b></li>
            <li><span>Balconies</span><b>15.8 m²</b></li>
            <li><span>Total area</span><b>103.7 m²</b></li>
          </ul>
        </div>
      </article>
      <article className="unit">
        <div className="frame"><div className="ph bg-penthouse" role="img" aria-label="Penthouse terrace with private pool"></div></div>
        <div className="unit-b">
          <div className="t">Three bedroom penthouse</div>
          <h3>Starting from</h3>
          <div className="pr">499,000 USD</div>
          <p>Perched at the top, with a private pool, expansive entertainment decks and panoramic views over the ocean and the Nungwi skyline.</p>
          <ul className="spec">
            <li><span>Reception</span><b>49.3 m²</b></li>
            <li><span>Master bedroom</span><b>23.3 m²</b></li>
            <li><span>Bedrooms 2 &amp; 3</span><b>13.8 / 12.7 m²</b></li>
            <li><span>Terrace</span><b>27.5 m²</b></li>
            <li><span>Total area</span><b>317.5 m²</b></li>
          </ul>
        </div>
      </article>
    </div>
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
        <h4>Cash</h4>
        <div className="sub">paid upfront</div>
        <ul>
          <li><b>100%</b><div><em>at signing</em><small>Earn 5% annually through construction</small></div></li>
          <li><b>50%</b><div><em>at signing</em><small>Earn 4% annually through construction</small></div></li>
        </ul>
      </div>
      <div className="a a-r" style={{'--d': '.12s'}}>
        <h4>Deferred</h4>
        <div className="sub">staged</div>
        <ul>
          <li><b>30%</b><div><em>at contract signing</em></div></li>
          <li><b>20%</b><div><em>within 45 days of signing</em></div></li>
          <li><b>50%</b><div><em>balance at closing &amp; delivery</em></div></li>
        </ul>
      </div>
    </div>
    <div className="after a a-up" style={{'--d': '.2s'}}>
      <strong style={{fontFamily: "'Jost', sans-serif", fontStyle: 'normal', fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px'}}>After delivery</strong>
      Both options: 10% in Years 1–2, 12% in Years 3–5, 8–15% from Year 6, per contract.
    </div>
  </div>
</section>

{/* ══ FINANCE ══ */}
<section className="sec cream2" id="Finance">
  <div className="wrap">
    <div className="duo duo--top">
      <div className="frame tall a a-clip"><img className="ph par" src="/images/pool.jpg" alt="Poolside loungers under a thatched parasol" width="1200" height="1500" decoding="async" /></div>
      <div>
        <span className="kick a a-up">Finance</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>Finance <em className="g">your unit.</em></h2>
        <p className="lead a a-up" style={{'--d': '.16s', marginTop: '18px'}}>Developer-backed lending on the purchase of your unit, in USD.</p>
        <ul className="tbl stg">
          <li><em>Financing · LTV</em><span>50%</span></li>
          <li><em>Rate</em><span>5% – 6.5% fixed</span></li>
          <li><em>Term</em><span>15 years · principal + interest</span></li>
          <li><em>Eligibility</em><span>Local &amp; international buyers</span></li>
          <li><em>Approval</em><span>Pre-approval before purchase</span></li>
        </ul>
        <div className="steps stg">
          <div className="step"><b>01</b><div><span>Reserve</span><em>Secure the unit of your choice.</em></div></div>
          <div className="step"><b>02</b><div><span>Documents</span><em>Submit financial &amp; identification documents.</em></div></div>
          <div className="step"><b>03</b><div><span>Approval</span><em>For local and international buyers.</em></div></div>
        </div>
      </div>
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
      <div className="frame tall a a-clip" style={{'--d': '.1s'}}><img className="ph par" src="/images/aerial1.jpg" alt="Aerial view of The Hills within Nungwi" width="1200" height="1500" decoding="async" /></div>
    </div>
  </div>
</section>

{/* ══ DEVELOPER ══ */}
<section className="sec" id="Developer">
  <div className="wrap">
    <div className="duo">
      <div className="frame wide a a-clip"><img className="ph par" src="/images/facade.jpg" alt="The illuminated facade of The Hills" width="1600" height="900" decoding="async" /></div>
      <div>
        <span className="kick a a-up">The developer</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>A project by <em className="g">Majestic.</em></h2>
        <p className="body a a-up" style={{'--d': '.16s', marginTop: '22px'}}>The Hills Nungwi is presented by Majestic, a Zanzibar developer with decades of experience across hospitality and residential projects, and a portfolio that includes the Ocean Breeze hotel.</p>
        <p className="body a a-up" style={{'--d': '.22s'}}>Their work has shaped communities on the island through careful planning and craftsmanship, on the belief that a home or a hotel is more than a building — it's a space for memories, for a way of living, and for the beauty of Zanzibar itself.</p>
        <p className="body a a-up" style={{'--d': '.28s'}}>With The Hills, Majestic blends modern luxury with natural serenity: residences built for elegance, comfort and a lifestyle made with precision.</p>
      </div>
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
          <div className="qa"><p>A titled unit inside the hotel. You hold the deed to the apartment; Paragon Hotel &amp; Condo Operations and Sonesta run the hotel operation around it. You collect returns from that operation and you use the unit yourself.</p></div>
        </details>
        <details>
          <summary>How many days a year can I use it?</summary>
          <div className="qa"><p>60 usage days per year, with no blackout dates, subject to availability. Friends and family get 30% off the published rate, also subject to availability, and beach club and golf access come from delivery.</p></div>
        </details>
        <details>
          <summary>When does it open?</summary>
          <div className="qa"><p>Q4 2027. All remaining inventory is now in final pre-sale.</p></div>
        </details>
        <details>
          <summary>What does it cost?</summary>
          <div className="qa"><p>Units start at $140,000 USD. One-bedroom suites start from $135,000, two-bedroom apartments from $150,000, and three-bedroom penthouses from $499,000. Prices are confirmed at reservation — ask for the live availability list.</p></div>
        </details>
        <details>
          <summary>Is finance available?</summary>
          <div className="qa"><p>Yes — developer-backed lending in USD at 50% LTV, 5% to 6.5% fixed, over 15 years on a principal-and-interest basis. It's open to both local and international buyers, and you'll want pre-approval before purchase.</p></div>
        </details>
        <details>
          <summary>What returns are projected?</summary>
          <div className="qa"><p>The developer's programme sets out 10% net annually in Years 1–2, 12% in Years 3–5 and 8–15% from Year 6, on invested principal and per contract, with a contractual buyback option at the end of the term. These are projections rather than guarantees, and depend on how the hotel actually performs.</p></div>
        </details>
        <details>
          <summary>Can I buy from abroad?</summary>
          <div className="qa"><p>Yes. Reservations can be completed remotely and the financing is open to international buyers. The ownership structure and any tax treatment are set out in the executed purchase documents — take independent legal and tax advice on those before you commit.</p></div>
        </details>
      </div>
    </div>
  </div>
</section>

{/* ══ EXCELLENCE ══ */}
<section className="sec on-dark excellence" id="Excellence">
  <div className="wrap">
    <div className="excellence-inner a a-up">
      <span className="pill pill--dark">Luxury property</span>
      <h2>A new standard of <em className="g">excellence</em></h2>
      <p>The Hills Nungwi brings titled beachfront living to Zanzibar’s northern tip — contemporary residences, a full hotel operation, and the calm of a non-tidal shore, crafted by Majestic for owners who want both a home and a working asset.</p>
      <div className="excellence-media">
        <img src="/images/aerial2.jpg" alt="The Hills beachfront development at Nungwi" width="1600" height="900" loading="lazy" decoding="async" />
      </div>
      <a className="btn btn--cream" href="#Contact">Speak to sales team
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 6h16v10H8l-4 4V6z"/></svg>
      </a>
    </div>
  </div>
</section>

{/* ══ CONTACT ══ */}
<section className="sec on-dark" id="Contact">
  <div className="wrap">
    <div className="formgrid">
      <div>
        <span className="kick a a-up">Register interest</span>
        <h2 className="a a-up" style={{'--d': '.08s'}}>Imagine your <em className="g">life here.</em></h2>
        <p className="lead a a-up" style={{'--d': '.16s', marginTop: '20px'}}>Leave your details and the Majestic sales team will come back to you with the brochure, live availability and the current price list.</p>
        <div className="stg" style={{marginTop: '26px'}}>
          <div className="rowline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg>
            <div><b>sales@majestic.tz</b><span>Email the sales team</span></div>
          </div>
          <div className="rowline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4.5 3.5h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15.5 13.5l5 2v4a1 1 0 0 1-1.1 1A16.5 16.5 0 0 1 3.5 4.6a1 1 0 0 1 1-1.1z"/></svg>
            <div><b>+255 670 004 400</b><span>Call or WhatsApp</span></div>
          </div>
          <div className="rowline" style={{borderBottom: '0'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 2l8 3.5v6c0 5-3.4 9.2-8 10.5-4.6-1.3-8-5.5-8-10.5v-6L12 2z"/><path d="M8.6 11.9l2.4 2.4 4.4-4.6"/></svg>
            <div><b>Titled ownership</b><span>You hold the deed to the unit</span></div>
          </div>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px'}} className="a a-up" >
          <a className="btn btn--gold" href="https://wa.me/255670004400?text=Hello%2C%20I%20am%20interested%20in%20The%20Hills%2C%20Nungwi." target="_blank" rel="noopener">Chat on WhatsApp</a>
          <a className="btn btn--glass" href="mailto:sales@majestic.tz">Email us</a>
        </div>
      </div>

      <div className="a a-r">
        <LeadForm />
      </div>
    </div>
  </div>
</section>
</main>

<footer className="ft">
  <div className="wrap">
    <div className="ft-top">
      <div>
        <a className="mark" href="#top"><i></i>Majestic</a>
        <p style={{color: 'rgba(255,255,255,.66)', maxWidth: '36ch', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.14rem'}}>The Hills Nungwi — beachfront residences on the northern tip of Zanzibar.</p>
        <div className="soc">
          <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor"/></svg></a>
          <a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V6.8c0-.8.2-1.2 1.4-1.2H17V2.6h-2.6c-3.2 0-4.3 1.5-4.3 4v1.9H8V12h2.1v9.4h3.9V12h2.6l.4-3.5H14z"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 21.4H3V8.9h3.9v12.5zM4.9 7.2a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zM21.4 21.4h-3.9v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2v6.2H9.3V8.9H13v1.7h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.6 4.6 5.9v6.9z"/></svg></a>
          <a href="https://wa.me/255670004400" aria-label="WhatsApp"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.4 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-6.4-5.6c-.5-.8-.8-1.7-.8-2.5 0-.9.4-1.6.9-2 .2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6a8.7 8.7 0 0 0 3.8 3.3c.3.1.5.1.6-.1l.8-1c.2-.2.3-.2.6-.1l2 1c.2.1.4.2.4.4s0 .8-.2 1.3z"/></svg></a>
        </div>
      </div>
      <div>
        <h5>The project</h5>
        <ul>
          <li><a href="#Property">The property</a></li>
          <li><a href="#Gallery">Gallery</a></li>
          <li><a href="#Ownership">Ownership</a></li>
          <li><a href="#Amenities">Amenities</a></li>
          <li><a href="#Residences">Residences</a></li>
          <li><a href="#Location">Location</a></li>
        </ul>
      </div>
      <div>
        <h5>Invest</h5>
        <ul>
          <li><a href="#Zanzibar">Why Zanzibar</a></li>
          <li><a href="#Returns">Returns</a></li>
          <li><a href="#Payment">Payment</a></li>
          <li><a href="#Finance">Finance</a></li>
          <li><a href="#Developer">Developer</a></li>
          <li><a href="#Contact">Register interest</a></li>
        </ul>
      </div>
    </div>
    <p className="small">Important notice. This page and all related marketing material are provided for information and promotion only. They do not constitute an offer to sell securities, an investment solicitation, a financial product, a guarantee of performance, or a legally binding commitment of any kind. All projections, estimates, occupancy assumptions, rental income projections, return projections and appreciation estimates are provided by the project's developer and are inherently uncertain, being subject to market conditions, operating performance, construction timelines, regulatory change and other factors outside anyone's control. Ownership of a unit does not constitute ownership of, participation in, or equity investment in the developer, the hotel operator, Sonesta or any affiliated entity, unless expressly stated in a separately executed agreement. All imagery is computer-generated and indicative only; finishes, landscaping and views may differ from the completed development. Prospective purchasers should rely on their own independent investigation and professional advice, and are strongly encouraged to consult their own attorney, accountant, tax adviser and real estate professional before making any purchase decision. Where this page conflicts with the definitive purchase agreements and disclosure documents, the executed documents prevail.</p>
  </div>
</footer>

<div className="dock">
  <a className="btn btn--glass" href="#Residences">Residences</a>
  <a className="btn btn--gold" href="#Contact">Register</a>
</div>



    </>
  )
}
