import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import NavLink from './atoms/navLink'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            blogAuthor
          }
          social {
            twitter
            github
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <footer css={styles.footer}>
      <div css={styles.footer_container}>
        <div>
          <nav css={styles.footer_nav}>
            <NavLink to="/" title="Home">
              Home
            </NavLink>
            <NavLink to="/projects" title="Projects">
              Projects
            </NavLink>
            <NavLink to="/portfolio" title="Portfolio">
              Portfolio
            </NavLink>
          </nav>
          <div css={styles.footer_info}>
            <span css={styles.footer_copyright} aria-label="Copyright">
              © 2020 {author.blogAuthor}. All Right Reserved.
            </span>
            <div css={styles.footer_sns}>
              <span>
                <a
                  href={'https://github.com/' + social.github}
                  css={styles.footer_icon}
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
                  href={'https://twitter.com/' + social.twitter}
                  css={styles.footer_icon}
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
                  href={'https://www.instagram.com/' + social.github}
                  css={styles.footer_icon}
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

const styles = {
  footer: css`
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 12rem;
  `,
  footer_container: css`
    display: block;
    padding-top: 3rem;
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
    a:nth-of-type(n + 2) {
      margin-left: 1rem;
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
    }
  `,
}
