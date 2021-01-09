import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './PowButton.css'

import Pow from '../images/pow.inline.svg'

const PowButton = ({ children }) => (
  <div className="relative right-8 -top-10">
    <Pow className="animate-pow-bg absolute h-32 -top-11 -left-11" />
    <div className="animate-pow-fg absolute z-10 left-1 top-1 leading-tight text-center">
      {children}
    </div>
  </div>
)

PowButton.propTypes = {
  siteTitle: PropTypes.string
}

PowButton.defaultProps = {
  siteTitle: ''
}

export default PowButton
