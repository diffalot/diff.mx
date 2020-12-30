import React from 'react'
import PropTypes from 'prop-types'

import './fonts.css'
import './Layout.css'

const Layout = ({ children }) => {
  console.log({ children })
  return <div className="cv sm:container mx-auto">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
