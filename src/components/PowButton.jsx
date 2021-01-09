import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './PowButton.css'

import Pow from '../images/pow.inline.svg'

const PowButton = ({ children }) => (
  <div className="fixed right-24 md:right-1/4">
    <Pow className="animate-pow-bg absolute h-36 -top-11 -left-11" />
    <div className="animate-pow-fg absolute z-10 left-3 top-2 leading-tight text-center font-bold text-lg">
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
