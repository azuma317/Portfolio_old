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
    color: ${selected
      ? 'var(--color-text-accent)'
      : 'var(--color-text-secondary)'};
  `
  return (
    <Link to={to} title={title}>
      <span css={[styles.nav_span, textColor]}>{children}</span>
    </Link>
  )
}

export default NavLink

const styles = {
  nav_span: css`
    font-weight: 400;
    font-size: 1rem;
    transition-duration: 1s;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    :hover {
      color: var(--color-text-accent);
    }
  `,
}
