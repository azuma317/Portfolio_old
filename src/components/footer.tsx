import React from 'react'
import tw, { theme } from 'twin.macro'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai'

type Props = {
  activePage: string
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Portfolio', href: '/portfolio/' },
]

const Footer: React.FC<Props> = function({ activePage }) {
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
    <footer tw="relative block m-auto px-5 max-w-6xl overflow-hidden sm:px-12 md:px-20">
      <div tw="block m-auto h-full">
        <div>
          <div tw="mx-auto max-w-6xl">
            <div tw="relative flex items-center justify-between h-16">
              <div tw="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div tw="hidden sm:block sm:ml-6">
                  <div tw="flex space-x-4">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        css={[
                          css`
                            color: ${item.href === activePage
                              ? theme('colors.accent')
                              : theme('colors.secondary')};
                          `,
                          tw`px-3 py-2 text-base font-medium rounded-md`,
                        ]}
                        aria-current={
                          item.href === activePage ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tw="flex flex-col-reverse md:flex-row md:justify-between md:mt-8">
            <span
              tw="self-center mb-8 text-xs tracking-wider md:self-end"
              aria-label="Copyright"
            >
              © 2020 {author.blogAuthor}. All Right Reserved.
            </span>
            <div tw="flex items-center justify-center mb-8 md:justify-end">
              <span tw="ml-4">
                <a
                  href={`https://github.com/${social.github}`}
                  aria-label="Visit Github profile"
                  title="Visit Github profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  tw="text-secondary"
                >
                  <AiFillGithub tw="block align-middle w-8 h-8" />
                </a>
              </span>
              <span tw="ml-4">
                <a
                  href={`https://twitter.com/${social.twitter}`}
                  aria-label="Visit Twitter profile"
                  title="Visit Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  tw="text-secondary"
                >
                  <AiFillTwitterCircle tw="block align-middle w-8 h-8" />
                </a>
              </span>
              <span tw="ml-4">
                <a
                  href={`https://www.instagram.com/${social.github}`}
                  aria-label="Visit Instagram profile"
                  title="Visit Instagram profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  tw="text-secondary"
                >
                  <AiFillInstagram tw="block align-middle w-8 h-8" />
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
