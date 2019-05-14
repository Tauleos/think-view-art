'use strict'
const art = require('art-template')
const fs = require('fs')
const util = require('util');
const readFile = util.promisify(fs.readFile)

class ArtTemplate {
  constructor (viewFile, viewData, config={}) {
    this.viewFile = viewFile
    this.viewData = viewData
    this.config = config
    this.handleOptions = {...config.options}
  }
  
  async render () {
    if (this.config.beforeRender) {
      this.config.beforeRender(art, this.handleOptions)
    }
    const template = await readFile(this.viewFile)
    // render接口文档：http://aui.github.io/art-template/zh-cn/docs/api.html#render-source-data-options
    // art-template render方法，是不能传递文件路径的，如果直接传递文件路径
    // 那么 第三个参数，this.handleOptions 会被忽略掉。详细请看 node_modules/art-template/lib/compile/index.js 源码
    return art.render(template.toString(), this.viewData,
      this.handleOptions)
  }
}

module.exports = ArtTemplate