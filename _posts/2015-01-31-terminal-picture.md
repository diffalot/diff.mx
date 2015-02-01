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
	convert $1 -resize `expr $COLUMNS / 2 - 2` /tmp/terminal-picture.png && img-cat /tmp/terminal-picture.png;
}
```
