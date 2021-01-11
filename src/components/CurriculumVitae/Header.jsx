import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ name, location, email, website, className }) => {
  return (
    <div
      className={`${className} flex flex-col justify-center leading-tight mb-8`}>
      <h1 className="text-center text-2xl font-bold place-self-center border-b-2 border-black p-2 mb-2 w-9/12">
        {name}
      </h1>
      <div className="place-self-center">{location}</div>
      <div className="place-self-center">
        <a href={`mailto:${email}`} target="_blank">
          {email}
        </a>
      </div>
      <div className="place-self-center">
        <a href="/">{website}</a>
      </div>
    </div>
  )
}

export default Header
