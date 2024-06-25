---
title: NPM
  - Registry
---

# NPM

- [npm download size](https://arve0.github.io/npm-download-size/)
- cache
  - `$HOME/.npm`
  - `%AppData%/npm-cache`
  - --cache
- https://www.runpkg.com/
- https://deps.dev/

:::tip

- NODE_ENV=production 或 --production 时 npm ci/install 不会安装开发依赖
  - `npm ci --include=dev` 强制安装 dev

:::

```json title="建议限定版本"
{
  "engines": {
    "node": "14",
    "npm": "8"
  }
}
```

```bash
du -hs ~/.npm/_cacache/ # 查看本地缓存大小
npm config get prefix   # bin 目录
npm list -g --depth=0   # 全局模块 - 第一行为目录，例如 /usr/local/lib
npm root -g

export NODE_PATH=$(npm root -g) # 能 import 全局的包
node -p process.config.variables.node_prefix
```

## .npmrc

- ~/.npmrc
- /etc/npmrc
- /usr/lib/node_modules/npm/npmrc

```ini
# 有时候镜像不匹配
# registry=https://registry.npmmirror.com/
# 速度还行
registry=https://registry.npmjs.org

disturl=https://npmmirror.com/mirrors/node/
sharp_binary_host=https://npmmirror.com/mirrors/sharp/
sharp_libvips_binary_host=https://npmmirror.com/mirrors/sharp-libvips/
node_sqlite3_binary_host_mirror=https://npmmirror.com/mirrors/sqlite3/
better-sqlite3_binary_host=https://npmmirror.com/mirrors/sharp-libvips/
```

```ini
# 不推荐 - 经常出现因为镜像问题构建失败
#registry="https://registry.npmmirror.com"
disturl=https://npmmirror.com/mirrors/node
chromedriver_cdnurl=https://npmmirror.com/mirrors/chromedriver
electron_mirror=https://npmmirror.com/mirrors/electron/
fse_binary_host_mirror=https://npmmirror.com/mirrors/fsevents
node_inspector_cdnurl=https://npmmirror.com/mirrors/node-inspector
nodejs_org_mirror=https://npmmirror.com/mirrors/node
nvm_nodejs_org_mirror=https://npmmirror.com/mirrors/node
operadriver_cdnurl=https://npmmirror.com/mirrors/operadriver
phantomjs_cdnurl=https://npmmirror.com/mirrors/phantomjs
profiler_binary_host_mirror=https://npmmirror.com/mirrors/node-inspector/
puppeteer_download_host=https://npmmirror.com/mirrors/
sass_binary_site=https://npmmirror.com/mirrors/node-sass
selenium_cdnurl=https://npmmirror.com/mirrors/selenium
SQLITE3_BINARY_SITE=https://npmmirror.com/mirrors/sqlite3
sharp_binary_host=https://npmmirror.com/mirrors/sharp
sharp_libvips_binary_host=https://npmmirror.com/mirrors/sharp-libvips
canvas_binary_host=https://npmmirror.com/mirrors/node-canvas-prebuilt/
```

```bash
# _binary_host_mirror
# npm view sqlite3 binary.module_name
node_sqlite3_binary_host_mirror=https://npmmirror.com/mirrors/sqlite3
```

- disturl
  - gyp 下载构建依赖 https://nodejs.org/download/release/v16.16.0/node-v16.16.0-headers.tar.gz
- https://registry.npmmirror.com/binary.html
- https://docs.npmjs.com/cli/v6/configuring-npm/npmrc

## registry

| url                                            | from     |
| ---------------------------------------------- | -------- |
| https://registry.npmjs.org                     | 官方     |
| https://mirrors.sjtug.sjtu.edu.cn/npm-registry | 上海交大 |
| https://registry.npmmirror.com                 | 淘宝     |
| ~~https://r.cnpmjs.org~~                       |
| ~~https://registry.npm.taobao.org~~            | 淘宝     |

- npmmirror
  - https://registry.npmmirror.com/binary.html
    - 镜像的一些二进制
  - 触发同步
    - https://npmmirror.com/sync/ohm-grammar-miniquery
    - https://npmmirror.com/sync/@wener/reaction

```bash
# 原始
npm_config_registry=https://registry.npmjs.org
npm i --registry=https://registry.npmjs.org

# 淘宝镜像
npm i --registry=https://registry.npm.taobao.org
# 上海交大镜像
npm ci --registry=https://mirrors.sjtug.sjtu.edu.cn/npm-registry
# npx 使用镜像
npm_config_registry=https://registry.npm.taobao.org npx @scoped/package
#
npx --registry=https://registry.npmjs.org -y cubejs-cli create demo-cube -d postgres

# musl 手动安装 sharp
# 有可能最新版的 libvips 无镜像，因此注意版本选择
# libvips v8.13.1 无镜像
# https://registry.npmmirror.com/binary.html?path=sharp-libvips/v8.13.1/
npm install --verbose --platform=linux --libc=musl sharp@^0.30
```

## scope

- https://docs.npmjs.com/getting-started/scoped-packages
- https://docs.npmjs.com/private-modules/intro
- https://docs.npmjs.com/misc/scope

```bash
# 添加一个 scope
npm login --registry=https://reg.wener.me/nexus/repository/npm-internal/ --scope=@wener
# 添加后可修改关联的仓库
npm config set @wener:registry https://reg.wener.me/nexus/repository/npm-internal/
# 初始化时可以使用指定的 scope, 包名中会加上  @wener
npm init --scope=wener
# 发布是会发往 @wener 的仓库中
npm publish
# 安装指定 scope 中的模块
npm install @wener/wener-test
# 可以设置当前的全局 scope
npm config set scope wener
```

## workspaces

- [npm workspaces](https://github.com/npm/rfcs/blob/latest/implemented/0026-workspaces.md)

```json
{
  "name": "workspace-example",
  "version": "1.0.0",
  // 两种格式
  "workspaces": ["packages/*"],
  "workspaces": {
    "packages": ["packages/*"]
  }
}
```

```bash
npm ls
# 添加依赖到 workspace
npm add -w @wener/apis-weaver systemjs
# 依赖另外一个 workspace - 不能在 module add - 会报找不到
npm add -w @wener/apis-weaver @wener/apis-core
# npx 在 ws 下执行
npx -w @wener/apis-weaver typesync
# run 在 ws 下执行 - 注意 path.resolve 还是基于 ws 路径而不是当前路径
npm run -w @wener/apis-weaver build
```

## corepack

```bash
corepack enable
```

## Package

```json title="package.json"
{
  // cjs
  "main": "./main.js",
  // esm
  "module": "./index.js",
  "types": "./index.d.ts",
  "unpkg": "./umd/react-router-dom.production.min.js",

  // 多个 entry - 访问除此之外的会被拒绝
  "exports": {
    ".": {
      "require": "./index.cjs",
      "import": "./index.mjs",
      "default": "./index.js"
    },
    "./package.json": "./package.json",
    "./extra": "./jsx-runtime.cjs"
  },

  // 是否有全局操作
  "sideEffects": false
}
```

```js title="main.js"
'use strict';

/* eslint-env node */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/react-router-dom.production.min.js');
} else {
  module.exports = require('./umd/react-router-dom.development.js');
}
```

---

- Pure ESM package
  https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

## Registry

```bash
curl -sfL 'https://registry.npmmirror.com/@wener/reaction' | jq -r '."dist-tags".latest'
curl -sfL 'https://registry.npmmirror.com/@wener/reaction/latest' | jq -r '.version'
```

- 元数据
  - `GET /`
  - `GET /-/all`
  - `GET /-/`
- 包
  - `GET /{package}`
  - `GET /{package}/{version}`
    - version 可以是 latest
  - `GET /-/v1/search`
    - text, size, from, quality, popularity, maintenance
- https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md
- https://github.com/npm/registry/blob/master/docs/user/authentication.md

```bash
# basic 支持访问 private 内容
curl -u username:password https://registry.npmjs.org/@org/pkg

curl -u user:pass https://registry.npmjs.org/-/npm/v1/tokens
curl -u user:pass -X POST \
  --json '{"password":"","readonly":true}' \
  https://registry.npmjs.org/-/npm/v1/tokens
```
