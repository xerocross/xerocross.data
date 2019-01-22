const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/xerocross-dstructs.js",
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "xerocross-dstructs.js",
        library: "xerocross.data",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    optimization: {
        minimize: false
    }
};
