const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const devWebpackConfig = {
    devtool: 'eval-source-map',
    mode: "development",
    stats:{children:false}
}

module.exports = webpackMerge(baseWebpackConfig,devWebpackConfig)