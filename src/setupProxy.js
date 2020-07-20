// @ts-ignore
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/API',
    proxy.createProxyMiddleware({
      target: 'http://siemens-sfll-html-ii.ccw.lab/sfll-html/',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/API': '/API'
      }
    })
  )
  app.use(
    '/Content',
    proxy.createProxyMiddleware({
      target: 'http://siemens-sfll-html-ii.ccw.lab/sfll-html/',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/Content': '/Content'
      }
    })
  )
}
