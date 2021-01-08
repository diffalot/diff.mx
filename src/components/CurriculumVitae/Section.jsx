import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const Section = ({ title, children }) => (
  <section className="flex flex-col print:flex-row align-top mb-3">
    <h1 className="print:w-1/4 font-bold uppercase mr-3 mb-2">{title}</h1>
    <div className="print:w-3/4 pb-2">
      <MDXProvider>{children}</MDXProvider>
    </div>
  </section>
)

export default Section
