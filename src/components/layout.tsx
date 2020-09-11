import React from 'react'
import type { WindowLocation } from '@reach/router'
import Header from './header'
import Footer from './footer'

type Props = {
  location: WindowLocation
}

const Layout: React.FC<Props> = ({ location, children }) => {
  return (
    <>
      <Header activePage={location.pathname} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

const styles = {}
