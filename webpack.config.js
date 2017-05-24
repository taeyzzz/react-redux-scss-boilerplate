var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);

module.exports={
  entry:'./main.js',
  output:{
    path:'./',
    filename:'index.js'
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    publicPath: '/',
    filename: 'bundle.min.js'
  },
  devServer:{
    inline:true,
    port:4567,
    historyApiFallback: true
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['es2015','react','stage-1']
        }
      },
      {
        test: /\.scss|css$/,
        loaders: [ 'style', 'css', 'sass']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      { test: /\.json$/,
        loader: 'json'
      },
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(ROOT_PATH, 'index.html'),
      inject: 'body',
      // favicon: path.resolve(ROOT_PATH, './image/Fetila logo png.png'),
    })
  ]
}
