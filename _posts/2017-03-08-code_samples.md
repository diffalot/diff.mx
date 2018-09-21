---
layout: post
title:  "Code Samples"
date:   2017-03-08 12:00:00
categories: [development]
tags: [Open Source, diffalot]
---

# API Microservice Framework Selection

During the course of rapidly deploying the initial prototype of Brydge4Schools
and working on a few client projects, I've begun building out my own fleet of
microservices that establish my personal best practices for server side nodejs
apps.

All of the services I'm building are targeted for deployment through [Zeit's
Now Container Service](https://zeit.co/now) which provides cheap underpowered
cross-cloud containers, but they are all capable of being run under any
container orchestration system.

The http framework used is [merry](https://github.com/shipharbor/merry), which
provides middleware, logging, cors, and JSONSchema validation right out of the
box.

I have selected the [township](https://github.com/township?tab=repositories)
family of authentication and account storage modules as the cryptographic and
database system on which to build the routes the authentication system uses.
Township uses levelDB for storage and retreival of authentication, so it is
easy to run in memory for local development or through any number of
[abstract-leveldown
connectors](https://www.npmjs.com/browse/depended/abstract-leveldown) for
storage on anything from s3 to mongo to postgres to redis depending on
specific read/write latency requirements.  I am not a database engineer,
nor do I want to be, so I'm deploying to Compose.io hosted databases where using
the levelDB api to store denormalized data to a variety of databases is the
simplest way for me to rapidly develop applications and look to hire database
engineers to optimize the api later if use picks up enough for that to be a
cost effective measure.

Testing is achieved through full integration testing with the
[tape](https://www.npmjs.com/package/tape) test runner where the api endpoints
are passed input and checked against desired output.

Code is hosted on GitHub and repositories are linked to CircleCI builds to run
tests on each pull request, and master deploys directly via Zeit's now tool with
environment variables for secrets and general configuration.  A `.env` file is
used to populate these variables during development so that services can easily
be pointed to each other at their production url or localhost:port.

# Microservice Deep Dive

## JWT Service (Stable, but missing a few features)

[merry-township-jwt-service](https://github.com/diffalot/merry-township-jwt-service)
is a simple jwt auth server with scopes, and it's [pretty well
tested](https://github.com/diffalot/merry-township-jwt-service/blob/master/index.test.js).

[The
routes](https://github.com/diffalot/merry-township-jwt-service/blob/master/lib/routes.js#L15-L33)
provided by the service include the standard login, logout, register, and
change password (and password reset and account confirmation emails are in
progress).

Because the service allows for true logout (blocking) a JWT token, there is
also a /verify route for the jwt auth server where other services may verify
JWT tokens as users try to access them.

## Profile Service (In development, needs further testing and modularization)

[merry-profile-service](https://github.com/diffalot/merry-profile-service) is a
basic api where a user can get and update their own profile. 

The server checks the JWT authorization header both locally and by hitting the
/verify url of the jwt-service.  These actions are provided as [separate merry
middlewares](https://github.com/diffalot/merry-profile-service/blob/master/lib/auth-middleware.js#L13-L51)
that can be [applied to server routes
individually](https://github.com/diffalot/merry-profile-service/blob/master/lib/auth-middleware.js#L13-L51)
as the security of that route requires.  Naturally, these middlewares are
candidates for extraction to their own module that can be used from any API
service.

# Experimental Choo User Interface (Experimental Framework Evaluation)

I have done production work in the past for component based applications using
the [virtual-dom](https://www.npmjs.com/package/virtual-dom) and
[hyperx](https://www.npmjs.com/package/hyperx) libraries rendered with
[main-loop](https://www.npmjs.com/package/main-loop) and using
[redux](https://www.npmjs.com/package/redux) for state management, but working
with such low level libraries necessitated building out all the basic widgets
that a single page application required like [a standard event
listener](https://www.npmjs.com/package/vdom-event-listener) and [a standard
watched input](https://www.npmjs.com/package/vdom-watched-input), then writing
lots of glue code in redux.

I have explored using redux, redux-saga, and redux-thunk for managing the state
of large applications, but I find that the amount of boilerplate is high for
implementing 'simple' features where batteries included frameworks like Angular
provide better guidance through standard conventions, but I'm still interested
in delivering a smaller JavaScript payload while requiring less boilerplate in
business specific code and requiring just the npm modules that are needed with
no unexecuted code paths.

One of the frameworks that I'm currently evaluating is
[Choo](https://github.com/yoshuawuyts/choo) which provides redux like state
management for syncronous (reducers) and asyncrounous (effects and
subscriptions) events, html style tagged templating, is suitable for universal
server side rendering, and comes in at a minimal size of 5KB.

All of that is great, but I'm not entirely happy with the es2015 features the
framework authors suggest you leave out (no let, but you can use const, no
Promises, etc...) to reduce payload size by leaving out polyfills.

But, my [first run through of a choo
application](https://github.com/diffalot/merry-township-choo) is underway.  I
have just gotten to the point where I can look into building a test harness for
the components and can look into doing server side rendering.  Once I've
achieved server side rendering and understand testing Choo apps, I will be
ready to form my final opinion of Choo's feature set and how it compares to
Angular, React, and Vue.

An area that I'm very interested in exploring once universal rendering is
turned on is how far I can take server side rendering and is is possible to set
the JWT token as a long lived cookie, so that even user specific data can be
pulled during the server render cycle by passing the cookie authorization to
the same service API routes that the JavaScript would be accessing from a web
client.


# Other Services (Planned for the future)

Websocket Messenger: fallback to push notifications if user is not connected to a socket.

Capabilities service: stores index of document permissions by user and by document
