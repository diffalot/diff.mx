const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require('moment')
const _ = require('lodash')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName
    createNodeField({
      // Name of the field you are adding
      name: 'source',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: source
    })
    const fileName = createFilePath({ node, getNode })
    let slug = fileName
    if (source === 'posts' && node.frontmatter && node.frontmatter.date) {
      const date = moment(node.frontmatter.date).format('/YYYY/MM')
      const title = `/${_.kebabCase(node.frontmatter.title)}/`
      slug = `${date}${title || fileName}`
    }
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/Post.jsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id }
    })
  })
}
