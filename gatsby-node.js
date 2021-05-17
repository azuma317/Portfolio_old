const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blogPostTemplate.tsx')
  const blogList = path.resolve('./src/templates/blogListTemplate.tsx')
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___createdDate], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                group
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(post => {
    if (post.node.frontmatter.group === 'BlogList') {
      createPage({
        path: post.node.fields.slug,
        component: blogList,
        context: {
          slug: post.node.fields.slug,
        },
      })
    } else {
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    if (
      node.frontmatter.group === 'Blog' ||
      node.frontmatter.group === 'BlogList'
    ) {
      createNodeField({
        name: 'slug',
        node,
        value: `/blog${value}`,
      })
    } else {
      createNodeField({
        name: 'slug',
        node,
        value,
      })
    }
  }
}
