import React from 'react'
import 'twin.macro'
import Nav from './atoms/nav'

type Props = {
  activePage: string
}

const Header: React.FC<Props> = ({ activePage }) => (
  <header tw="m-auto px-5 max-w-6xl h-0 overflow-hidden sm:px-12 sm:h-32 md:px-20">
    <Nav activePage={activePage} justify="start" />
  </header>
)

export default Header
