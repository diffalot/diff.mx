import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const githubURL =
  'https://github.com/diffalot/diff.mx/blob/master/src/pages/index.jsx'
const githubText = '/src/pages/index.jsx'

export default function MyFiles({ data: { allMdx } }) {
  return (
    <Layout githubURL={githubURL} githubText={githubText}>
      <SEO title="" />
      <div className="p-4 xl:px-44">
        {allMdx.edges
          .sort(
            ({ node: a }, { node: b }) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          )
          .map(({ node }) => {
            return (
              <div key={node.id} className="pb-6">
                <h1 className="font-sans font-black text-2xl pb-3">
                  <a href={node.fields.slug}>{node.frontmatter.title}</a>
                </h1>
                <p className="font-serif">{node.excerpt}</p>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { fields: { source: { eq: "posts" } } }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            source
          }
          frontmatter {
            date
            title
          }
          internal {
            content
            description
            ignoreType
            mediaType
          }
        }
      }
      nodes {
        id
      }
    }
  }
`
