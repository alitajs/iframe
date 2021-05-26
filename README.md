# @alitajs/iframe

## Getting Started

Install dependencies,

```bash
$ yarn add @alitajs/iframe
or
$ npm i @alitajs/iframe
```

```
import React from 'react';
import Iframe  from '@alitajs/iframe';
const otherUrl = 'http://localhost:8000/#/';
export default () => <Iframe src={otherUrl} />;
```

## 问题

alita 的 hd 方案会设置 viewport 为 `<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=0.5,maximum-scale=0.5,minimum-scale=0.5,viewport-fit=cover">`。

而在项目中使用的 iframe 打开的页面，一般为 `<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">`。

根据 iframe 的特性，当内外不一致时，以主页面的 viewport 为主。
此时子页面使用的 `initial-scale=0.5` 就会有缩放问题。
