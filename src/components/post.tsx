import React from 'react'
import { Link } from 'gatsby'
import type { MarkdownRemark } from '../../types/graphql-types'

type Props = {
  post: Pick<MarkdownRemark, 'fields' | 'frontmatter' | 'excerpt'>
}

const Post: React.FC<Props> = ({ post }) => (
  <article key={post.fields?.slug}>
    <h3>
      <Link style={{ boxShadow: 'none' }} to={post.fields?.slug || ''}>
        {post.frontmatter?.title || post.fields?.slug || ''}
      </Link>
    </h3>
    <small>{post.frontmatter?.date}</small>
    <section
      dangerouslySetInnerHTML={{
        __html: post.frontmatter?.description || post.excerpt || '',
      }}
    />
  </article>
)

export default Post
