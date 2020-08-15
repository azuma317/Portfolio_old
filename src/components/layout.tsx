import React, { useMemo } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import type { WindowLocation } from '@reach/router'

import { rhythm, scale } from '../utils/typography'
import config from '../config/blog-config'
import Footer from './footer'

type Props = {
  location: WindowLocation
}

const Layout: React.FC<Props> = ({ location, children }) => {
  const prefix: string = __PATH_PREFIX__ || ''
  const rootPath = `${prefix}/`

  const isRoot = useMemo(() => {
    return location.pathname === rootPath
  }, [rootPath])

  const header = useMemo(() => {
    if (isRoot) {
      return (
        <h1 css={styles.blog_title_area}>
          <Link css={styles.blog_title} to={`/`}>
            {config.title}
          </Link>
        </h1>
      )
    } else {
      return (
        <h3 css={styles.blog_title_area}>
          <Link css={styles.blog_title} to={`/`}>
            {config.title}
          </Link>
        </h3>
      )
    }
  }, [isRoot])

  return (
    <div css={styles.root_container}>
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

const styles = {
  root_container: css`
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(24)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  `,
  blog_title_area: css`
    margin-top: 0;

    h1 {
      transform: scale(1.5);
      margin-bottom: ${rhythm(1.5)};
    }

    h3 {
      font-family: Montserrat, sans-serif;
    }
  `,
  blog_title: css`
    box-shadow: none;
    color: inherit;
  `,
}
