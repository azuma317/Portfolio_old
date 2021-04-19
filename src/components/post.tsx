import React from 'react'
import { Link } from 'gatsby'
import type { MarkdownRemark } from '../../types/graphql-types'
import { rhythm } from '../utils/typography'

type Props = {
  post: Pick<MarkdownRemark, 'fields' | 'frontmatter' | 'excerpt'>
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <article key={post.fields?.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={post.fields?.slug || ''}>
          {post.frontmatter?.title || post.fields?.slug || ''}
        </Link>
      </h3>
      <small>{post.frontmatter?.date}</small>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter?.description || post.excerpt || '',
          }}
        />
      </section>
    </article>
  )
}

export default Post
