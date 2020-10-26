const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.config.common');

//webpack by default minifies files but even webpack recommends and encourages terser plugin
//the other two handles css well. minicssextract is both a plugin and a loader

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    }
                }
            }),
            new TerserPlugin({
                //using multi-process parallel running to improve the build speed
                //default number of concurrent runs: os.cpus().length-1,
                parallel: true,
            }),
        ],
    },
}
)