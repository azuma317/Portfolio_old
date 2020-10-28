import React from 'react'
import type { WindowLocation } from '@reach/router'
import { graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title'
import GlobalStyle from '../styles/globalStyle'
import { rhythm, scale } from '../utils/typography'
import { BlogListQuery } from '../../types/graphql-types'
import Post from '../components/post'

type Props = {
  location: WindowLocation
  data: BlogListQuery
}

const BlogPostTemplate: React.FC<Props> = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
  const post = data.markdownRemark
  const title = post?.frontmatter?.title || data.site?.siteMetadata?.title || ''
  const description =
    post?.frontmatter?.description || data.site?.siteMetadata?.description || ''

  return (
    <Layout location={location}>
      <SEO title={title} description={description} />
      <Title title={title} />
      <GlobalStyle />
      <article>
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {title}
        </h1>
        <section dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
      </article>
      {posts.map(({ node }) => {
        return <Post post={node} />
      })}
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio location={location} />
    </Layout>
  )
}

export default BlogPostTemplate

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
        date(formatString: "MMMM DD, YYYY")
        description
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