import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const Section = ({ title, children }) => (
  <section className="flex flex-col lg:flex-row pt-4 pb-0">
    <h1 className="text-2xl lg:w-1/4 font-bold lg:text-xl xl:text-2xl p-2 uppercase">
      {title}
    </h1>
    <div className="lg:w-3/4 p-2">
      <MDXProvider>{children}</MDXProvider>
    </div>
  </section>
)

export default Section
