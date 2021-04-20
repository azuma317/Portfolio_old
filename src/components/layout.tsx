import React from 'react'
import 'twin.macro'
import type { WindowLocation } from '@reach/router'
import ThemeProvider from '../context/themeContext'
import Header from './header'
import Footer from './footer'

type Props = {
  location: WindowLocation
}

const Layout: React.FC<Props> = ({ location, children }) => {
  return (
    <ThemeProvider>
      <Header activePage={location.pathname} />
      <main tw="container block m-auto mt-4 px-5 overflow-hidden sm:mt-0 sm:px-12 md:mt-0 md:px-20 xl:mt-0">
        {children}
      </main>
      <Footer activePage={location.pathname} />
    </ThemeProvider>
  )
}

export default Layout
