import React from 'react'
import type { WindowLocation } from '@reach/router'
import { graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import GlobalStyle from '../styles/globalStyle'
import { BlogListQuery } from '../../types/graphql-types'
import Post from '../components/post'

type Props = {
  location: WindowLocation
  data: BlogListQuery
}

const BlogPostTemplate: React.FC<Props> = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO />
      <Title title="Blog一覧" />
      <GlobalStyle />
      <Bio location={location} />
      {posts.map(({ node }) => {
        return <Post post={node} />
      })}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogList {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { group: { eq: "Blog" } } }
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
