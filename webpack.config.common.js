const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//cleanWebpack cleans up previously developed js file
//HtmlWebpack Plugin injects the main.content.hash.js to the index.html via script tag 

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
            filename: '[name].[contenthash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
    module: {
        rules: [  
             {
                 //tells webpack how to handle js files
                 test: /\.(js|jsx)$/,
                 exclude: /[\\/]node_modules[\\/]/,
                 use: {
                     //converts ES 6 such as const, let, export, arrow functions etc to older javascript
                     //i love ES 6
                     loader: 'babel-loader',
                 },
             },
             {
                test: /\.less$/,
                use: [
                    //tells webpack what to use to load less files and convert to css.
                    { loader: 'style-loader',}, 
                    { loader: 'css-loader',}, 
                    { loader: 'less-loader', options: {
                              lessOptions: {
                                modifyVars: {
                                    //setting the values for ant design since ant desing uses less
                                  hack:`true; @import "${path.resolve(
                                      __dirname, "./", "theme.less"
                                  )}";`
                                },
                                javascriptEnabled: true,
                           },
                            },
                        },
            ],
        },
    ]
    }
}
//this config file houses config files common to dev config and prod config files. webpack merge handles the merge.