const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const port = process.env.PORT || 8000;

module.exports = {
	mode: "development",
	entry: {
		main: "./src/index.js"
	},
	output: {
		filename: "bundle.[hash].js",
		path: path.resolve("./dist")
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/, // .css로 끝나는 모든 파일
				use: ["style-loader", "css-loader"] // css-loader를 적용
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html"
		})
	],
	devServer: {
		host: "localhost",
		port: port,
		open: true // open page when start
	}
};
