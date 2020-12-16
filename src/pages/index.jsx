import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function MyFiles({ data: { allMdx } }) {
  console.log({ allMdx })
  return (
    <Layout>
      {allMdx.edges
        .sort(
          ({ node: a }, { node: b }) =>
            new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
        .map(({ node }) => {
          console.log(node)
          return (
            <div key={node.id}>
              <h2>
                <a href={node.fields.slug}>{node.frontmatter.title}</a>
              </h2>
              <p>{node.excerpt}</p>
            </div>
          )
        })}
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