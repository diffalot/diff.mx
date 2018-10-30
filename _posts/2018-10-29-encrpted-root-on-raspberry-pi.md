---
layout: post
title:  "Encrypted Root Partition on Raspberry Pi 3+"
date:   2018-10-29 12:00:00
categories: [embeddded systems]
tags: [embedded systems, raspberry pi]
---

# Background

For a long time I have wanted to setup a Raspberry pi to use as a development
machine with a eInk display for editing code outside at the beach while waiting
for the waves to shift with the tide so I can maximize my surf time (it's not
cheap for me to get all the way down to the beach) with some productivity while
I'm breaking.  Also I just want to be able to sit in the sun on my patio and
relax with some coding.  Maybe later I will be able to hook this whole system
up with some solar panels and a satellite connection and take a leisurely trek
across Iceland with breaks for productivity in beautiful places (I think I can
handle an extra 2 kg of weight, particularly with more time spent resting at
camp).

Originally, I tried setting up a Kindle as the display, but rooting those
things is increasingly difficult, particularly with my lack of experience and
fear of soldering onto the serial debug ports of the device.  That setup was
not a bit of a hack: a complicated network setup with wireless connection on a
rooted Kindle's VNC client to a bridged access point on the Pi that is also a
wireless client to my cell phone with TigerVnc running on the Pi. Wow, that was
not a fun setup.

But as of this date, there are two decent options for getting an eInk display
that connects over HDMI so it leverages everything the Pi is good at, and
doesn't require running access point and vnc daemons.  Of course, I have not
bought either of [these][eInk android] [displays][eInk hdmi] (I have a simple
usb powered, hdmi input touch screen that I will start out with while I wait
for the hdmi in eInk displays to come down in price).

Another huge consideration for using a Raspberry Pi as a "daily driver" is that
the security of having unencrypted root and boot partitions on an easily
removed sd card is "less than acceptable" since anyone with physical access to
the Pi can modify your os and filesystem, essentially, anyone with physical
access to the device can root it quickly and install whatever kernel they want
with whatever remote access toolkit they can devise.  Or if the sd card is
stolen, an attacker will have access to all files on it.

I don't believe the Raspberry Pi is capable of having an encrypted boot
partition or signed kernel at this point, which does not mitigate against evil
maid attacks with kernel modifications, but it is possible to encrypt the root
filesystem so that the system is encrypted at rest and if the sd card is lost
or stolen, your data *should* be safe.

Another exciting feature of the Raspberry Pi 3's is that they allow [booting
from
usb](https://www.raspberrypi.org/documentation/hardware/raspberrypi/bootmodes/msd.md),
so one simple way of mitigating the chances of an evil maid attack is to keep a
usb drive on a keychain, so any attacker will need to get ahold of the usb
drive to perform an evil maid attack.

***Please note that the following instructions of encrypting a usb storage
device will not protect from evil maid attacks. If the usb device leaves the
posession of the owner, it should be considered tainted, and should never be
used to boot again (though encrypted data in the root partition may still be
considered secure).***


[eInk android]: https://teleread.org/2018/03/25/review-onyx-boox-max-2-13-3-e-ink-android-tablet/
[eInk hdmi]: https://www.indiegogo.com/projects/paperlike-3-a-smart-e-ink-monitor-save-your-eyes#/


# Instructions

*Compiled from the [arch linux arm install instructions] and the [arch linux
arm cryptsetup instructions], but using the newer AArch64 distribution.*

## Figure out the device name using `lsblk`

Use `lsblk` to find the usb drive, and make sure you find the right device; for
the following instructions we are using `/dev/sdX`, and I hope that is not an
actual device on your system if you foolishly decide to copy/paste these
instructions.

## Format `/dev/sdX` with fdisk

```
fdisk /dev/sdX
```

At the fdisk prompt, delete old partitions and create a new one:

1. Type `o`. This will clear out any partitions on the drive.
1. Type `p` to list partitions. There should be no partitions left.
1. Type `n`, then `p` for primary, `1` for the first partition on the drive, press `ENTER` to accept the default first sector, then type `+512M` for the last sector.
1. Type `t`, then `c` to set the first partition to type W95 FAT32 (LBA).
1. Type `n`, then `p` for primary, `2` for the second partition on the drive, and then press `ENTER` twice to accept the default first and last sector.
1. Write the partition table and exit by typing `w.


## Create the FAT filesystem for the boot volume:

```
mkfs.vfat /dev/sdX1
```


## Create the encrypted ext4 filesystem for the root volume

```
cryptsetup luksFormat /dev/sdX2

WARNING!
========
This will overwrite data on /dev/sdX2 irrevocably.

Are you sure? (Type uppercase yes): YES
Enter passphrase: 
Verify passphrase: 
```

## Open a decrypted block device

```
cryptsetup open /dev/sdX2 pi-root
```

## Create an ext4 filesystem on the encrypted block device

```
mkfs.ext4 /dev/mapper/pi-root
```

## Mount the root (`/`) and `/boot` filesystems in `/mnt`

```
mount /dev/mapper/pi-root /mnt
mkdir -p /mnt/boot
mount /dev/sdX1 /mnt/boot
```

## Download and extract the distribution image over `/mnt`

```
wget http://os.archlinuxarm.org/os/ArchLinuxARM-rpi-2-latest.tar.gz
bsdtar -xpf ArchLinuxARM-rpi-2-latest.tar.gz -C /mnt
sync
```

_Despite `bsdtar` complaining about `Failed to set file flags` in `./boot/*`,
the operation was successful._

## Chroot into `/mnt` with `qemu`

***This is a badass way to manage a Pi system; you can just insert the usb into
a host system and boot into it as if you're physically using a Pi***

```
cd /mnt
systemd-nspawn --bind /usr/bin/qemu-arm-static -b -D /mnt

# exit when finished with 'poweroff'
```

***Note: the following steps should be done in the qemu chroot!***

### Administer system

#### Update `/etc/resolv.conf`

```
rm /etc/resolv.conf
echo "nameserver 8.8.8.8" > /etc/resolv.conf ## Not sure about this one, it worked for me
```

#### Update arch

```
pacman-key --init
pacman-key --populate archlinuxarm
pacman -Suy
```

#### Add encrypted root dependencies

```
pacman -S lvm2 cryptsetup
```



#### Setup kernel for mkinitcpio to use encrypted lvm2

##### Add `lvm2` and `encrypt` to `HOOKS` in `/etc/mkinitcpio.conf`

```
HOOKS="base udev autodetect modconf block lvm2 encrypt filesystems keyboard fsck"
```

##### Generate a new kernel

```
pacman -S linux
```

#### setup Pi `/boot/cmdline.txt` to use the encrypted device

Add: `root=/dev/mapper/usb-drive cryptdevice=/dev/sda2:usb-drive rootfstype=ext4` to the command

### Poweroff the chroot and unmount the SD card

```
poweroff
umount /mnt/boot
umount /mnt
sync
```






[arch linux arm install instructions]: https://archlinuxarm.org/platforms/armv8/broadcom/raspberry-pi-3
[arch linux arm cryptsetup instructions]: https://wiki.polaire.nl/doku.php?id=archlinux-raspberry-encrypted#raspberry_pi_3_-_arch_linux_encrypted_root_fs
