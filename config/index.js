const path = require('path')
const fs = require('fs')
const path_src = path.resolve('.', 'src');

const config = {
  // 环境
  env: process.env.NODE_ENV || 'development',
  // 基本url
  path_base: path.resolve('.'),
  path_src: path_src,
  server_port: process.env.PORT || 9091,
}

module.exports = config
