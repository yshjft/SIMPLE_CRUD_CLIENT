const {createProxyMiddleware} = require('http-proxy-middleware')

// const baseURL = 'http://localhost:8004'
// const baseURL = 'http://localhost:80'
const baseURL = 'http://18.191.99.176/'

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: baseURL,
      changeOrigin: true
    })
  )
}
