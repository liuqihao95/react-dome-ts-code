// @ts-ignore
const express = require('express')
const proxy = require('http-proxy-middleware')

// proxy middleware options
const options = {
  // 域名绑定
  target: 'http://www.example.org', // target host
  // 虚拟主机
  changeOrigin: true,               // needed for virtual hosted sites
  //
  ws: true,                         // proxy websockets
  // 路径别名
  pathRewrite: {
    '^/api/old-path': '/api/new-path',     // rewrite path
    '^/api/remove/path': '/path'           // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    'dev.localhost:3000': 'http://localhost:8000'
  }
}

// create the proxy (without context)
const exampleProxy = proxy(options)

// mount `exampleProxy` in web server
const app = express()
app.use('/api', exampleProxy)
app.listen(3000)
