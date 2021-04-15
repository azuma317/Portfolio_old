import React from 'react'
import tw from 'twin.macro'
import NavLink from './navLink'

type Props = {
  activePage: string
  justify: string
}

const Nav: React.FC<Props> = ({ activePage, justify }) => {
  const tw_justify = justify == 'start' ? tw`justify-start` : tw`justify-end`

  return (
    <nav
      aria-label="Main Navigation"
      css={[
        tw`hidden flex-row items-center justify-center mt-auto h-full text-sm sm:flex`,
        tw_justify,
      ]}
    >
      <NavLink to="/" title="Home" selected={activePage === '/'}>
        Home
      </NavLink>
      <span tw="w-6" />
      <NavLink to="/blog/" title="Blog" selected={activePage === '/blog/'}>
        Blog
      </NavLink>
      <span tw="w-6" />
      <NavLink
        to="/projects/"
        title="Projects"
        selected={activePage === '/projects/'}
      >
        Projects
      </NavLink>
      <span tw="w-6" />
      <NavLink
        to="/portfolio/"
        title="Portfolio"
        selected={activePage === '/portfolio/'}
      >
        Portfolio
      </NavLink>
    </nav>
  )
}

export default Nav
