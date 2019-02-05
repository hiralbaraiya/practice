const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./index.js",
    output: {
        filename: '[name]-[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
}