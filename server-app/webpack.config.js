const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const package = require('./package');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = process.argv;
const isFileCSS = args.includes('--styles');

const plugins =[
  new HtmlPlugin({
    title: package.name,
    version: package.version,
    filename: 'index.html',
    chunksSortMode: 'none',
    template: './index.html'
  }),
  new webpack.HotModuleReplacementPlugin()
];

if (isFileCSS) {
  plugins.push(new MiniCssExtractPlugin({
    filename: 'styles-' + Date.now() + '.css'
  }));
}

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'vendors.js'
  },
  context: path.resolve(__dirname, 'src'),
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [ isFileCSS ? MiniCssExtractPlugin.loader : 'style-loader',
          {loader: "css-loader", options: {
              sourceMap: true
            }},
          {loader: "sass-loader", options: {
              sourceMap: true
            }}
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

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
    port: 3000,
  },

  devtool: 'inline-source-map'
};