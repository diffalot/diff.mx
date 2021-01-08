import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Pow from '../images/pow.inline.svg'

const AnimatedPow = ({ children }) => (
  <div className="relative right-12 -top-7">
    <Pow className="absolute h-32 -top-11 -left-11" />
    <div className="absolute transform -rotate-12 z-10 leading-tight text-center">
      {children}
    </div>
  </div>
)

AnimatedPow.propTypes = {
  siteTitle: PropTypes.string
}

AnimatedPow.defaultProps = {
  siteTitle: ''
}

export default AnimatedPow
