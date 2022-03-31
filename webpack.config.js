const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const webpack = require("webpack");
module.exports = {
  mode: 'development',
  entry: {
    index: './src/assets/js/index.js',
    // Runtime code for hot module replacement
    hot: 'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  devServer: {

    static: './src',
    hot: false,
    client: false,
    compress: true,
    port: 9000,

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        preserveLineBreaks: true
      },
      title: 'Custom template',
      template: './src/index.html',
      inject: false,
    }),
    new HtmlWebpackInjector(),
    new HtmlWebpackTagsPlugin({
      append: false,
      links: ['./assets/css/style.css']
    }),

  ]
}