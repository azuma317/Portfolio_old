import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import tw, { theme } from 'twin.macro'
import { css } from '@emotion/react'

type Props = {
  activePage: string
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Portfolio', href: '/portfolio/' },
]

const Header: React.FC<Props> = function({ activePage }) {
  return <Disclosure as="header">
    {({ open }) => (
      <>
        <div tw="mx-auto px-5 max-w-6xl sm:px-0 sm:h-24 md:px-8">
          <div tw="relative flex items-center justify-between h-16 sm:h-24">
            <div tw="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Disclosure.Button tw="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                {open ? (
                  <XIcon tw="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon tw="block w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div tw="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
        <Disclosure.Panel tw="sm:hidden">
          <div tw="pb-3 pt-2 px-2 space-y-1">
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
                  tw`block px-3 py-2 text-base font-medium rounded-md`,
                ]}
                aria-current={item.href === activePage ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
}

export default Header
