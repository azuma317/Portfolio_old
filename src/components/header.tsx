import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import NavLink from './atoms/navLink'

type Props = {
  activePage: string
}

const Header: React.FC<Props> = ({ activePage }) => {
  return (
    <header css={style.header_container}>
      <nav aria-label="Main Navigation" css={style.header_logo}>
        <Link to="/" aria-label="Website logo, go back to homepage."></Link>
        <span css={style.header_link}>
          <NavLink to="/" title="Home" selected={activePage === '/'}>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            title="Projects"
            selected={activePage === 'projects'}
          >
            Projects
          </NavLink>
          <NavLink to="/about" title="About" selected={activePage === 'about'}>
            About
          </NavLink>
        </span>
      </nav>
    </header>
  )
}

export default Header

const style = {
  header_container: css`
    center: true;
    margin: auto;
    max-width: 1280px;
    width: 100%;
    height: 8rem;
    overflow: hidden;
    @media (max-width: 640px) {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    @media (min-width: 640px) and (max-width: 768px) {
      max-width: 640px;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    @media (min-width: 768px) {
      max-width: 768px;
      padding-left: 5rem;
      padding-right: 5rem;
    }
    @media (min-width: 1024px) {
      max-width: 1024px;
    }
  `,
  header_logo: css`
    display: flex;
    align-items: center;
    margin-top: auto;
    font-size: 0.875rem;
    height: 100%;
    justify-content: center;
    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  `,
  header_link: css`
    display: none;
    align-items: center;
    flex-grow: 1;
    @media (min-width: 640px) {
      display: flex;
    }
    a:nth-of-type(n + 2) {
      margin-left: 1.5rem;
    }
  `,
}
