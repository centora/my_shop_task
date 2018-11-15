const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const package = require('../package');

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, '../public')
  },
  context: path.resolve(__dirname, '../src'),
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      title: package.name,
      version: package.version,
      filename: 'main.html',
      chunksSortMode: 'none',
      template: './index.html'
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

};