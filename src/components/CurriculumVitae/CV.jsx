import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import './page.css'
import './fonts.css'
import './markdown.css'

import PowButton from '../PowButton'
import Print from '../../images/print.inline.svg'
import Footer from '../Footer'

const CV = ({ children }) => {
  const print = () => {
    window.print()
  }
  return (
    <div className="cv m-auto xl:text-xl px-5 print:px-0 py-16 print:py-0">
      <PowButton>
        <Print
          onClick={print}
          style={{ width: '4.5rem', top: '.25rem', right: '-1rem' }}
          className="relative"
        />
      </PowButton>
      <div className="xl:m-20">{children}</div>
      <Footer />
    </div>
  )
}

CV.propTypes = {
  children: PropTypes.node.isRequired
}

export default CV
