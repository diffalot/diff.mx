import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const Section = ({ title, children }) => (
  <section className="flex flex-col md:flex-row print:flex-row align-top mb-3">
    <h1 className="md:w-1/4 print:w-1/5 font-bold uppercase mr-3 mb-2">
      {title}
    </h1>
    <div className="md:w-3/4 print:w-4/5 pb-2">
      <MDXProvider>{children}</MDXProvider>
    </div>
  </section>
)

export default Section
