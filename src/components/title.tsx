import React from 'react'
import { Helmet } from 'react-helmet'
import useTitle from '../hooks/useTitle'

type Props = {
  title?: string
  tag?: string
}

const Title: React.FC<Props> = ({ title, tag }) => {
  const blogTitle = useTitle()

  const titleText = `${tag || title || ''}${blogTitle}`

  return <Helmet htmlAttributes={{ lang: 'ja' }} title={titleText} />
}

export default Title
