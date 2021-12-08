const path = require("path");

module.exports = {
	entry: {
		client: "./src/client/index.ts",
		server: "./src/server/index.ts"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	mode: "development",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "out"),
	},
};