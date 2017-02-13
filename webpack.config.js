var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry:'./assets/js/webpack.entry.js',
    output: {
        path: path.resolve(__dirname, './assets/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax', 'postcss-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, use: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
            }
        ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          context: __dirname,
          postcss: [ autoprefixer ]
        }
      })
    ],
}; // end config

// ExtractTextPlugin.extract()
