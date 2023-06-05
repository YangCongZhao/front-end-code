const path = require("path");
const nodeExternals = require('webpack-node-externals')
const webpack  = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackConfig = {
    target: 'node',
    entry: path.join(__dirname,'src/index.js'),
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname,'/dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            },

        }]
    },
    externals: [nodeExternals()],
    plugins: [new CleanWebpackPlugin(),new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV:(process.env.NODE_ENV==='production' || process.env.NODE_ENV==='prod' ?'production' : 'development')
        }
    })],
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    }
}

module.exports = webpackConfig