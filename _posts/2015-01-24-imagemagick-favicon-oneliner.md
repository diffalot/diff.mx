---
layout: post
title:  "Imagemagick Favicon One-Liner"
date:   2015-01-22 12:00:00
categories: [development]
tags: [imagemagick, favicon]
---

```convert $SOURCE_IMAGE  -bordercolor white -border 0 \
      \( -clone 0 -resize 16x16 \) \
      \( -clone 0 -resize 32x32 \) \
      \( -clone 0 -resize 48x48 \) \
      \( -clone 0 -resize 64x64 \) \
      -delete 0 -alpha off -colors 256 favicon.ico
```

via [pfig's gist](https://gist.github.com/pfig/1808188)
