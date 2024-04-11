import './src/styles/global.css'
import * as React from 'react'
import { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/Layout'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  props,
  element,
}) => {
  return <Layout {...props}>{element}</Layout>
}
