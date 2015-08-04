module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
		    {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel-loader',
		    },
		    {
		      test: /\.less$/,
		      loader: 'style!css!less'
		    },
		],
	}
};