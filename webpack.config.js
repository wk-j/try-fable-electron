var webpack = require("webpack");

var progress = new webpack.ProgressPlugin((p, msg) => {
  console.log(p * 100);
  console.log(msg);
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