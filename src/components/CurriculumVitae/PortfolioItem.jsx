import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const PortfolioItem = ({
  name,
  homepage,
  status,
  toolchain,
  link,
  image,
  children
}) => {
  const nameOrLink = () => {
    if (homepage) {
      return (
        <a target="_blank" href={homepage}>
          {name}
        </a>
      )
    } else {
      return <span>{name}</span>
    }
  }

  return (
    <section className="pb-6">
      <header className="italic">
        {image ? <img src={image} /> : null}
        <div className="flex justify-between">
          <div>{nameOrLink()}</div>
          <div>
            <a target="_blank" href={link}>
              {link}
            </a>
          </div>
        </div>
        <div className="pb-2">{toolchain}</div>
      </header>
      {children}
    </section>
  )
}

export default PortfolioItem
