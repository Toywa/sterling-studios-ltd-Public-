import { useEffect } from 'react'

const SITE_NAME = 'Sterlings Studio'
const SITE_LEGAL_NAME = 'Sterlings Studio Limited'
const SITE_URL = 'https://sterlingsstudio.com'

const DEFAULT_TITLE =
  'Sterlings Studio | Web Design, Web Apps & Mobile Development Nairobi'

const DEFAULT_DESCRIPTION =
  'Sterlings Studio designs and develops professional websites, custom web applications, Android and iOS apps, and connected digital platforms from Nairobi, Kenya.'

const DEFAULT_IMAGE = '/sterling-share-preview.png'

const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

/*
|--------------------------------------------------------------------------
| ORGANISATION SCHEMA
|--------------------------------------------------------------------------
*/

const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,

  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,

  url: SITE_URL,

  email: 'hello@sterlingsstudio.com',
  telephone: '+254722114098',

  description:
    'Sterlings Studio Limited is a Nairobi-based digital studio designing and developing professional websites, web applications, Android and iOS apps, and connected digital platforms.',

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },

  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254722114098',
    email: 'hello@sterlingsstudio.com',
    contactType: 'customer service',
    availableLanguage: ['English'],
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

/*
|--------------------------------------------------------------------------
| META HELPERS
|--------------------------------------------------------------------------
*/

function ensureMeta(attribute, value, content) {
  if (content === undefined || content === null || content === '') return

  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', String(content))
}

function removeMeta(attribute, value) {
  const element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  )

  if (element) {
    element.remove()
  }
}

/*
|--------------------------------------------------------------------------
| CANONICAL
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| STRUCTURED DATA
|--------------------------------------------------------------------------
*/

function ensureStructuredData(schema) {
  const id = 'sterlings-structured-data'

  let script = document.getElementById(id)

  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(schema)
}

/*
|--------------------------------------------------------------------------
| URL HELPERS
|--------------------------------------------------------------------------
*/

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

function normalizeCanonicalUrl(value) {
  const absoluteUrl = value
    ? makeAbsoluteUrl(value)
    : typeof window !== 'undefined'
      ? makeAbsoluteUrl(window.location.pathname)
      : SITE_URL

  try {
    const url = new URL(absoluteUrl)

    /*
    |--------------------------------------------------------------------------
    | CANONICALS SHOULD NOT CONTAIN HASH FRAGMENTS
    |--------------------------------------------------------------------------
    */

    url.hash = ''

    /*
    |--------------------------------------------------------------------------
    | NORMALISE TRAILING SLASH
    |--------------------------------------------------------------------------
    |
    | Homepage:
    | https://sterlingsstudio.com/
    |
    | Internal:
    | https://sterlingsstudio.com/services
    |
    */

    if (url.pathname === '') {
      url.pathname = '/'
    }

    if (
      url.pathname !== '/' &&
      url.pathname.endsWith('/')
    ) {
      url.pathname = url.pathname.replace(/\/+$/, '')
    }

    return url.toString()
  } catch {
    return SITE_URL
  }
}

/*
|--------------------------------------------------------------------------
| CONTENT TYPE
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| AUTHOR SCHEMA
|--------------------------------------------------------------------------
*/

function buildAuthorSchema(author, authorUrl, authorType) {
  if (author && typeof author === 'object') {
    return author
  }

  const authorName =
    typeof author === 'string' && author.trim()
      ? author.trim()
      : SITE_NAME

  if (authorName === SITE_NAME && !authorUrl) {
    return {
      '@id': ORGANIZATION_ID,
    }
  }

  const resolvedType =
    authorType ||
    (authorName === SITE_NAME ? 'Organization' : 'Person')

  return {
    '@type': resolvedType,
    name: authorName,
    ...(authorUrl && {
      url: makeAbsoluteUrl(authorUrl),
    }),
  }
}

/*
|--------------------------------------------------------------------------
| CUSTOM SCHEMA NORMALISATION
|--------------------------------------------------------------------------
|
| structuredData can be:
|
| 1. A single schema object
| 2. An array of schema objects
| 3. A schema containing @graph
|
| Custom schema is ADDED to the standard site schema rather than replacing it.
|
*/

function extractStructuredDataNodes(structuredData) {
  if (!structuredData) {
    return []
  }

  const input = Array.isArray(structuredData)
    ? structuredData
    : [structuredData]

  const nodes = []

  input.forEach((item) => {
    if (!item || typeof item !== 'object') {
      return
    }

    if (Array.isArray(item['@graph'])) {
      item['@graph'].forEach((graphItem) => {
        if (graphItem && typeof graphItem === 'object') {
          nodes.push(graphItem)
        }
      })

      return
    }

    /*
    |--------------------------------------------------------------------------
    | REMOVE TOP-LEVEL @context
    |--------------------------------------------------------------------------
    |
    | The final output receives one shared @context.
    |
    */

    const {
      '@context': ignoredContext,
      ...schemaNode
    } = item

    nodes.push(schemaNode)
  })

  return nodes
}

/*
|--------------------------------------------------------------------------
| MERGE / DEDUPLICATE SCHEMA NODES
|--------------------------------------------------------------------------
*/

