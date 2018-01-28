const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false
  }
};
