---
title: ECMAScript Version
tags:
  - Version
---

# ECMAScript Version

| Version | Official Name                       | Date | Description     |
| ------- | ----------------------------------- | ---- | --------------- |
|         | JavaScript 1.0                      | 1995 | by Brendan Eich |
| ES1     | ECMAScript 1                        | 1997 | ECMA-262        |
| ES2     | ECMAScript 2                        | 1998 |
| ES3     | ECMAScript 3                        | 1999 |
| ES4     | ECMAScript 4                        |      | 未发布          |
| ES5     | [ECMAScript 5](#ecmascript-5)       | 2009 |
| ES6     | [ECMAScript 2015](#ecmascript-2015) | 2015 |
|         | [ECMAScript 2016](#ecmascript-2016) | 2016 |
|         | [ECMAScript 2017](#ecmascript-2017) | 2017 |
|         | [ECMAScript 2018](#ecmascript-2018) | 2018 |
|         | [ECMAScript 2019](#ecmascript-2019) | 2019 |
|         | [ECMAScript 2020](#ecmascript-2020) | 2020 |
|         | [ECMAScript 2021](#ecmascript-2021) | 2021 |
|         | [ECMAScript 2022](#ecmascript-2022) | 2022 |
|         | [ECMAScript 2023](#ecmascript-2023) | 2023 |
| ES.Next |                                     |      | 下一个版本      |

| ES     | NodeJS      |
| ------ | ----------- |
| ES2022 | NodeJS 20   |
| ES2022 | NodeJS 18   |
| ES2021 | NodeJS 16   |
| ES2020 | NodeJS 14   |
| ES2019 | NodeJS 12   |
| ES2018 | NodeJS 10   |
| ES2017 | NodeJS 8.10 |

- https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping

:::tip

- 今年采纳的建议，发布到下一年版本，因此会相差一年版本号

:::

| stage   | for         | note                  |
| ------- | ----------- | --------------------- |
| stage 0 | Strawperson |
| stage 1 | Proposal    |
| stage 2 | Draft       | 描述准确              |
| stage 3 | Candidate   | 实现,等待用户使用反馈 |
| stage 4 | Finished    | 准备添加到 标准       |

|             proposal | stage   | note   |
| -------------------: | ------- | ------ |
|         [decorators] | stage 3 | TS 5.0 |
| [decorator-metadata] | stage 3 | TS 5.2 |
|    Import Attributes |         | TS 5.3 |
|           [temporal] | stage 3 |
|        [shadowrealm] | stage 3 |
|         [binary-ast] |
|        [set-methods] | stage 3 |
|       [record-tuple] | stage 2 |
|      [async-context] | stage 2 |

[async-context]: https://github.com/tc39/proposal-async-context
[record-tuple]: https://github.com/tc39/proposal-record-tuple
[decorators]: https://github.com/tc39/proposal-decorators
[decorator-metadata]: github.com/tc39/proposal-decorator-metadata
[binary-ast]: https://github.com/tc39/proposal-binary-ast
[temporal]: https://github.com/tc39/proposal-temporal
[shadowrealm]: https://github.com/tc39/proposal-shadowrealm
[set-methods]: https://github.com/tc39/proposal-set-methods

:::tip 👀

- [Promise.try](https://github.com/tc39/proposal-promise-try)
  - `new Promise(r => r(f()))` -> `Promise.try(f)`
- Stage 3 - 接下来可能会加入到语言中的功能特性
  - ~~Import Assertions~~
  - Import Attribute `import data from 'data.json' with {type:'json']}`
  - JSON Modules
  - Intl.DisplayNames
  - [temporal] - Temporal - 替代 Date
  - 2023
    - array group, groupToMap
      - https://github.com/tc39/proposal-array-grouping
    - Array - toReversed, toSorted, toSpliced, with
      - https://github.com/tc39/proposal-change-array-by-copy
    - Array.fromAsync
- [modules-import-hooks-refactor](https://github.com/nicolo-ribaudo/modules-import-hooks-refactor)
  - stage 1
  - import 过程可控
- [Function.memo](https://github.com/tc39/proposal-function-memo)
- `await generateItems().toArray()`
  - [tc39/proposal-iterator-helpers](https://github.com/tc39/proposal-iterator-helpers)
- `Array.fromAsync`
  [tc39/proposal-array-from-async](https://github.com/tc39/proposal-array-from-async)

:::

| syntax  | Chrome   | Name                          | Note   |
| ------- | -------- | ----------------------------- | ------ |
| `?.`    | Chrome80 | Optional chaining             |
| `??`    | Chrome80 | Nullish coalescing operator   |
| `??=`   | Chrome85 | Nullish coalescing assignment |
| `#name` | Chrome74 | Private class fields          |
| `using` |          | Explicit Resource Management  | TS 5.2 |

| feat       | Version            | note |
| ---------- | ------------------ | ---- |
| globalThis | Chrome71, NodeJS12 |

- es5 和 es6 是一个分界线
  - 2018 年所有浏览器支持 es6
  - 之后统一版本概念变弱 - 都以功能特性为单位
- [tc39/proposals](https://github.com/tc39/proposals)
- [TC39 Process](https://tc39.github.io/process-document/)
  - https://tc39.es/process-document/
  - Finished Proposals
  - Active Proposals
  - Stage 1 Proposals
  - Stage 0 Proposals
  - Inactive/Withdrawn Proposals
- [ECMAScript Language Specification](https://tc39.es/ecma262/)
- 参考
  - [Tarjan's strongly connected components algorithm](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm)
  - [tc39/agendas](https://github.com/tc39/agendas)
  - [finished-proposals](https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md)
  - https://caniuse.com/#search=es6
  - [compat-table](https://kangax.github.io/compat-table)
    - [2016+](https://kangax.github.io/compat-table/es2016plus/)
  - https://en.wikipedia.org/wiki/ECMAScript
  - https://www.proposals.es/
  - https://polyfill-fastly.io/
  - https://webstatus.dev/
- Explicit Resource Management
  - Symbol.dispose
  - Symbol.asyncDispose
  - DisposableStack
  - AsyncDisposableStack
  - SuppressedError

## ECMAScript 2024

- Promise.withResolvers
- Object.groupBy
- Map.groupBy
- Temporal
  - Temporal.PlainDate
  - Temporal.PlainTime
  - Temporal.PlainMonthDay
  - Temporal.PlainYearMonth
  - [fullcalendar/temporal-polyfill](https://github.com/fullcalendar/temporal-polyfill)
    - `import 'temporal-polyfill/global';`
    - 部分实现， 20kb
  - [js-temporal/temporal-polyfill](https://github.com/js-temporal/temporal-polyfill)
    - 没有 global
    - 完整实现，更大， 56+kb

```ts
const date = Temporal.PlainDate(2024, 5, 1);
const time = new Temporal.PlainTime(10, 30);
const md = new Temporal.PlainMonthDay(5, 1);
const ym = new Temporal.PlainYearMonth(2024, 5);
```

## ECMAScript 2023

- Array toReversed, toSorted, toSpliced, findLast, findLastIndex, with
  - TypedArray, Array
- Hashbang Grammar - JS 直接作为可执行脚本

```js
#!/usr/bin/env node
```

```ts
[1, 2].with(1, 0);
```

## ECMAScript 2022

- String at
- Array at
- Regex `/d` - start and end of the match
- Object.hasOwn
- Error cause
- Top-level await
- Class
  - field 定义
  - private field
  - static block

```js
// Class Fields
class Counter extends HTMLElement {
  // 私有
  #val = 0;

  get #x() { return #val; }
  set #x(value) {
    this.#val = value;
  }

  #inc() {
    this.#val ++
  }

  // 静态
  static #blue = "#0000ff";
  static getBlue() {
    return this.#blue
  }
}

// regex 索引
// d -> indices
/a+(?<Z>z)?/d.exec('xaaaz').indices

// Top-level await
await Promise.resolve()

// static block
class C {
  static {
    // statements
  }
}

// error cause
try {
  throw new Error('error', { cause: err });
} catch (e) {
  console.log('Caused by', e.cause);
}

// Array#at
[,-1].at(-1)
```

## ECMAScript 2021

- Promise.any
- String#replaceAll
- 数字分隔符 - `1_2_3_4`
- FinalizationRegistry
  - 注册 GC 回调

```js
String.prototype.replaceAll;

Promise.any;

// WeakRef.prototype.deref
new WeakRef(() => 1);

// Logical Assignment Operators
a ||= b;
a &&= b;
a ??= b;

// Numeric separators
1_000_000_000;
```

## ECMAScript 2020

- BigInt
  - [GoogleChromeLabs/jsbi](https://github.com/GoogleChromeLabs/jsbi)
    - pure-JavaScript implementation of BigInt
- String matchAll()
- `??` Nullish Coalescing Operator
- `?.` Optional Chaining Operator
- `&&=` Logical AND Assignment Operator
- `||=` Logical OR Assignment
- `??=` Nullish Coalescing Assignment
- Promise.allSettled
- `import()` Dynamic Import
- [for-in 顺序](https://tc39.es/proposal-for-in-order/)

```js
// String.prototype.matchAll
// 要求 RegEx 必须有 g 标识
'aa'.matchAll(/a/g);

// 动态 import
import('./foo.js');

// 模块元信息
import.meta;

BigInt;

// Promise.all 会在第一个异常时终止
Promise.allSettled;

globalThis;

// Optional Chaining
undefined?.b;

// Nullish coalescing Operator
undefined ?? null ?? 0 ?? 1;
```

## ECMAScript 2019

- String trimStart,trimEnd
- Object fromEntries
- Optional catch binding
- Array flat, flatMap
- Array.sort - 修改为稳定排序
- JSON superset
  - U+2028 LINE SEPARATOR, U+2029 PARAGRAPH SEPARATOR
- Function.prototype.toString [revision](https://tc39.es/Function-prototype-toString-revision/)
  - 修改 Function.toString 返回完整无修改源码
- Well-formed JSON.stringify
  - 修复 JSON.stringify 处理 `\u` 的问题
  - 避免返回错误 Unicode escape

```js
// Optional catch binding
try {
} catch {}

Symbol.prototype.description;

Object.fromEntries([['k', 'v']]);

// String.prototype.{trimStart,trimEnd}
' 1 '.trimStart().trimEnd();

String.prototype.matchAll;

// Array.prototype.{flat,flatMap}
[[1], [2]].flat();
[0, 0].flatMap((_, i) => [1]);
```

## ECMAScript 2018

- [Lifting template literal restriction](https://tc39.es/proposal-template-literal-revision/)

```js
// Regex Named Group
/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u.exec('2015-01-02')
// Regex s -> dot all, single line
/foo.bar/s.test('foo\nbar');
// Regex Lookbehind Assertions
/(?<=\D)\d/
/(?<!\D)\d/
// Regex Unicode Property Escapes
// \p{UnicodePropertyName=UnicodePropertyValue}
// General_Category, Script, Script_Extensions
//
// \p{LoneUnicodePropertyNameOrValue}
// Alphabetic, Uppercase, Lowercase, White_Space, Noncharacter_Code_Point, Default_Ignorable_Code_Point, Any, ASCII, Assigned, ID_Start, ID_Continue, Join_Control, Emoji_Presentation, Emoji_Modifier, Emoji_Modifier_Base
//
// http://unicode.org/Public/UNIDATA/PropertyValueAliases.txt
// http://unicode.org/Public/UNIDATA/PropertyAliases.txt
// http://unicode.org/reports/tr18/#RL1.2
/^\p{Decimal_Number}+$/u.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼')

// Object Rest/Spread
const {a,...rest} = {a:1,b:2,...{c:3}}

// Promise#finally
Promise.prototype.finally;

// Asynchronous Iteration
// [Symbol.asyncIterator]
for await (const line of readLines()) {
  console.log(line);
}
async function* readLines(){
  yield await Promise.resolve('Line 1')
  yield 'Line 2'
}
```

## ECMAScript 2017

- [Shared Memory and Atomics](https://tc39.es/ecmascript_sharedmem/shmem.html)

```js
Object.values;
Object.entries;

'1'.padEnd(4, ' ');
'1'.padStart(4, ' ');

Object.getOwnPropertyDescriptors;

// 方法参数容许多余逗号
console.log(true);

// async,await
async function run() {
  await Promise.resolve();
}
```

## ECMAScript 2016

```js
Array.prototype.includes;

// Exponentiation
1 ** 2; // Math.pow(1,2)
```

## ECMAScript 2015

```js
// array function
() => 1;

// let, const
let a = 1;
const b = 1;

// for-of
for (const v of [1]);

// Map, Set
new Map();
new Set();

// Symbol
const mySym = new Symbol();

// class
class Car {
  constructor() {}
}

// promise
Promise.resolve();

// 默认参数, rest 参数
function hello(name = 'world', ...props) {}

const { a, b } = { a: 1, b: 2 };

String.prototype.includes;
String.prototype.startsWith;
String.prototype.endsWith;

Array.from('abc');
[(1, 2)].keys();
[(1, 2)].find((v) => v == 1);
[(1, 2)].findIndex((v) => v == 1);

Math.trunc;
Math.sign;
Math.cbrt;
Math.log2;
Math.log10;

Number.isInteger;
Number.isSafeInteger;

isFinite(1 / 0);
isNaN(false);
```

## ECMAScript 5

```ts
'use strict';

'Hello'.charAt(0);
'Hello'[0];

// 多行 string
console.log(
  'Hello \
Wener!',
);

// 允许关键字作为属性名
const a = { new: 'yes' };

String.prototype.trim;

Array.isArray([]);
Array.prototype.forEach;
Array.prototype.map;
Array.prototype.filter;
Array.prototype.reduce;
Array.prototype.reduceRight;
Array.prototype.every;
Array.prototype.some;
Array.prototype.indexOf;
Array.prototype.lastIndexOf;

JSON.parse('{}');
JSON.stringify({});

Date.now();
Date.prototype.toISOString;
Date.prototype.toJSON;

// getter,setter
const a = {
  get name() {
    return '';
  },
  set name(v) {
    console.log(v);
  },
};

// mgmt
Object.create;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptor;
Object.getOwnPropertyNames;
Object.getPrototypeOf;
Object.keys;
// protect
Object.preventExtensions;
Object.isExtensible;
Object.seal;
Object.isSealed;
Object.freeze;
Object.isFrozen;

// 允许多余逗号
// {a:1,}
// [1,]
```
