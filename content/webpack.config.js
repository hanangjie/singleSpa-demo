const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    libraryTarget: "system",
    filename: "[name].js",
    jsonpFunction: `webpackJsonp_demo`,
  },
  externals: ["single-spa"],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
      }, ],
    }, ],
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    compress: true,
    https: true,
  },
  plugins: [new CleanWebpackPlugin()],
};