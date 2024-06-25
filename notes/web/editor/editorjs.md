---
title: editor.js
---

# editor.js

- [codex-team/editor.js](https://github.com/codex-team/editor.js)
  - Apache-2.0, TS
  - Block 编辑器
  - 插件非常多，生态比较好
  - ⚠️ 基础功能薄弱，基本的功能也得使用插件
    - editorjs-undo, editorjs-drag-drop
- [editor-config.d.ts](https://github.com/codex-team/editor.js/blob/next/types/configs/editor-config.d.ts)
- [editor-js/awesome-editorjs](https://github.com/editor-js/awesome-editorjs)
- [codex-team/codex.docs](https://github.com/codex-team/codex.docs)
- https://github.com/moveyourdigital/editorjs-blocks-react-renderer

:::caution

- 开发不活跃
  - [factly/dega#454](https://github.com/factly/dega/issues/454#issue-997246320)

:::

:::info

- 不支持拖拽
- 不支持布局元素
- undo、redo 有问题
- 不支持 markdown
- 不支持嵌套 block
- 目前没有 mention 组件
- 不支持快捷键，不支持 slash 命令

:::

## Notes

- 区分 InlineBlock 和 Block

```json title="数据模型"
{
  "time": 1550476186479,
  "version": "2.8.1",
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "With the header of course",
        "level": 2
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "So what do we have?"
      }
    }
  ]
}
```

```ts title="BlockPlugin.ts"
export class MyBlock {
  get shortcut() {
    return 'CMD+M';
  }
  // 默认 Block
  static get isInline() {
    return false;
  }
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }
  static get pasteConfig() {
    return {
      tags: ['IMG'],
      files: {
        mimeTypes: ['image/*'],
        extensions: ['gif', 'jpg', 'png'],
      },
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i,
      },
    };
  }
  static get sanitize() {
    return {
      url: false, // disallow HTML
      caption: {}, // only tags from Inline Toolbar
      mark: {
        class: 'cdx-marker',
      },
    };
  }
  constructor({ block, data, api, config }) {
    this.block = block;
    this.data = data;
    this.api = api;
    this.config = config;
  }
  render() {
    return document.createElement('input');
  }
  renderSettings() {
    return document.createElement('div');
  }
  save(blockContent) {
    return {
      url: blockContent.value,
    };
  }
  // 校验保存的数据
  validate(savedData) {
    if (!savedData.url.trim()) {
      return false;
    }

    return true;
  }
  onPaste(event) {
    switch (event.type) {
      case 'tag':
        const imgTag = event.detail.data;
        this._createImage(imgTag.src);
        break;
      case 'file':
        const file = event.detail.file;
        const reader = new FileReader();

        reader.onload = (loadEvent) => {
          this._createImage(loadEvent.target.result);
        };

        reader.readAsDataURL(file);
        break;
      case 'pattern':
        const src = event.detail.data;

        this._createImage(src);
        break;
    }
  }

  // inline

  surround(range) {}

  checkState(selection) {}
  renderActions() {}

  //
}
```

## Plugins

- @editorjs/image
  - 不支持 align - 可参考 https://www.npmjs.com/package/@ikbenbas/editorjs-image

```bash
pnpm add @editorjs/{image,simple-image,link}
```

```ts
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

export const EDITOR_JS_TOOLS = {
  // Paragraph 默认就有，除非需要替换
  // paragraph: Paragraph,
  embed: Embed,
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
```
