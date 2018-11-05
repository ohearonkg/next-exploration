module.exports = {
  components: "./components/**/*.tsx",
  ignore: ["./components/Layout.tsx"],
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    }
  }
};
