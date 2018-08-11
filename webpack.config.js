module.exports = {
	entry: __dirname + '/client/index.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public'
	},
	module: {
		rules: [{
			test: /\.jsx?/,
			include: __dirname + '/client',
			loader: 'babel-loader',
			query: {
				presets: ['react', 'stage-3']
			}
		}]
	}
}