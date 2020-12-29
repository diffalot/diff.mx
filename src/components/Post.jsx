import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './Layout'

// Provide common components here
import shortcodes from './mdx-shortcodes'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <article class="font-serif prose prose-xl p-4">
        <p class="font-sans text-6xl font-black py-4">
          {mdx.frontmatter.title}
        </p>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
