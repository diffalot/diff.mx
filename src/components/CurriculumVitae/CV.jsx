import React from 'react'
import PropTypes from 'prop-types'

import './page.css'
import './fonts.css'
import './markdown.css'

const CV = ({ children }) => {
  return (
    <div className="cv m-auto xl:text-xl px-5 print:px-0 py-16 print:py-0">
      <div className="xl:m-20">{children}</div>
    </div>
  )
}

CV.propTypes = {
  children: PropTypes.node.isRequired
}

export default CV
