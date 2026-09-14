import { useEffect, useState } from 'react'

const UNITS = [
  {
    id: '1bed',
    title: 'One Bedroom',
    area: '77 m²',
    img: '/images/plan-1bed.png',
    alt: 'One bedroom floor plan',
    feats: ['Shared Amenities', 'Ocean views', 'Open-plan living'],
    price: 'From $135,000',
  },
  {
    id: '2bed',
    title: 'Two Bedroom',
    area: '88 m²',
    img: '/images/plan-2bed.png',
    alt: 'Two bedroom floor plan',
    feats: ['Shared Amenities', 'Master suite', 'Dual terraces'],
    price: 'From $150,000',
  },
  {
    id: '3bed',
    title: '3 Bedroom Penthouse',
    area: '328 m²',
    img: '/images/plan-3bed.png',
    alt: 'Three bedroom penthouse floor plan',
    feats: ['Private pool', 'Garden', 'Premium finishes'],
    price: 'From $499,000',
  },
]

export function ResidenceUnits() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return undefined

    function onKey(e) {
      if (e.key === 'Escape') setActive(null)
    }

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <>
      <div className="res stg">
        {UNITS.map((unit) => (
          <article className="unit" key={unit.id}>
            <button
              type="button"
              className="unit-plan"
              onClick={() => setActive(unit)}
              aria-label={`Enlarge ${unit.title} floor plan`}
            >
              <img
                src={unit.img}
                alt={unit.alt}
                width="900"
                height="520"
                loading="lazy"
                decoding="async"
              />
              <span className="unit-plan-hint">Click to enlarge</span>
            </button>
            <div className="unit-b">
              <h3>{unit.title}</h3>
              <div className="unit-area">{unit.area}</div>
              <ul className="unit-feats">
                {unit.feats.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <div className="pr">{unit.price}</div>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div className="plan-lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} floor plan`}>
          <button type="button" className="plan-lightbox-scrim" aria-label="Close floor plan" onClick={() => setActive(null)} />
          <div className="plan-lightbox-panel">
            <div className="plan-lightbox-bar">
              <div>
                <strong>{active.title}</strong>
                <span>{active.area}</span>
              </div>
              <button type="button" className="plan-lightbox-close" aria-label="Close" onClick={() => setActive(null)}>
                ×
              </button>
            </div>
            <img src={active.img} alt={active.alt} width="1400" height="900" decoding="async" />
          </div>
        </div>
      )}
    </>
  )
}
