var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        path.join(__dirname, '/assets/js/webpack.entry.js')
    ],
    output: {
        path: path.join(__dirname, '/assets/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [ 'style', 'css', 'postcss' ]
            },
            {
                test: /\.sass$/,
                loaders: [ 'style', 'css', 'sass?indentedSyntax' ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'file?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
    postcss: function() {
        return [autoprefixer];
    }
}; // end config

// ExtractTextPlugin.extract()
