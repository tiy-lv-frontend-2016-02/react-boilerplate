var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve("./src/app.js"),
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  plugins: [
    // the index.html file is generated below
    new HtmlWebpackPlugin({
      template: './src/assets/html/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        loader: 'babel',
        include: /(src)/,
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.json$/,
        loader:'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    root: path.resolve('./src/')
  }
}