module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-test/" : "/",
  runtimeCompiler: true,
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";
								@import "include-media/dist/_include-media.scss";`
      }
    }
  }
};
