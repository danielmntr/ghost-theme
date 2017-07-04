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
                test: /\.css$/, use: ['style-loader', 'css-loader', 'resolve-url-loader', 
                'postcss-loader']
            },
            {
                test: /\.sass$/, use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?indentedSyntax?sourceMap', 'postcss-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, use: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
            context: __dirname,
            postcss: [ autoprefixer ]
            }
        }),
        
    ],
};