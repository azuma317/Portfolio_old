import React from 'react'
import tw, { theme } from 'twin.macro'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

type Props = {
  to: string
  title?: string
  selected?: boolean
}

const NavLink: React.FC<Props> = ({
  to,
  children,
  title = 'Link',
  selected = false,
}) => {
  const textColor = css`
    color: ${selected ? theme('colors.accent') : theme('colors.secondary')};
  `
  return (
    <Link to={to} title={title} css={[textColor, tw`text-base`]}>
      {children}
    </Link>
  )
}

export default NavLink
