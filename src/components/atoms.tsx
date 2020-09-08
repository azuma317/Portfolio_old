import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

type Props = {
  to: string
  title: string
  selected: boolean
}

export const NavLink: React.FC<Props> = ({
  to,
  children,
  title = 'Link',
  selected = false,
}) => {
  return (
    <Link to={to} title={title}>
      <span css={style.nav_link}>{children}</span>
    </Link>
  )
}

const style = {
  nav_link: css``,
}
