const test = require('ava')
const path = require('path')
const Art = require('../index')
const viewPath = path.join(__dirname, 'views')


test('art with absolute path', async t => {
  const viewData = {title: 'nevermore'}
  let viewFile = path.join(viewPath, 'home.art')
  let art = new Art(viewFile, viewData)
  let data = await art.render()
  t.is(`<h3>nevermore</h3>`, data)
})

test('art use beforeRender', async t => {
  const viewFile = path.join(viewPath, 'rule.art')
  const art = new Art(viewFile, { title: 'beforeRender'}, {
    options: {},
    beforeRender(artTemplate, config) {
      // add diy rule
      artTemplate.defaults.rules.push({
        test: /\${([\w\W]*?)}/,
        use: function(match, code) {
          return {
            code: code,
            output: 'escape'
          }
        }
      });
    }
  })
  const renderResult = await art.render()
  t.is(renderResult, `<h3>beforeRender</h3>`)
})