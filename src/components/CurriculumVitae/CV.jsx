import React from 'react'
import PropTypes from 'prop-types'

import './reset.css'
import './fonts.css'
import './markdown.css'

const Layout = ({ children }) => {
  console.log({ children })
  return <div className="cv sm:container mx-auto px-5 py-28">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
