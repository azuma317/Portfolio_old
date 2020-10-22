import React from 'react'
import { graphql } from 'gatsby'
import type { WindowLocation } from '@reach/router'
import type { IndexPageQuery } from '../../types/graphql-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import GlobalStyle from '../styles/globalStyle'
import Bio from '../components/bio'
import Post from '../components/post'

type Props = {
  location: WindowLocation
  data: IndexPageQuery
}

const BlogIndex: React.FC<Props> = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO />
      <Title />
      <GlobalStyle />
      <Bio location={location} />
      {posts.map(({ node }) => {
        return <Post post={node} />
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { group: { eq: "blog" } } }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
