import React from 'react'
import type { WindowLocation } from '@reach/router'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import Bio from '../components/bio'

type Props = {
  location: WindowLocation
}

const Index: React.FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Title />
      <Bio location={location} />
      これから, TypeScript を頑張っていきたい。
    </Layout>
  )
}

export default Index
