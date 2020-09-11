import React from 'react'
import type { WindowLocation } from '@reach/router'
import ThemeProvider from '../context/themeContext'
import Header from './header'
import Footer from './footer'

type Props = {
  location: WindowLocation
}

const Layout: React.FC<Props> = ({ location, children }) => {
  return (
    <>
      <ThemeProvider>
        <Header activePage={location.pathname} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout

const styles = {}
