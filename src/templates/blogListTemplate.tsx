import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import { BlogListQuery } from '../../types/graphql-types'
import Post from '../components/post'

type Props = {
  location: Location
  data: BlogListQuery
}

const BlogListTemplate: React.FC<Props> = function({ location, data }) {
  const posts = data.allMarkdownRemark.edges
  const post = data.markdownRemark
  const title = post?.frontmatter?.title || data.site?.siteMetadata?.title || ''
  const description =
    post?.frontmatter?.description || data.site?.siteMetadata?.description || ''

  return (
    <Layout location={location}>
      <SEO title={title} description={description} />
      <Title title={title} />
      <h1>{title}</h1>
      {posts.map(({ node }) => (
        <Post key={node.fields?.slug} post={node} />
      ))}
    </Layout>
  )
}

export default BlogListTemplate

export const pageQuery = graphql`
  query BlogList($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        createdDate(formatString: "MMMM DD, YYYY")
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___createdDate], order: DESC }
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
            createdDate(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
