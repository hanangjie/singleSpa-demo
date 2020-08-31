const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    libraryTarget: "system",
    filename: "[name].js",
    jsonpFunction: `webpackJsonp_people`,
  },
  externals: ["single-spa"],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }],
    }, ],
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    https: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
    }),
    new CleanWebpackPlugin(),
  ],
};