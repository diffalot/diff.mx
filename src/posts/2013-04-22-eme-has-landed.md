---
layout: post
title:  "EME Has Landed, Run for Your Life"
date:   2013-04-22 12:00:00
categories: [mtos]
tags: [eme, html5, webrtc]
---

> UPDATE:  i have been confused by multiple uses of CDM { Content Delivery
> Manager | Content Decryption Module } on w3c lists.  please substitute “CDM”
> with "DRM server" in the notes below.

Here are a few quick notes from yesterday's lightning talks at #fcx2013:

What to do with EME?

How do we leverage the needs of producers as we move toward collective authorship and editing systems with emergent properties that negotiate a user’s personal view of a media items.

Do we need new words to talk about this? Probably not, but rather than use the wrong words or words I don’t know (which would be even harder to say), I’m just going to make some words up, and try to explain what they mean.

Emergent Media Systems (Memetics)

algorithmically edited content

Reddit – Everyone’s front page is different, that’s the joke of the site calling itself “the front page of the internet”

(this is just the machinist jargon that describes how we seem to be coding the internet to work for freedom)

What’s happening next

Realtime playhead sync across a single user’s browser sessions and among users.

WebSockets are really cool.

One day we’ll have a globally distributed DHT that works like bittorrent but only in JavaScript over WebSockets data connection

features of this setup:

    central server negotiates “trust” between websocket clients
    browsers send data to each other

DRM is silly

Hixie: “proliferation of plugins” yes, but not exactly–large vendors aren’t making plugins, they’re forking webkit. (meanwhile open web spec writers are adding to FireFox)

So from my perspective, EME doesn’t belong in the spec, but it’s going to make it into the browsers and the content ecosystem anyway, so what do we do about it to encourage freer communication.

EME relies on a CDM.

This is the same setup we agree is great and we use a CDM to “authorize” websocket connections,

So let’s build CDM that protects everything that we protect with creative commons (can anyone track down the actual spec for http://github.com/diffalot/DReaM) and let’s give users playgrounds to see how choosing different licenses affects how their contributions are amplified across the network.

And then let’s throw a DHT in the spec.

> This entry was posted on userspace.io (a barely used and therefore abandoned
> blog) on April 22, 2013. You may view the original on [The WayBack
> Machine](https://web.archive.org/web/20131026130130/http://userspace.io/2013/eme-has-landed-run-for-your-life/)
