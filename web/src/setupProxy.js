const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    process.env.REACT_APP_API_PREFIX,
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ADDRESS,
      changeOrigin: true,
      pathRewrite(path) {
        return path.replace(`${process.env.REACT_APP_API_PREFIX}`, "");
      },
    })
  );
};
