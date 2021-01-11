import React from 'react'
import PropTypes from 'prop-types'

const powerfulGenderNeutralGreetings = [
  'Ahoy, mateys!',
  'Good morning, Krusty crew:',
  'Greetings, earthlings:',
  'Listen up, fives. A ten is speaking:',
  'Get in, loser, we’re going shopping:',
  'What’s up, rat bastards?',
  "What's new you cowards?",
  'Hey, glitterkittens!',
  'Dearest Smotchkiss:'
]

const randomGreeting = () => {
  /* prettier-ignore */
  const greeting =
  powerfulGenderNeutralGreetings[
    Math.floor(
      Math.random() * (powerfulGenderNeutralGreetings.length)
    )
  ]

  return greeting
}

const displayDate = () =>
  new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
  }).format(new Date())

const Salutation = ({}) => (
  <>
    <p className="pb-3">{displayDate()}</p>
    <p>{randomGreeting()}</p>
  </>
)

export default Salutation
