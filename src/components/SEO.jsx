import { useEffect } from 'react'

const SITE_NAME = 'Sterling Studios'
const SITE_URL = 'https://sterlingstudios.co.ke'

const DEFAULT_TITLE =
  'Sterling Studios | Web Design, Web Apps & Mobile Development Nairobi'

const DEFAULT_DESCRIPTION =
  'Sterling Studios is a Nairobi-based digital studio building professional websites, custom web applications, mobile apps, e-commerce platforms and digital systems for organisations in Kenya and beyond.'

const DEFAULT_IMAGE = '/human_boardroom_main.webp'

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sterling Studios Ltd',
  url: SITE_URL,
  email: 'hello@sterlingstudios.co.ke',
  telephone: '+254722114098',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Kenya',
    },
    {
      '@type': 'Place',
      name: 'International',
    },
  ],
  description:
    'Sterling Studios is a Nairobi-based digital studio specialising in professional websites, web applications, mobile applications and custom digital platforms.',
}

function ensureMeta(attribute, value, content) {
  if (!content) return

  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function ensureCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', url)
}

function ensureStructuredData(schema) {
  const id = 'sterling-structured-data'

  let script = document.getElementById(id)

  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(schema)
}

function makeAbsoluteUrl(value) {
  if (!value) return SITE_URL

  if (
    value.startsWith('http://') ||
    value.startsWith('https://')
  ) {
    return value
  }

  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

function cleanCanonical(value) {
  if (!value) {
    if (typeof window !== 'undefined') {
      return `${SITE_URL}${window.location.pathname}`
    }

    return SITE_URL
  }

  return makeAbsoluteUrl(value)
}

function isBlogArticle(canonical) {
  try {
    const url = new URL(canonical)

    return (
      url.pathname.startsWith('/blog/') &&
      url.pathname !== '/blog/'
    )
  } catch {
    return false
  }
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_IMAGE,
  type,
  noIndex = false,
  publishedTime,
  modifiedTime,
  author = 'Sterling Studios',
  structuredData,
}) {
  useEffect(() => {
    const canonicalUrl = cleanCanonical(canonical)
    const imageUrl = makeAbsoluteUrl(ogImage)

    const pageTitle = title || DEFAULT_TITLE
    const pageDescription = description || DEFAULT_DESCRIPTION

    const contentType =
      type || (isBlogArticle(canonicalUrl) ? 'article' : 'website')

    /*
     * BASIC SEO
     */
    document.title = pageTitle

    ensureMeta('name', 'description', pageDescription)

    ensureMeta(
      'name',
      'robots',
      noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    )

    ensureMeta('name', 'author', author)
    ensureMeta('name', 'theme-color', '#0F1F35')

    /*
     * CANONICAL
     */
    ensureCanonical(canonicalUrl)

    /*
     * OPEN GRAPH
     * Used by Facebook, LinkedIn and other sharing platforms.
     */
    ensureMeta('property', 'og:title', pageTitle)
    ensureMeta('property', 'og:description', pageDescription)
    ensureMeta('property', 'og:type', contentType)
    ensureMeta('property', 'og:url', canonicalUrl)
    ensureMeta('property', 'og:image', imageUrl)
    ensureMeta('property', 'og:image:alt', pageTitle)
    ensureMeta('property', 'og:site_name', SITE_NAME)
    ensureMeta('property', 'og:locale', 'en_KE')

    /*
     * X / TWITTER
     */
    ensureMeta('name', 'twitter:card', 'summary_large_image')
    ensureMeta('name', 'twitter:title', pageTitle)
    ensureMeta('name', 'twitter:description', pageDescription)
    ensureMeta('name', 'twitter:image', imageUrl)
    ensureMeta('name', 'twitter:image:alt', pageTitle)

    /*
     * ARTICLE METADATA
     */
    if (contentType === 'article') {
      ensureMeta('property', 'article:author', author)

      if (publishedTime) {
        ensureMeta(
          'property',
          'article:published_time',
          publishedTime
        )
      }

      if (modifiedTime) {
        ensureMeta(
          'property',
          'article:modified_time',
          modifiedTime
        )
      }
    }

    /*
     * STRUCTURED DATA
     */
    if (structuredData) {
      ensureStructuredData(structuredData)
      return
    }

    if (contentType === 'article') {
      ensureStructuredData({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageTitle,
        description: pageDescription,
        image: imageUrl,
        url: canonicalUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        ...(publishedTime && {
          datePublished: publishedTime,
        }),
        ...(modifiedTime && {
          dateModified: modifiedTime,
        }),
      })
    } else {
      ensureStructuredData({
        '@context': 'https://schema.org',
        '@graph': [
          ORGANIZATION_SCHEMA,
          {
            '@type': 'WebPage',
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            isPartOf: {
              '@type': 'WebSite',
              name: SITE_NAME,
              url: SITE_URL,
            },
          },
        ],
      })
    }
  }, [
    title,
    description,
    canonical,
    ogImage,
    type,
    noIndex,
    publishedTime,
    modifiedTime,
    author,
    structuredData,
  ])

  return null
}