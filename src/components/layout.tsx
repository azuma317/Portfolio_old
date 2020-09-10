import React, { useMemo } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import type { WindowLocation } from '@reach/router'

import { rhythm, scale } from '../utils/typography'
import config from '../config/blog-config'
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
