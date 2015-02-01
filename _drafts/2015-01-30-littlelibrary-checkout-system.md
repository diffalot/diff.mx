---
layout: post
title:  "Estimated Cost of Prototype Little Library Checkout System"
date:   2015-02-01 12:00:00
categories: [hardware, embedded systems]
tags: [littlelibrary, arduino, nfc, xbee, mesh network]
---

A friend who works in outreach for a municipal library system asked me if I
knew of any methods for checking out and checking in books from their depository
libraries.  I really didn't know what a depository library was, but once it was
explained that it was an unstaffed library where patrons remove and deposit
books without *officially* checking them out, I remembered reading about
[Little Free Libraries](http://littlefreelibrary.org/), and then spent an
afternoon piecing together the components I'd buy to equip these libraries with
NFC readers to catalogue checkin and checkout.

NFC  is becoming standard on cell phones (it's been on android for a while, and
i believe it's been included on newer iphones), so it makes an ideal system for
developing a cataloguing system for Little Libraries because making books
scanable by both the library catalog device and a patron's cell phone opens uon p
some interesting Little Library patron applications (inter-littlelibrary-loan,
etc.)

The useful range of NFC is somewhere around 60mm and I think most of these
components could fit in an enclosure with interior dimensions of 4 altoid tins
stacked 2 by 2, so I'm not sure how to attach it to a little library or near a
little library so that it's not scanning books that are still in the Little
Library. Metal libraries may not introduce this issue since the books inside
could be shielded if the NFC reader was placed on the exterior in a separate
box.

The most basic setup will require a microcontroller (cpu), an nfc reader, a
clock module (if the cpu doesn't include one), a micro sd card reader, and a
power supply, also sticker rfid tags to go in the books.

* stickers:
    * [$1.50 each](http://www.seeedstudio.com/depot/1356MHz-RFID-book-tag-p-1067.html)

# Most Basic System:

**$60.65-$85.65**

* microcontroller:
  [$39.00](http://www.seeedstudio.com/depot/Seeeduino-Stalker-v3-p-1882.html)
(includes micro sd card reader, real time clock, and charge regulator)
* nfc reader: 
    * [$21.50](http://www.seeedstudio.com/depot/Grove-NFC-p-1804.html)
* power supply:
    * battery: [~$10 to
      ~$25](http://www.seeedstudio.com/depot/Battery-c-1_3/?terms_id=209)
    * solar panel:  [~$5 to
      ~$15](http://www.seeedstudio.com/depot/Solar-Panel-c-1_118/?ref=side)

This most basic system only works by going to each location
to retrieve checkout/checkin data.  An app developed for an NFC enabled cell
phone can read data from the catalog and also program the rfid stickers (use a
barcode scanner or isbn entry to get book info -> program sticker by holding it
to phone).

Aside from going to each location to check inventory (in the case of a large
public library system administering many little libraries), another option is
to use the cell network to track inventory, which adds a monthly cell phone
bill for each location, but only 2G (edge) would be required, so a monthly plan
for [~$12](https://www.sparkfun.com/products/13186).  to avoid monthly fees,
another option is to use local-to-installation area wireless network, or to
setup a low speed mesh network with nodes as far apart as 28 miles (closer
would be better).

# Networked System 

Base of a networked system is the same as the most basic system, it just
needs to have a networking card added:

* cell network card: **$54.50**
    * card: [$48.00](http://www.seeedstudio.com/depot/GPRSbee-rev-4-UFL-p-1777.html?cPath=19_20)
    * antenna: [$6.50](http://www.seeedstudio.com/depot/GSM9001800-antenna-with-interface-cable-p-555.html?cPath=55_59)
* wifi network card: [**$39.90**](http://www.seeedstudio.com/depot/Wifi-Bee-v20-p-1637.html)
* xbee 6-mile mesh network card: **$62.90**
    * card: [$54.95](https://www.sparkfun.com/products/9099)
    * antenna: [$7.95](https://www.sparkfun.com/products/9143)
* xbee 28-mile mesh network card: **$74.90**
    * card: [$66.95](https://www.sparkfun.com/products/11634)
    * antenna: [$7.95](https://www.sparkfun.com/products/9143)

## Networked System Totals:

cell: $115.15 to $140.15

wifi: $110.55 to $135.55

mesh: $123.55 to $160.55

Running a server for the networked clients to connect to for data upload
shouldn't cost more than $5 per month (you could probably run data services for
every little library in the whole country for $20), but note that in the case
of the mesh network, a library would need to run at least one mesh node to
bridge the mesh network to the internet (~$100).

of course, all these components should be stored in a waterproof box, and a
backlit 2 line display and/or a series of led lights to provide some user
prompts and feedback.

I'm going to guess a waterproof case would be $15, a screen would be also be
$15, and leds would be ~$2 each with water resistant casings.

to increase battery life a magnetic switch can be installed on the door to only
turn the lights and interface components on for a few minutes after the door
has been opened, the rest of the time the device should be in a low power mode
where not much is happening.

other things worth recording (especially with network connection):
humidity/temperature, water sensor, etc...
