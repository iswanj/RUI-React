module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
		    { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', },
		    { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
				{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
		    { test: /\.json$/, loader: 'json' },
		],
	}
};
