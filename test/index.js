const test = require('ava')
const path = require('path')
const Art = require('../index')
const viewPath = path.join(__dirname, 'views')
const viewData = {title: 'nevermore'}
let viewFile = path.join(viewPath, 'home.art')
let art = new Art(viewFile, viewData)
let base = art.render()

test('art with absolute path', async t => {
  let viewFile = path.join(viewPath, 'home.art')
  let art = new Art(viewFile, viewData)
  let data = art.render()
  t.is(base, data)
})