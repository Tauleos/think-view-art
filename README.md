# think-view-art
[![Build Status](https://travis-ci.org/leo-enigma/think-view-art.svg?branch=master)](https://travis-ci.org/leo-enigma/think-view-art)

[![npm](https://img.shields.io/npm/v/think-view-art.svg)](https://github.com/leo-enigma/think-view-art)

Use artTemplate to render view files for ThinkJs 3.x version

## Install

```javascript
npm install think-view-art
```

## How To Use

```javascript
const artTemplate = require('think-view-art')
exports.view = {
  type:'artTemplate',
  artTemplate:{
    handle:artTemplate,
    common: {} //thinkjs itself config
    options: {
        //your self config here 
      compileDebug:true
    }
  }
}
```

please refer to [art-template](https://aui.github.io/art-template/zh-cn/docs/options.html)  for more information on art-template options.
