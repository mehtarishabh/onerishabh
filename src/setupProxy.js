const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/contact",
    createProxyMiddleware({
      target: "http://localhost:8888",
      changeOrigin: true,
      pathRewrite: {
        "^/api/contact": "/.netlify/functions/contact",
      },
    }),
  );
};
