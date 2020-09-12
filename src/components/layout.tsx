import React from 'react'
import type { WindowLocation } from '@reach/router'
import { css } from '@emotion/core'
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
        <main css={styles.main}>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout

const styles = {
  main: css`
    display: block;
    margin: auto;
    max-width: 1280px;
    width: 100%;
    overflow: hidden;
    margin-top: 4rem;
    @media (max-width: 640px) {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    @media (min-width: 640px) and (max-width: 768px) {
      max-width: 640px;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    @media (min-width: 768px) {
      max-width: 768px;
      padding-left: 5rem;
      padding-right: 5rem;
    }
    @media (min-width: 1024px) {
      max-width: 1024px;
    }
  `,
}
