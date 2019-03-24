const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files = [
    './dist/appelement/runtime.js',
    './dist/appelement/polyfills.js',
    './dist/appelement/scripts.js',
    './dist/appelement/main.js'
  ]

  await fs.ensureDir('elements')

  await concat(files, 'elements/app-element.js')
  console.info('Demo for Mircofront end...')

})()
