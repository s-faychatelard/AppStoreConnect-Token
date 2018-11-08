import webpack from 'webpack'
import path from 'path'

const name = 'AppStoreConnect-Token'

const production = process.env.NODE_ENV === 'production'

module.exports = {
  mode: production ? 'production' : 'development',
  target: 'web',
  entry: [
    './src/AppStoreConnect-Token.js'
  ],
  output:{
    path: path.join(__dirname,
      './build/com.gomore.PawExtensions.AppStoreConnect-Token'),
    publicPath: '/build/',
    filename: name + '.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  node: {
    fs: 'empty'
  }
}
