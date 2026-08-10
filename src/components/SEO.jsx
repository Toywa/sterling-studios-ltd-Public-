import { useEffect } from 'react'

const SITE_NAME = 'Sterlings Studio'
const SITE_URL = 'https://sterlingsstudio.com'

const DEFAULT_TITLE =
  'Sterlings Studio | Websites that load in 0.5s. Apps that scale.'

const DEFAULT_DESCRIPTION =
  'Sterlings Studio builds fast, secure and scalable websites, web applications, mobile apps and digital platforms from Nairobi, Kenya for Africa and beyond.'

const DEFAULT_IMAGE = '/sterling-share-preview.png'

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Sterlings Studio',
  url: SITE_URL,
  email: 'hello@sterlingstudios.co.ke',
  telephone: '+254722114098',
  description:
    'Sterlings Studio is a Nairobi-based digital studio building fast, secure and scalable websites, web applications, mobile applications and custom digital platforms.',
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
      name: 'Africa',
    },
    {
      '@type': 'Place',
      name: 'International',
    },
  ],
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

function removeMeta(attribute, value) {
  const element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  )

  if (element) {
    element.remove()
  }
}

function ensureCanonical(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  )

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
  if (!value) {
    return SITE_URL
  }

  if (
    value.startsWith('http://') ||
    value.startsWith('https://')
  ) {
    return value
  }

  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

function cleanCanonical(value) {
  if (value) {
    return makeAbsoluteUrl(value)
  }

  if (typeof window !== 'undefined') {
    const pathname =
      window.location.pathname === '/'
        ? ''
        : window.location.pathname

    return `${SITE_URL}${pathname}`
  }

  return SITE_URL
}

function isBlogArticle(canonicalUrl) {
  try {
    const url = new URL(canonicalUrl)

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
  author = SITE_NAME,
  structuredData,
}) {
  useEffect(() => {
    const canonicalUrl = cleanCanonical(canonical)
    const imageUrl = makeAbsoluteUrl(ogImage)

    const pageTitle = title || DEFAULT_TITLE
    const pageDescription =
      description || DEFAULT_DESCRIPTION

    const contentType =
      type ||
      (isBlogArticle(canonicalUrl)
        ? 'article'
        : 'website')

    /*
    |--------------------------------------------------------------------------
    | BASIC SEO
    |--------------------------------------------------------------------------
    */

    document.title = pageTitle

    ensureMeta(
      'name',
      'description',
      pageDescription
    )

    ensureMeta(
      'name',
      'robots',
      noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    )

    ensureMeta(
      'name',
      'author',
      author
    )

    ensureMeta(
      'name',
      'theme-color',
      '#0F1F35'
    )

    /*
    |--------------------------------------------------------------------------
    | CANONICAL URL
    |--------------------------------------------------------------------------
    */

    ensureCanonical(canonicalUrl)

    /*
    |--------------------------------------------------------------------------
    | OPEN GRAPH
    | WhatsApp • Facebook • LinkedIn • Telegram
    |--------------------------------------------------------------------------
    */

    ensureMeta(
      'property',
      'og:title',
      pageTitle
    )

    ensureMeta(
      'property',
      'og:description',
      pageDescription
    )

    ensureMeta(
      'property',
      'og:type',
      contentType
    )

    ensureMeta(
      'property',
      'og:url',
      canonicalUrl
    )

    ensureMeta(
      'property',
      'og:image',
      imageUrl
    )

    ensureMeta(
      'property',
      'og:image:secure_url',
      imageUrl
    )

    ensureMeta(
      'property',
      'og:image:alt',
      pageTitle
    )

    ensureMeta(
      'property',
      'og:site_name',
      SITE_NAME
    )

    ensureMeta(
      'property',
      'og:locale',
      'en_KE'
    )

    /*
    |--------------------------------------------------------------------------
    | X / TWITTER
    |--------------------------------------------------------------------------
    */

    ensureMeta(
      'name',
      'twitter:card',
      'summary_large_image'
    )

    ensureMeta(
      'name',
      'twitter:title',
      pageTitle
    )

    ensureMeta(
      'name',
      'twitter:description',
      pageDescription
    )

    ensureMeta(
      'name',
      'twitter:image',
      imageUrl
    )

    ensureMeta(
      'name',
      'twitter:image:alt',
      pageTitle
    )

    /*
    |--------------------------------------------------------------------------
    | ARTICLE METADATA
    |--------------------------------------------------------------------------
    */

    if (contentType === 'article') {
      ensureMeta(
        'property',
        'article:author',
        author
      )

      if (publishedTime) {
        ensureMeta(
          'property',
          'article:published_time',
          publishedTime
        )
      } else {
        removeMeta(
          'property',
          'article:published_time'
        )
      }

      if (modifiedTime) {
        ensureMeta(
          'property',
          'article:modified_time',
          modifiedTime
        )
      } else {
        removeMeta(
          'property',
          'article:modified_time'
        )
      }
    } else {
      removeMeta(
        'property',
        'article:author'
      )

      removeMeta(
        'property',
        'article:published_time'
      )

      removeMeta(
        'property',
        'article:modified_time'
      )
    }

    /*
    |--------------------------------------------------------------------------
    | CUSTOM STRUCTURED DATA
    |--------------------------------------------------------------------------
    */

    if (structuredData) {
      ensureStructuredData(structuredData)
      return
    }

    /*
    |--------------------------------------------------------------------------
    | ARTICLE SCHEMA
    |--------------------------------------------------------------------------
    */

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

      return
    }

    /*
    |--------------------------------------------------------------------------
    | STANDARD PAGE + ORGANISATION SCHEMA
    |--------------------------------------------------------------------------
    */

    ensureStructuredData({
      '@context': 'https://schema.org',

      '@graph': [
        ORGANIZATION_SCHEMA,

        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          publisher: {
            '@id': `${SITE_URL}/#organization`,
          },
        },

        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: pageTitle,
          description: pageDescription,

          isPartOf: {
            '@id': `${SITE_URL}/#website`,
          },

          about: {
            '@id': `${SITE_URL}/#organization`,
          },

          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: imageUrl,
          },
        },
      ],
    })
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