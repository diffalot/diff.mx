import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function MyFiles({ data: { allMdx } }) {
  return (
    <Layout>
      <div className="p-4 prose-xl">
        {allMdx.edges
          .sort(
            ({ node: a }, { node: b }) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          )
          .map(({ node }) => {
            return (
              <div key={node.id} className="pb-6">
                <h1 className="font-sans font-black pb-3">
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
