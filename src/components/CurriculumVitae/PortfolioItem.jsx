import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const PortfolioItem = ({ name, status, toolchain, link, image, children }) => (
  <section className="">
    <p>{name}</p>
    <p>{toolchain}</p>
    {image ? <img src={image} /> : null}
    <p>
      <a target="_blank" href={link}>
        {link}
      </a>
    </p>
    {children}
  </section>
)

export default PortfolioItem
