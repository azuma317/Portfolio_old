import React from 'react'
import config from '../config/blog-config'
import { css } from '@emotion/core'

type Props = {
  activePage: string
}

const Header: React.FC<Props> = activePage => {
  return <header css={style.header_container}></header>
}

export default Header

const style = {
  header_container: css`
    center: true;
    margin: auto;
    max-width: 1280px;
    height: 8rem;
    overflow: hidden;
    @media (max-width: 640px) {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    @media (min-width: 640px) and (max-width: 768px) {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    @media (min-width: 768px) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  `,
}
