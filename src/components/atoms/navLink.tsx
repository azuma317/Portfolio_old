import React from 'react'
import tw from 'twin.macro'
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
    color: ${selected
      ? 'var(--color-text-accent)'
      : 'var(--color-text-secondary)'};
  `
  return (
    <Link to={to} title={title} css={tw`shadow-none`}>
      <span
        css={[tw`hover:from-bg-accent-hover text-base font-normal`, textColor]}
      >
        {children}
      </span>
    </Link>
  )
}

export default NavLink
