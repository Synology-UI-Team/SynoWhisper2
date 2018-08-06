const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.s[a|c]ss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
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
		new VueLoaderPlugin()
	]
};
