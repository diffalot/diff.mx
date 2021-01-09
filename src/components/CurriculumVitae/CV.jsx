import React from 'react'
import PropTypes from 'prop-types'

import './page.css'
import './fonts.css'
import './markdown.css'

import PowButton from '../PowButton'
import Print from '../../images/print.inline.svg'

const CV = ({ children }) => {
  const print = () => {
    window.print()
  }
  return (
    <div className="cv m-auto xl:text-xl px-5 print:px-0 py-16 print:py-0">
      <PowButton>
        <Print onClick={print} className="relative w-12 -top-6 right-3" />
      </PowButton>
      <div className="xl:m-20">{children}</div>
    </div>
  )
}

CV.propTypes = {
  children: PropTypes.node.isRequired
}

export default CV
