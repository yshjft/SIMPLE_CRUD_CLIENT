const {createProxyMiddleware} = require('http-proxy-middleware')

// const baseURL = 'http://localhost:8004'
const baseURL = 'http://www.simplecrud.tk/'

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: baseURL,
      changeOrigin: true
    })
  )
}
