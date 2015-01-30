---
layout: post
title:  "Estimated Cost of Prototype Tiny Library Checkout System"
date:   2015-01-30 12:00:00
categories: [hardware, embedded systems]
tags: [littlelibrary, arduino, nfc, xbee, mesh network]]
---

A friend who works in outreach for a municipal library system asked me if I knew of any ways to checking out and checking in books from their depository libraries.  I really didn't know what a depository library was, but once it was explained that it was an unstaffed library where patrons remove and deposit books without *officially* checking them out, I remembered reading about [Little Free Libraries](http://littlefreelibrary.org/), and then spent an afternoon piecing together the components I'd buy to equip these libraries with NFC readers to catalogue checkin and checkout.



n.b. i love compulsively shopping for electronics components.

it turns out nfc is a subset of rfid, and i'd say nfc is preferable to
the other varieties of rfid because nfc is becoming standard on cell
phones (it's been on android for a while, and i believe it's been
included on newer iphones).

the useful range of nfc is somewhere around ~60mm and i think most of
these components could fit in an enclosure with interior dimensions of 4
altoids tins stacked 2 by 2, so i'm not sure how to attach it to a little
library or near a little library so that it's not scanning books that
are still in the little library.  (if y'alls deposit libraries are
metal, that might not be a problem if the antenna is housed on the
exterior in a separate box.  if you think all of the following is worth
pursuing, send me some pictures of what you're working with.

your basic setup will require a microcontroller (cpu), an nfc reader, a
clock module (if the cpu doesn't include one), a micro sd card reader,
and a power supply.  you'll also want stickers/tags to go in the books.

stickers:
    $1.50 each:
http://www.seeedstudio.com/depot/1356MHz-RFID-book-tag-p-1067.html

most basic system:
$60.65-$85.65

    microcontroller: (includes micro sd card reader, real time clock,
and charge regulator)
        $39.00:
http://www.seeedstudio.com/depot/Seeeduino-Stalker-v3-p-1882.html
    nfc reader: (same as above)
        $21.50: http://www.seeedstudio.com/depot/Grove-NFC-p-1804.html
    power supply:
        battery:
            ~$10 to ~$25:
http://www.seeedstudio.com/depot/Battery-c-1_3/?terms_id=209
        solar panel: (same as above)
            ~$5 to ~$15:
http://www.seeedstudio.com/depot/Solar-Panel-c-1_118/?ref=side


if you're planning on going to each location to retrieve
checkout/checkin data, you'll be able to do this through an app
developed for your nfc enabled cell phone, you'll also be able to
program the nfc stickers from your cell phone (use a barcode scanner or
isbn entry to get book info -> program sticker by holding it to phone),
or you can buy usb nfc reader/writers for $50 to $70 (you'll need a
desktop program for that).

aside from going to each location to check inventory, another option is
to use the cell network to track inventory, which adds a monthly cell
phone bill for each location, but only 2G (edge) would be required, so
you can get a monthly plan for ~$12
(https://www.sparkfun.com/products/13186).  to avoid monthly fees, you
can use local-to-installation area wireless network, or you can setup a
low speed mesh network with nodes as far apart as 28 miles (closer would
be better).

base of a networked system is the same as the most basic system, it just
needs to have a networking card added:

* cell network card:
    * $54.50
    * card: $48.00: http://www.seeedstudio.com/depot/GPRSbee-rev-4-UFL-p-1777.html?cPath=19_20
    * antenna: $6.50: http://www.seeedstudio.com/depot/GSM9001800-antenna-with-interface-cable-p-555.html?cPath=55_59
* wifi network card: $39.90: http://www.seeedstudio.com/depot/Wifi-Bee-v20-p-1637.html
* xbee 6-mile mesh network card:
    $62.90
    card:
        $54.95: https://www.sparkfun.com/products/9099
    antenna:
        $7.95: https://www.sparkfun.com/products/9143
xbee 28-mile mesh network card (need to research if this draws too much
power for the microcontroller)
    $74.90
    card:
        $66.95: https://www.sparkfun.com/products/11634
    antenna: (needs adaptor)
        $7.95: https://www.sparkfun.com/products/9143

NETWORKED TOTALS:

cell: $115.15 to $140.15
wifi: $110.55 to $135.55
mesh: $123.55 to $160.55

running a server for the networked clients to connect to for data upload
shouldn't cost more than $5 per month (you could probably run data
services for every little library in the whole country for $20), but
note that in the case of the mesh network, a library would need to run
at least one mesh node to bridge the mesh network to the internet (~$100).

of course, you'll also want a box to keep all the components in, and a
backlit 2 line display and/or a series of led lights to provide some
user prompts and feedback.

i'm going to guess a waterproof case would be $15, a screen would be
also be $15, and leds would be ~$2 each with water resistant casings.

to increase battery life you'd want some kind of magnetic sensor on the
door to only turn the lights and interface components on for a few
minutes after the door has been opened, the rest of the time the device
should be in a low power mode where not much is happening.

other things worth recording (especially with network connection):
humidity/temperature, water sensor, ???

i think many library systems could use such a system as well as people
who run the littlelibrary.org libraries.  it would make a fun indigogo
or kickstarter, and the addition of nfc tags to books would open up some
interesting "stretch goals" for littlelibrary patron applications
(inter-littlelibrary-loan, etc.)

putting together this list of components has been fun; is it ok if i
turn it into a blog post?

--Andrew)
