const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/home",
    createProxyMiddleware({
      target: "https://home-api.pinduoduo.com/",
      changeOrigin: true,
    })
  );
};
