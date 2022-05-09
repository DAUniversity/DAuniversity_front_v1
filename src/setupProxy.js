const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_HOST,
      changeOrigin: true,
    })
  );
};