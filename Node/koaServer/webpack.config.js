const path = require("path");
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackConfig = {
    target: 'node',
    mode: "development",
    entry: path.join(__dirname,'src/index.js'),
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname,'/dist')
    },
    devtool: 'eval-source-map',
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
    plugins: [new CleanWebpackPlugin()],
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    }
}

module.exports = webpackConfig