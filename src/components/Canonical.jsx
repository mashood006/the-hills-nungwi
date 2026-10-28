import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_ORIGIN = 'https://www.majestic.tz'

function canonicalHref(pathname) {
  if (!pathname || pathname === '/') return `${SITE_ORIGIN}/`
  return `${SITE_ORIGIN}${pathname.replace(/\/+$/, '')}`
}

/** Keeps <link rel="canonical"> in sync with the current route. */
export function Canonical() {
  const { pathname } = useLocation()

  useEffect(() => {
    const href = canonicalHref(pathname)
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)
  }, [pathname])

  return null
}
