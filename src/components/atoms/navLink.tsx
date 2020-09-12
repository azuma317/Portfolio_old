import React from 'react'
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
    color: ${selected ? '#2b6cb0' : '#4a5568'};
  `
  return (
    <Link to={to} title={title}>
      <span css={[style.nav_link, textColor]}>{children}</span>
    </Link>
  )
}

export default NavLink

const style = {
  nav_link: css`
    font-weight: 400;
    font-size: 1rem;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 150ms;
    :hover {
      color: #2b6cb0;
    }
  `,
}
