const path = require('path')
const debug = require('debug')('app:config')

debug('Creating default configuration.')

const config = {
  env: process.env.NODE_ENV || 'development',

  path_base: path.resolve('.'),
  path_src: path.resolve('.', 'src'),

  server_port: process.env.PORT || 9091,
}

module.exports = config
