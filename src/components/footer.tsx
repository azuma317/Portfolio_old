import React from 'react'
import { css } from '@emotion/core'
import config from '../config/blog-config'
import NavLink from './atoms/navLink'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer css={style.footer}>
      <div css={style.footer_container}>
        <div>
          <nav css={style.footer_nav}>
            <NavLink to="/" title="Home">
              Home
            </NavLink>
            <NavLink to="/projects" title="Projects">
              Projects
            </NavLink>
            <NavLink to="/about" title="About">
              About
            </NavLink>
          </nav>
          <div css={style.footer_info}>
            <span css={style.footer_copyright} aria-label="Copyright">
              © 2020 {config.blogAuthor}. All Right Reserved.
            </span>
            <div css={style.footer_sns}>
              <span>
                <a
                  href="https://github.com/azuma317"
                  css={style.footer_icon}
                  aria-label="Visit Github profile"
                  title="Visit Github profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/azumax_develop"
                  css={style.footer_icon}
                  aria-label="Visit Twitter profile"
                  title="Visit Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/azuma317"
                  css={style.footer_icon}
                  aria-label="Visit Instagram profile"
                  title="Visit Instagram profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const style = {
  footer: css`
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 14rem;
    color: var(--color-text-secondary);
    background-color: var(--color-bg-secondary);
  `,
  footer_container: css`
    display: block;
    padding-top: 6rem;
    padding-bottom: 3rem;
    margin: auto;
    height: 100%;
    width: 100%;
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
  footer_nav: css`
    display: none;
    font-size: 0.875rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
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
      justify-content: flex-end;
    }
    @media (min-width: 1024px) {
      display: flex;
    }
  `,
  footer_info: css`
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 768px) {
      justify-content: space-between;
      flex-direction: row;
      margin-top: 2rem;
    }
  `,
  footer_copyright: css`
    letter-spacing: 0.05em;
    font-size: 0.75rem;
    align-self: center;
    @media (min-width: 768px) {
      align-self: flex-end;
    }
  `,
  footer_sns: css`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
    span {
      margin-left: 1rem;
    }
  `,
  footer_icon: css`
    svg {
      display: block;
      vertical-align: middle;
      width: 2rem;
      height: 2rem;
      color: var(--color-text-secondary);
      transition-duration: 1s;
      transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform;
    }
  `,
}
