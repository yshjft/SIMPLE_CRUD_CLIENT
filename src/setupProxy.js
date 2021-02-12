const {createProxyMiddleware} = require('http-proxy-middleware')

const baseURL = 'http://localhost:8004'

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: baseURL,
      changeOrigin: true
    })
  )
}
