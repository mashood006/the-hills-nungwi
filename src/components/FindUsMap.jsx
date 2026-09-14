import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const HILLS = {
  lat: -5.7273008134411825,
  lng: 39.30948859612401,
}

const VIEWS = {
  world: { center: [0, 30], zoom: 2 },
  zanzibar: { center: [-6.1, 39.35], zoom: 10 },
  hills: { center: [HILLS.lat, HILLS.lng], zoom: 15 },
}

const goldIcon = L.divIcon({
  className: 'ft-map-pin',
  html: `<span class="ft-map-pin-dot" aria-hidden="true"></span>`,
  iconSize: [28, 36],
  iconAnchor: [14, 34],
  popupAnchor: [0, -30],
})

export function FindUsMap() {
  const frameRef = useRef(null)
  const mapRef = useRef(null)
  const layersRef = useRef({ map: null, satellite: null })
  const [view, setView] = useState('hills')
  const [style, setStyle] = useState('map')

  useEffect(() => {
    if (!frameRef.current || mapRef.current) return undefined

    const mapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
      className: 'ft-map-tiles-dark',
    })

    const satelliteLayer = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 19,
      }
    )

    layersRef.current = { map: mapLayer, satellite: satelliteLayer }

    const map = L.map(frameRef.current, {
      center: VIEWS.hills.center,
      zoom: VIEWS.hills.zoom,
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: false,
    })

    mapLayer.addTo(map)
    L.control.zoom({ position: 'bottomright' }).addTo(map)

    L.marker([HILLS.lat, HILLS.lng], { icon: goldIcon })
      .addTo(map)
      .bindPopup('<strong>The Hills, Nungwi</strong><br/>Majestic Luxury Suites')

    mapRef.current = map

    const ro = new ResizeObserver(() => map.invalidateSize())
    ro.observe(frameRef.current)

    return () => {
      ro.disconnect()
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    const { map: mapLayer, satellite: satelliteLayer } = layersRef.current
    if (!map || !mapLayer || !satelliteLayer) return

    if (style === 'satellite') {
      if (map.hasLayer(mapLayer)) map.removeLayer(mapLayer)
      if (!map.hasLayer(satelliteLayer)) satelliteLayer.addTo(map)
    } else {
      if (map.hasLayer(satelliteLayer)) map.removeLayer(satelliteLayer)
      if (!map.hasLayer(mapLayer)) mapLayer.addTo(map)
    }
  }, [style])

  function flyTo(key) {
    const map = mapRef.current
    const next = VIEWS[key]
    if (!map || !next) return
    setView(key)
    map.flyTo(next.center, next.zoom, { duration: 1.35 })
  }

  return (
    <div className="ft-map">
      <div className="ft-map-head">
        <h5>Find us</h5>
        <div className="ft-map-controls" role="group" aria-label="Map controls">
          <div className="ft-map-zooms" role="group" aria-label="Zoom level">
            {[
              ['world', 'World'],
              ['zanzibar', 'Zanzibar'],
              ['hills', 'The Hills'],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`ft-map-chip${view === key ? ' is-active' : ''}`}
                onClick={() => flyTo(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="ft-map-styles" role="group" aria-label="Map style">
            <button
              type="button"
              className={`ft-map-chip${style === 'map' ? ' is-active' : ''}`}
              onClick={() => setStyle('map')}
            >
              Map
            </button>
            <button
              type="button"
              className={`ft-map-chip${style === 'satellite' ? ' is-active' : ''}`}
              onClick={() => setStyle('satellite')}
            >
              Satellite
            </button>
          </div>
        </div>
      </div>

      <div className={`ft-map-frame${style === 'satellite' ? ' is-satellite' : ''}`}>
        <div className="ft-map-canvas" ref={frameRef} role="region" aria-label="Location map" />
      </div>
    </div>
  )
}
