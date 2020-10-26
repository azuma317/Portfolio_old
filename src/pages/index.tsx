import React from 'react'
import type { WindowLocation } from '@reach/router'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import GlobalStyle from '../styles/globalStyle'
import Bio from '../components/bio'

type Props = {
  location: WindowLocation
}

const Index: React.FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Title />
      <GlobalStyle />
      <Bio location={location} />
    </Layout>
  )
}

export default Index
