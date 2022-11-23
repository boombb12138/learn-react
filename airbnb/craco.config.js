const path = require("path");
const CracoLessPlugin = require("craco-less");

// __dirname是当前文件所在的 路径
const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],

  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
};
