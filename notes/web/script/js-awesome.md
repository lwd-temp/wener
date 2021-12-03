---
title: JavaScript Awesome
tags:
  - Awesome
---

# JavaScript Awesome

- [List of ECMAScript engines](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)
- [novnc/noVNC](https://github.com/novnc/noVNC)
- [felixrieseberg/macintosh.js](https://github.com/felixrieseberg/macintosh.js)
- [RobinCsl/awesome-js-tooling-not-in-js](https://github.com/RobinCsl/awesome-js-tooling-not-in-js)

## Framework

## Library

- Event
  - DOM EventTarget - Bus
  - DOM MessageChannel - 1-1、WebWorker
  - DOM BroadcastChannel - origin 纬度 - 多窗口
  - DOM Window.postMessage - 跨 origin、多窗口、iframe
  - [primus/eventemitter3](https://github.com/primus/eventemitter3)
  - [developit/mitt](https://github.com/developit/mitt)
    - ts, 200byte
    - 建议直接拷到项目使用
  - [pubkey/broadcast-channel](https://github.com/pubkey/broadcast-channel)
- IoC
  - [inversify/InversifyJS](https://github.com/inversify/InversifyJS)
- deep compare
  - [epoberezkin/fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal)
  - [FormidableLabs/react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)
    - 基于 fast-deep-equal
    - 支持 react 元素
  - [lukeed/dequal](https://github.com/lukeed/dequal)
- Date & Time
  - date-fns
  - dayjs
    - Fast 2kB alternative to Moment.js
    - Immutable
    - plugins
      - duration
  - moment
  - d3-time-format
  - chrono-node
- number format
  - [numbro](https://github.com/BenjaminVanRyseghem/numbro)
    - 基于 numeral
  - [numeral](https://github.com/adamwdraper/Numeral-js)
    - 不再维护
- money
  - [dinero.js](https://github.com/dinerojs/dinero.js)
    - create, calculate, format money
  - [currency.js](https://github.com/scurker/currency.js)
  - [accounting.js](https://github.com/openexchangerates/accounting.js)
- flip effect
  - [react-flip-numbers](https://github.com/bluebill1049/react-flip-numbers)
  - [react-flipcard](https://github.com/mzabriskie/react-flipcard)
  - [number-flip] (https://github.com/gaoryrt/flip)
  - [objectivehtml/FlipClock](https://github.com/objectivehtml/FlipClock)
    - 不再维护
- animation
  - [framer/motion](https://github.com/framer/motion)
  - react-spring
  - react-motion
  - react-move
  - [danro/easing-js](https://github.com/danro/easing-js)
- functional
  - [ramda](https://github.com/ramda/ramda)
  - [fp-ts](https://github.com/gcanti/fp-ts)
  - io-ts
- reactive
  - rxjs
- core
  - core-js
  - lodash
  - underscore
- clone
  - structuredClone - Chrome 98
- json
  - [fast-json-patch](https://github.com/Starcounter-Jack/JSON-Patch)
  - [microdiff](https://github.com/AsyncBanana/microdiff)
- canvas
  - [fabricjs/fabric.js](https://github.com/fabricjs/fabric.js)
    - SVG <-> Canvas
  - [signature_pad](https://github.com/szimek/signature_pad)
- color
  - [Qix-/color](https://github.com/Qix-/color)
- store
  - [share/sharedb](https://github.com/share/sharedb)
    - Realtime database backend based on Operational Transformation (OT)
- compiler
  - [wooorm/xdm](https://github.com/wooorm/xdm)
    - MDX compiler - No runtime. With esbuild, Rollup, and webpack plugins

## JSX

- [ryansolid/solid](https://github.com/ryansolid/solid)
  - 快、小、类 React
  - jsx 直接预先生成 dom 模板，属性变化动态插入到 dom 里 - 没有 react 的 vdom 比较合并
- preact
- [jorgebucaran/hyperapp](https://github.com/jorgebucaran/hyperapp)

## Game

- [KilledByAPixel/LittleJS](https://github.com/KilledByAPixel/LittleJS)
  - Tiny, 2D, WebGL

## Template

- [linkedin/dustjs](https://github.com/linkedin/dustjs)

## 有趣

- [enkimute/ganja.js](https://github.com/enkimute/ganja.js) - 几何代数

## UX

- [usablica/intro.js](https://github.com/usablica/intro.js)

## 工具

- [CryogenicPlanet/depp](https://github.com/CryogenicPlanet/depp)