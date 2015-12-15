module.exports = {
	entry: './src/App.js',
	output: {
		path: './public/js',
		filename: 'bundle.js'
	},
	
module: {
		loaders: [
			{
				test: /\.js$/,
				include: /src/, 
				exclude: /node_modules/, 
				loader: 'babel?presets[]=react'
			}
		]
	}
};