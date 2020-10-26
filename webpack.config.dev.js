const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    //tells webpack process env that we are in dev mode and how to handle the dev file
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        //there's an issue with webpack 5 and the web-dev-server which many suggests should use "webpack serve instead"
        //until i figure it out, simply use index.html path 
        contentBase:  './public',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
}
)