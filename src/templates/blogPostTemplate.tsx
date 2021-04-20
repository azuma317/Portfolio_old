import React from 'react'
import type { WindowLocation } from '@reach/router'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { BlogPostBySlugQuery } from '../../types/graphql-types'
import Title from '../components/title'

type Props = {
  location: WindowLocation
  data: BlogPostBySlugQuery
}

const BlogPostTemplate: React.FC<Props> = ({ location, data }) => {
  const post = data.markdownRemark
  const title = post?.frontmatter?.title || data.site?.siteMetadata?.title || ''

  return (
    <Layout location={location}>
      <SEO
        title={title}
        description={post?.frontmatter?.description || post?.excerpt || ''}
      />
      <Title title={title} />
      <article>
        <h1>{title}</h1>
        <p
          style={{
            display: `block`,
          }}
        >
          {post?.frontmatter?.date}
        </p>
        <section dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
        <hr />
      </article>
      <Bio location={location} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
