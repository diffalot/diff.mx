import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import Employment from './Employment'
import Header from './Header'
import Section from './Section'

const Page = ({ children }) => (
  <section className="pb-40" style={{ pageBreakInside: 'avoid' }}>
    <MDXProvider components={{ Employment, Header, Section }}>
      {children}
    </MDXProvider>
  </section>
)

export default Page
