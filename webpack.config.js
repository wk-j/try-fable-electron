var webpack = require("webpack");
var fs = require("fs")

var progress = new webpack.ProgressPlugin((p, msg) => {
  let percentage = `${Math.round(p * 100)}`;
  fs.writeFileSync("/tmp/webpack-status", percentage)
});

module.exports = {
  entry: {
    main: "./temp/main",
    renderer: "./temp/renderer"
  },
  output: {
    filename: "[name].js",
    path: "./app/js",
    libraryTarget: "commonjs2"
  },
  externals: {
    electron: true
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: "source-map",
  module: {
    preLoaders: [{
      loader: "source-map-loader",
      exclude: /node_modules/,
      test: /\.js$/
    }]
  },
  plugins: [
    progress
  ]
};