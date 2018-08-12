var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.s[a|c]ss$/,
				loader: 'css-loader!sass-loader'
			},
			{
				test: /\.(eot|jpg|png|svg|[ot]tf|woff2?)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	devServer: {
		publicPath: '/dist/'
	},
	entry: ['./src/main.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			files: {
				css: ["./dist/main.css"]
			},
			filename: path.join(__dirname, './dist/index.html'),
			template: path.join(__dirname, './src/index.html'),
			inject: true
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new CopyWebpackPlugin([{from: 'assets/**/*', to: 'dist/'}])
	]
};
