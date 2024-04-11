import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export interface SeoProps {
  title: string
  children?: React.ReactNode
  pathname: string
  description: string
}

export default function Seo({
  title,
  children,
  pathname,
  description,
}: SeoProps) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const url = siteUrl + pathname
  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {children}
    </>
  )
}
