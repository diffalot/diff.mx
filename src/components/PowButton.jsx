import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './PowButton.css'

import Pow from '../images/pow.inline.svg'

const PowButton = ({ children }) => {
  const [style, setZoom, stop] = useSpring(() => ({
    zoom: 1
  }))
  return (
    <animated.div
      onMouseEnter={() => setZoom({ zoom: 1.15 })}
      onMouseLeave={() => setZoom({ zoom: 1 })}
      style={style}
      className="transition-all fixed right-24 md:right-1/4 z-10 print:hidden">
      <Pow className="animate-pow-bg absolute h-52 -top-11 -left-11" />
      <div className="animate-pow-fg absolute z-10 left-2 top-2 leading-tight text-center font-bold text-lg">
        {children}
      </div>
    </animated.div>
  )
}

PowButton.propTypes = {
  siteTitle: PropTypes.string
}

PowButton.defaultProps = {
  siteTitle: ''
}

export default PowButton
