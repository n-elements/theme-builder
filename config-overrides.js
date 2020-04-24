const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hocs": path.resolve(__dirname, "src/hocs"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes.ts"),
      "@sdk": path.resolve(__dirname, "src/sdk"),
      "@state": path.resolve(__dirname, "src/store/index.ts"),
      "@store": path.resolve(__dirname, "src/store/"),
    },
  };

  require("react-app-rewire-postcss")(config, {
    plugins: require("./postcss.config"),
  });

  return config;
};
