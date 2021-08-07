const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blogPostTemplate.tsx')
  const blogList = path.resolve('./src/templates/blogListTemplate.tsx')
  const tagsBlog = path.resolve('./src/templates/tagsBlogTemplate.tsx')
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
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
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

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagsBlog,
      context: {
        tag: tag.fieldValue,
      },
    })
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
