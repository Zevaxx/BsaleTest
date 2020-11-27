const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\,js?$/,
                exclude: /node_modules/,
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: "./index.html",
                filename: "./index.html",
            }
        ]),
    ],
};
