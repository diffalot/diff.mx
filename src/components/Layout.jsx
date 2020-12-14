import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'

import './Layout.css'
import './gatsby.css'
import 'prismjs/themes/prism-twilight.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => {
      console.log({ data })
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="sm:container sm:text-large xl:text-2xl mx-auto p-4">
            {children}
          </div>
        </>
      )
    }}
  />
)
export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
