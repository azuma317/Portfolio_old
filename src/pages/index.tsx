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
      今はまだなにもない。
      <br />
      最近、モバイルアプリ開発のモチベーションが下がってきたので、
      <br />
      新しいアプリの作成とその過程をブログに載せていきたいと思います。
    </Layout>
  )
}

export default Index
