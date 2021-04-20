import React from 'react'
import 'twin.macro'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai'
import Nav from './atoms/nav'

type Props = {
  activePage: string
}

const Footer: React.FC<Props> = ({ activePage }) => {
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
    <footer tw="container relative block m-auto px-5 overflow-hidden sm:px-12 md:px-20">
      <div tw="block m-auto h-full">
        <div>
          <div tw="mb-2 mt-4">
            <Nav activePage={activePage} justify="end" />
          </div>
          <div tw="flex flex-col-reverse md:flex-row md:justify-between md:mt-8">
            <span
              tw="self-center text-xs tracking-wider md:self-end"
              aria-label="Copyright"
            >
              © 2020 {author.blogAuthor}. All Right Reserved.
            </span>
            <div tw="flex-flow flex items-center justify-center md:justify-end">
              <span tw="ml-4">
                <a
                  href={'https://github.com/' + social.github}
                  tw="text-secondary block align-middle w-8 h-8"
                  aria-label="Visit Github profile"
                  title="Visit Github profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </span>
              <span tw="ml-4">
                <a
                  href={'https://twitter.com/' + social.twitter}
                  tw="text-secondary block align-middle w-8 h-8"
                  aria-label="Visit Twitter profile"
                  title="Visit Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
              </span>
              <span tw="ml-4">
                <a
                  href={'https://www.instagram.com/' + social.github}
                  tw="text-secondary block align-middle w-8 h-8"
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
