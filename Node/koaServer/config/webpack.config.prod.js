const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const devWebpackConfig = {
    mode: "production",
    stats:{children:false,warning:false},
    optimization:{
      minimizer:[
        new TerserWebpackPlugin()
      ]
    },

}

module.exports = webpackMerge(baseWebpackConfig,devWebpackConfig)