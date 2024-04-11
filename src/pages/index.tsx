import * as React from 'react'
import { graphql, HeadProps } from 'gatsby'
import Seo from '../components/Seo'

export const Head = ({
  data: { site },
  location,
}: HeadProps<Queries.IndexPageQuery>) => {
  return (
    <Seo
      title={site.siteMetadata.title}
      pathname={location.pathname}
      description={site.siteMetadata.description}
    />
  )
}

export default function IndexPage() {
  return <></>
}

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
