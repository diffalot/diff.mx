import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'

import 'prismjs/themes/prism-twilight.css'
import './Layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => {
      console.log({ data })
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="fullWidthContainer md:text-large">{children}</div>
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