function mergeSchemaNodes(baseNodes, customNodes) {
  const map = new Map()

  ;[...baseNodes, ...customNodes].forEach((node, index) => {
    if (!node || typeof node !== 'object') {
      return
    }

    const key =
      node['@id'] ||
      `${node['@type'] || 'Thing'}::${
        node.url ||
        node.name ||
        node.headline ||
        `node-${index}`
      }`

    /*
    |--------------------------------------------------------------------------
    | CUSTOM NODES APPEAR LATER AND CAN OVERRIDE MATCHING BASE NODES
    |--------------------------------------------------------------------------
    */

    map.set(key, node)
  })

  return Array.from(map.values())
}

/*
|--------------------------------------------------------------------------
| MAIN SEO COMPONENT
|--------------------------------------------------------------------------
*/

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
  authorUrl,
  authorType,

  structuredData,

  ogImageWidth,
  ogImageHeight,
  ogImageType,
}) {
  useEffect(() => {
    const canonicalUrl = normalizeCanonicalUrl(canonical)
    const imageUrl = makeAbsoluteUrl(ogImage)

    const pageTitle =
      title && title.trim()
        ? title.trim()
        : DEFAULT_TITLE

    const pageDescription =
      description && description.trim()
        ? description.trim()
        : DEFAULT_DESCRIPTION

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
      typeof author === 'string'
        ? author
        : author?.name || SITE_NAME
    )

    ensureMeta(
      'name',
      'theme-color',
      '#0F1F35'
    )

    /*
    |--------------------------------------------------------------------------
    | CANONICAL
    |--------------------------------------------------------------------------
    */

    ensureCanonical(canonicalUrl)

    /*
    |--------------------------------------------------------------------------
    | OPEN GRAPH
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
    | OPTIONAL OPEN GRAPH IMAGE METADATA
    |--------------------------------------------------------------------------
    */

    if (ogImageWidth) {
      ensureMeta(
        'property',
        'og:image:width',
        ogImageWidth
      )
    } else {
      removeMeta(
        'property',
        'og:image:width'
      )
    }

    if (ogImageHeight) {
      ensureMeta(
        'property',
        'og:image:height',
        ogImageHeight
      )
    } else {
      removeMeta(
        'property',
        'og:image:height'
      )
    }

    if (ogImageType) {
      ensureMeta(
        'property',
        'og:image:type',
        ogImageType
      )
    } else {
      removeMeta(
        'property',
        'og:image:type'
      )
    }

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
    | ARTICLE META TAGS
    |--------------------------------------------------------------------------
    */

    const articleAuthorName =
      typeof author === 'string'
        ? author
        : author?.name || SITE_NAME

    if (contentType === 'article') {
      ensureMeta(
        'property',
        'article:author',
        articleAuthorName
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
    | STANDARD STRUCTURED DATA
    |--------------------------------------------------------------------------
    */

    const webpageId = `${canonicalUrl}#webpage`
    const articleId = `${canonicalUrl}#article`

    const webSiteSchema = {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,

      url: `${SITE_URL}/`,
      name: SITE_NAME,

      inLanguage: 'en-KE',

      publisher: {
        '@id': ORGANIZATION_ID,
      },
    }

    const webPageSchema = {
      '@type': 'WebPage',
      '@id': webpageId,

      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,

      inLanguage: 'en-KE',

      isPartOf: {
        '@id': WEBSITE_ID,
      },

      about: {
        '@id': ORGANIZATION_ID,
      },

      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: imageUrl,
      },

      ...(contentType === 'article' && {
        mainEntity: {
          '@id': articleId,
        },
      }),
    }

    const baseNodes = [
      ORGANIZATION_SCHEMA,
      webSiteSchema,
      webPageSchema,
    ]

    /*
    |--------------------------------------------------------------------------
    | ARTICLE STRUCTURED DATA
    |--------------------------------------------------------------------------
    */

    if (contentType === 'article') {
      const articleSchema = {
        '@type': 'Article',
        '@id': articleId,

        headline: pageTitle,
        description: pageDescription,

        image: imageUrl,

        url: canonicalUrl,

        inLanguage: 'en-KE',

        mainEntityOfPage: {
          '@id': webpageId,
        },

        author: buildAuthorSchema(
          author,
          authorUrl,
          authorType
        ),

        publisher: {
          '@id': ORGANIZATION_ID,
        },

        ...(publishedTime && {
          datePublished: publishedTime,
        }),

        ...(modifiedTime && {
          dateModified: modifiedTime,
        }),
      }

      baseNodes.push(articleSchema)
    }

    /*
    |--------------------------------------------------------------------------
    | CUSTOM STRUCTURED DATA
    |--------------------------------------------------------------------------
    |
    | A page can now add:
    |
    | Service
    | FAQPage
    | BreadcrumbList
    | Article
    | Product
    | SoftwareApplication
    | etc.
    |
    | without losing Organization, WebSite or WebPage schema.
    |
    */

    const customNodes =
      extractStructuredDataNodes(structuredData)

    const graph = mergeSchemaNodes(
      baseNodes,
      customNodes
    )

    ensureStructuredData({
      '@context': 'https://schema.org',
      '@graph': graph,
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
    authorUrl,
    authorType,
    structuredData,
    ogImageWidth,
    ogImageHeight,
    ogImageType,
  ])

  return null
}