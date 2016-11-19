var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./entry.js",
    output:{
        path: "./dist" ,
        filename: "software.js"
    },
    module:{
        loaders:[
            { 
                test: /\.css$/,
                loader:"style!css!postcss"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { 
                test: /\.woff|\.woff2|\.svg|.eot|\.ttf/, 
                loader: "file" 
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.html$/, 
                loader: 'html'
            },
            {
                test: /\.(png|jpg)$/, 
                loader: 'url?limit=8192'
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    resolve:{
        extensions: ['', '.js', '.css', '.scss','.vue'],
        alias: {
            vue : 'vue/dist/vue.js'
        }
    },
    plugins: [       
        new HtmlWebpackPlugin({
            cache:true,
            favicon: "./src/favicon.ico",
            template: "./src/index.html",
            hash: true,
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  
            },
            compress: {
                warnings: false
            }
        }),
    ],
};