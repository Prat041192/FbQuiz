var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
entry: SRC_DIR + "/index.js",
output: {
	path: DIST_DIR +"/app",
	filename:"bundle.js",
	publicPath:"/app/"
	},
    devtool : 'source-map',
module: {
	loaders:[
		{
			test: /\.js?/,
			include:SRC_DIR,
			loader:"babel-loader",
			query:{
				presets:["react", "es2015", "stage-2"]
			}
		},
          
        { test: /\.css?/, loaders: ["style-loader", "css-loader"] },
        {
                test: /\.html$/,
                loader: "html"
                // alternative: raw
        },
        {
                test: /\.(jpg?|g|png|gif|svg)$/i,
                loader: "file-loader"
                // alternative: raw
        }
	]
}

}

module.exports = config