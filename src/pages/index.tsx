import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import Bio from '../components/bio'

type Props = {
  location: Location
}

const Index: React.FC<Props> = ({ location }) => (
  <Layout location={location}>
    <SEO />
    <Title />
    <Bio />
  </Layout>
)

export default Index
