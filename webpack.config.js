var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './static/js/script.js',
    output: { path: __dirname + '/static/js/', filename: 'bundle.js' },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
}
