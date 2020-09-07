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
  `,
}
