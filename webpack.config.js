/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: `${__dirname}/src/app/index.js`, // webpack entry point. Module to start building dependency graph
  output: {
    path: `${__dirname}/dist`, // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
    publicPath: '/', // public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
      {
        test: /\.[jt]s[x]?$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/,
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/public/index.html`,
      inject: 'body',
    }),
    new webpack.DefinePlugin({ // plugin to define global constants
      API_KEY: JSON.stringify(process.env.API_KEY),
    }),
    new DashboardPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'Style': path.resolve(__dirname, 'src/style/'),
      'Components': path.resolve(__dirname, 'src/app/components'),
    },
  },
  devServer: { // configuration for webpack-dev-server
    contentBase: './src/public', // source of static assets
    port: 7700, // port to run dev-server
  },
};
