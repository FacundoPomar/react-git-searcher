const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const distPath = path.resolve('./dist');

const config = {
    entry: './src/index.tsx',
    watch: true,
    output: {
        path: distPath,
        filename: './bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [MiniCssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{
            from: './index.html',
            to: distPath
        }])
    ]
};

module.exports = config;