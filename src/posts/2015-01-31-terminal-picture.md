---
layout: post
title:  "Echoing an Image to the Terminal Using xTerm's 256 Colors"
date:   2015-01-31 12:00:00
categories: [console]
tags: [xterm, console, imagemagick, node, shell script]
---
![terminal picture](/images/terminal-picture.png)

Here's a quick shell function to convert an image for display in the terminal.  It requires imagemagick, and [node `img-cat`](https://www.npmjs.com/package/img-cat).

```# terminal-picture takes an image file as an argument and displays it at
# terminal width with xterm-256-colors
function terminal-picture {
	WIDTH_HEIGHT=`identify $1 | awk '{ print $3 }' | sed -e 's/x/ /g'`
	PIC_WIDTH=`echo $WIDTH_HEIGHT | awk '{ print $1 }'`
	PIC_HEIGHT=`echo $WIDTH_HEIGHT | awk '{ print $2 }'`
	PIC_RATIO=`expr $PIC_WIDTH / $PIC_HEIGHT`
	TERM_RATIO=`expr $COLUMNS / $LINES`
	if [ "$TERM_RATIO" -gt "$PIC_RATIO" ];
	then
		convert $1 -resize x`expr $LINES - 1` /tmp/terminal-picture.png && img-cat /tmp/terminal-picture.png;
	else
		convert $1 -resize `expr $COLUMNS / 2 - 2` /tmp/terminal-picture.png && img-cat /tmp/terminal-picture.png;
	fi
}
```
