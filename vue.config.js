module.exports = {
  lintOnSave: false,//是否开启eslint检测
  devServer:{
    port:7000
  },
  pages: {
    index: {
      entry: "src/main.ts"
    }
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require("node-sass"),
        additionalData: "@import 'build/color/src/index.scss';"
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("cache-loader")
      .loader("cache-loader")
      .end()
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("markdown-loader")
      .loader(require("path").resolve(__dirname, "build/scripts/markdown-loader.js"))
      .end();
  }
};
