const path = require('path')
module.exports = {
    mode:'development',
    devtool: 'source-map',
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    }


}
