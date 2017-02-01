---
layout: post
title:  "Crossing the React Knowledge Gap"
date:   2016-11-23 12:00:00
categories: [development]
tags: [ react, redux, redux-saga ]
---

I've been an Angular developer for a few years now, and, while I've often
thought about using React, my first experiments with a state based UI with a
dom diffing tree were just coming up with my own design patterns around redux
and virtual-dom.

It's educational to come up with your own design patterns; you always reach a
point where your original assumptions break down, and you wind up needing to
look at other, more successful design patterns, because you're a web developer;
you're not running into too many new problems, most of the problems you're
hitting are problems that _many_ other people are hitting too.

Here are the high points of what I needed to know about React, but didn't fully
understand 'till I had someone who had already had the knowledge I was missing.

1. every feature will have components, reducers, sagas, actions, constants,
   services, etc
1. you'll have root level `sagaCombiner.js`, `reducerCombiner.js` to add the
   redux specific state controllers to your main entrypoint (e.g.
   `src/index.js`)
1. put each feature in a separate folder, this makes it easy to modularize
   components later and then share them among projects as npm modules
1. `actions.js` is a set of functions that return the action objects so the
   container components can dispatch them
1. most of your app is going to be display components that the container
   components assign action and state props to
1. run every async action in sagas along with any sagas that will dispatch
   other events
1. sagas have watch and worker functions

# things i'm not yet sure about
5. export selector functions alongside the reducers
6. should constants and actions be kept alongside the reducer too? constants there make sense, but i bet actions should be in their own file
