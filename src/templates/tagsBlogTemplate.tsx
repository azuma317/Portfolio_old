import React from 'react'
import 'twin.macro'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import Post from '../components/post'
import { BlogByTagQuery } from '../../types/graphql-types'

type Props = {
  location: Location
  data: BlogByTagQuery
}

const TagsBlogTemplate: React.FC<Props> = function({ location, data }) {
  const { edges, totalCount } = data.allMarkdownRemark
  const title = data.site?.siteMetadata?.title || ''
  const description = data.site?.siteMetadata?.description || ''

  return (
    <Layout location={location}>
      <SEO title={title} description={description} />
      <Title title={title} />
      <h1>{title}</h1>
      {edges.map(({ node }) => (
        <Post key={node.fields?.slug} post={node} />
      ))}
    </Layout>
  )
}

export default TagsBlogTemplate

export const pageQuery = graphql`
  query BlogByTag($tag: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            createdDate(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
