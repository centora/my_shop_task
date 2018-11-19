const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const package = require('../package');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = process.argv;
const isFileCSS = args.includes('--styles');

const plugins =[
  new HtmlPlugin({
    title: package.name,
    version: package.version,
    filename: 'main.html',
    chunksSortMode: 'none',
    template: './index.html'
  })
];

if (isFileCSS) {
  plugins.push(new MiniCssExtractPlugin({ filename: 'styles.css' }));
}

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
        test: /\.s?css$/,
        use: [ isFileCSS ? MiniCssExtractPlugin.loader : 'style-loader',
          {loader: "css-loader"},
          {loader: "sass-loader"}
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

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

};