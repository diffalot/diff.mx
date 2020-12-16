const { createFilePath } = require(`gatsby-source-filesystem`)
const moment = require('moment')
const _ = require('lodash')
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
