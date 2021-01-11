import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './Layout'
import SEO from './SEO'

import './prism-synthwave84.css'
import './markdown.css'

// Provide common components here
import shortcodes from './mdx-shortcodes'

// prettier-ignore
const githubDirectory = 'https://github.com/diffalot/diff.mx/blob/master/src/posts/'

export default function PageTemplate({ data: { mdx } }) {
  console.log({ mdx })
  return (
    <Layout
      githubURL={`${githubDirectory}${mdx.parent.relativePath}`}
      githubText={`/src/posts/${mdx.parent.relativePath}`}>
      <SEO title={mdx.frontmatter.title} />
      <article className="font-serif prose prose-xl print:prose-sm px-4 py-12 xl:px-44 max-w-none sm:text-justify">
        <p className="font-sans text-3xl font-black py-4">
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
      parent {
        ... on File {
          id
          relativePath
        }
      }
    }
  }
`
