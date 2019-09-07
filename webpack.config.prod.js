const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
	entry: './src/index',
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
    optimization: {
        minimizer: [new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false //use it for removing comments like "/*! ... */"
                }
            }
        })]
    },
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'ts-loader'
		}]
	},
    plugins: [
		new webpack.ProvidePlugin({
		  PIXI: 'pixi.js'
		}),
		new CopyWebpackPlugin([{
			from: 'build/assets',
			to: 'assets'
		}]),
		new CopyWebpackPlugin([{
			from: 'build/imgs',
			to: 'imgs'
		}]),
        new HTMLWebpackPlugin({
            template: 'build/index.html',
            filename: 'index.html',
            hash: true,
            minify: false
        })
    ]
}