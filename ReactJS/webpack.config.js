const path = require('path')
// yarn add babel-loader

module.exports={
    entry: path.resolve(__dirname,'src','index.js'),
    output:{
        path: path.resolve(__dirname,'public'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname,'public')
    },
    module :{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use:{
                    loader:'file-loader'
                }
            }
        ]
    }
}

// yarn webpack --mode development
// yarn add webpack-dev-server -D
// yarn webpack-dev-server --mode development
// yarn add style-loader
// yarn add css-loader
// yarn add file-loader