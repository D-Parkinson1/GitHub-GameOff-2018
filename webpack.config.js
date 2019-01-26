const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/* eslint-disable no-undef */

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    externals: {
        phaser: 'Phaser'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        //Fix for bug to do with header errors
        disableHostCheck: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        //new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin(
            [{
                from: 'src/assets/',
                to: 'assets/',
                ignore: ['*.piskel']
            }]
        )
    ]
};