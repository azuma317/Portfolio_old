import React from 'react'
import type { WindowLocation } from '@reach/router'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import { BlogPostBySlugQuery } from '../../types/graphql-types'

type Props = {
  location: WindowLocation
  pageContext: any
  data: BlogPostBySlugQuery
}

const BlogPostTemplate: React.FC<Props> = ({ location, pageContext, data }) => {
  const post = data.markdownRemark
  const title = data.site?.siteMetadata?.title
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post?.frontmatter?.title || title || ''}
        description={post?.frontmatter?.description || post?.excerpt || ''}
      />
      <article>
        <header>
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
        </header>
        <section dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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