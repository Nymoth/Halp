const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'title'
    })
  ],
  output: {
    filename: '[name].js'
  }
});
