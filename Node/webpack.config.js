const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', 
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:
                {
                    loader: "html-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html',filename:'index.html' }),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback:true
    }
};