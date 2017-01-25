var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

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
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass', 'postcss']
            },
        ]
    },
    postcss: function() {
        return [autoprefixer];
    }
}; // end config