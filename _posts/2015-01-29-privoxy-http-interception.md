---
layout: post
title:  "Remove All Advertisements for OpenWRT wifi clients with Privoxy"
date:   2015-01-29 12:00:00
categories: [administration]
tags: [openwrt, privoxy, adblock, do not track, advertising]
---

[Privoxy](http://www.privoxy.org/) is an ad removing proxy that disallows your
web browser from accessing content located on ad networks for both ad display
and browser tracking.  Normal setup involves changing your web browser's proxy
settings to point to privoxy on port 8118, but it can be installed on routers
like OpenWRT to transparently block all advertising for all clients connecting
to the internet through that router.

> The following setup for OpenWRT only works on HTTP request through port 80,
> HTTPS requests through port 443 will not be intercepted.

## Install Privoxy on Openwrt

```opkg install privoxy
```

## edit `/etc/privoxy/config`

the important setting is allowing Privoxy to intercept traffic

```accept-intercepted-requests 1
```

setting the `lan` ip address of the router as the listening port is optional
(this allows clients to manually set the proxy in the browser while connected
through your router so that even HTTPS requests are intercepted).

```listen-address  $ROUTER_LAN_IP:8118
permit-access $FIRST_THREE_OCTETS_OF_LAN_IP.0/24
```

## setup privoxy to start on boot

```/etc/init.d/privoxy enable
/etc/init.d/privoxy start
```

## edit `/etc/config/firewall`

```config redirect
        option src              lan
        option proto            tcp
        option src_dport        80
        option dest_ip          $ROUTER_LAN_IP
        option dest             lan
        option dest_port        8118
```

> References:
>
> * [a sourceforge
>   ticket](http://sourceforge.net/p/ijbswa/support-requests/1576/)
> * [the openwrt wiki](http://wiki.openwrt.org/doc/howto/proxy.privoxy)
