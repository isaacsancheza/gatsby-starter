import * as React from 'react'
import { HeadProps } from 'gatsby'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return <></>
}

export const Head = ({ location }: HeadProps) => {
  return (
    <Seo
      title="Página no encontrada"
      pathname={location.pathname}
      description="Perdón, no encontramos la página que buscaba."
    />
  )
}
