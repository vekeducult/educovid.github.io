const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const optimize = () => {
  return Promise.all(
    [
      ['resources/dupla-src.jpg', 'resources/dupla.jpg'],
      ['resources/unica-src.jpg', 'resources/unica.jpg'],
      ['resources/es/dupla-src.jpg', 'resources/es/dupla.jpg'],
      ['resources/es/unica-src.jpg', 'resources/es/unica.jpg']
    ]
    .map(([src, dest]) => {
      sharp(path.join(__dirname, '..', src))
        .resize({ width: 2000, height: 2000, fit: 'inside' })
        .toFile(path.join(__dirname, '..', dest))
    })
  )
}

optimize()
