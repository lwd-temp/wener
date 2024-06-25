---
title: SVG
---

# SVG

- [svg2-draft](https://svgwg.org/svg2-draft/)
  - [Changes from SVG 1.1](https://www.w3.org/TR/SVG2/changes.html)
- [SVG Loaders](https://wpack.io/tutorials/using-various-svg-loader/)
- https://jakearchibald.github.io/svgomg/
- https://svgomg.net/
- https://svgcrop.com/
- https://daveknispel.github.io/svg2use/
- Editor
  - https://uxwing.com/svg-icon-editor/
  - https://www.svgviewer.dev/
  - https://yqnn.github.io/svg-path-editor/
  - https://boxy-svg.com/
  - https://inkscape.org/

```bash
# AI to SVG
inkscape --file=icon.ai --export-plain-svg=icon.svg

# macOS
qlmanage -t -s 1000 -o . picture.svg

brew install librsvg
rsvg-convert -h 32 icon.svg > icon-32.png
rsvg-convert -h 200 icon.svg > icon.png

rsvg-convert -h 200 icon.svg | oxipng -o max -i 0 --strip safe - > icon.png


# 通过替换 currentColor 来生成不同颜色的图标
cat ./svg/Home.svg | sed 's/currentColor/#999999/g' | rsvg-convert -h 48 | oxipng -o max -i 0 --strip safe - > HomeInactive.png
cat ./svg/Home.svg | sed 's/currentColor/#4579F6/g' | rsvg-convert -h 48 | oxipng -o max -i 0 --strip safe - > HomeActive.png
```

## 缩放和大小

- viewBox 控制可见区域
  - minx, miny, width, height
- width,height 控制缩放大小
- https://css-tricks.com/scale-svg/

## file-rule

Fill-Rule is an SVG property that basically defines how to determine what shapes are filled or subtracted from the shape.
The default svg value is “nonzero”, and this is what Android requires. Unfortunately Sketch uses “evenodd”

命令行操作
inkscape -g $filename --verb=EditSelectAll --verb=SelectionUnGroup --verb=StrokeToPath --verb=FileSave"

fill-rule evenodd 可能会导致内部的一些内容被忽略


TL;DR: SVG icons should use fill-rule:nonzero instead of Sketch default evenodd property to support Android VectorDrawable (as of now)

## font

- https://github.com/jaywcjlove/svgtofont
