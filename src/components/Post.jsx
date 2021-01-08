import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './Layout'
import SEO from './SEO'

// Provide common components here
import shortcodes from './mdx-shortcodes'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <article className="font-serif prose md:prose-lg p-4 xl:px-44 xl:prose-xl max-w-none">
        <p className="font-sans text-3xl font-black text-black py-4">
          {mdx.frontmatter.title}
        </p>
        <MDXRenderer>{mdx.body}</MDXRenderer>
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
