import React from 'react'
import type { WindowLocation } from '@reach/router'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GlobalStyle from '../styles/globalStyle'
import { rhythm, scale } from '../utils/typography'
import { BlogListBySlugQuery } from '../../types/graphql-types'

type Props = {
  location: WindowLocation
  data: BlogListBySlugQuery
}

const BlogPostTemplate: React.FC<Props> = ({ location, data }) => {
  const post = data.markdownRemark
  const title = data.site?.siteMetadata?.title

  return (
    <Layout location={location}>
      <SEO
        title={post?.frontmatter?.title || title || ''}
        description={post?.frontmatter?.description || post?.excerpt || ''}
      />
      <GlobalStyle />
      <article>
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {post?.frontmatter?.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {post?.frontmatter?.date}
        </p>
        <section dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      <Bio location={location} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogListBySlug($slug: String!) {
    site {
      siteMetadata {
        title
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
  }
`
