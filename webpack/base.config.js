const path = require('path');

let config = {

  entry: {},

  output: {
    path: './',
    filename: '[name].js',
    library: 'CardKit[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {

    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader?{rules:{semi:0,"jsx-quotes":0}}',
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.js$/i, 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/i, 
        include: /(node_modules\/svg2png)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=50000'
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        loader: 'svg-inline'
      }
    ]

  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
    alias: {
      react: path.resolve('./node_modules/react'),
    }
  },

  node: {
    child_process: 'empty',
    fs: 'empty'
  },

  plugins: [],

  eslint: {
    configFile: path.resolve('./eslintrc.json'),
  }

}

module.exports = config;