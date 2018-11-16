const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const package = require('../package');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'vendors.js'
  },
  context: path.resolve(__dirname, '../src'),
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
        ]
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
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

};