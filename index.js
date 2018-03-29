'use strict'
const art = require('art-template')

class ArtTemplate {
  constructor (viewFile, viewData, config) {
    this.viewFile = viewFile
    this.viewData = viewData
    this.config = config
  }
  
  render () {
    return art.render({filename: this.viewFile}, this.viewData,
      this.config.options)
  }
}

module.exports = ArtTemplate