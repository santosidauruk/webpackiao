const path = require('path');
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: ["./src/main.js"]
    },
    mode: "development",
    output: {
        filename: "[name].min.js",
        // output path hasil build
        path: path.resolve(__dirname, "../dist"),
        // dari mana file2 hasil build akan disajikan (biasanya waktu dev-server)
        publicPath: "/"
    },
    devServer: {
        // dari mana konten di-serve, in this case: file2 html dari folder dist
        contentBase: "dist",
        // to add pretty color to terminal
        stats: {
            colors: true
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new HTMLWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html"
        }),
        new HTMLWebpackPlugin({
            template: "./src/help.html",
            filename: "help.html"
        }),
        new HTMLWebpackPlugin({
            template: "./src/satu.html",
            filename: "satu.html"
        }),
        new HTMLWebpackPlugin({
            template: "./src/dua.html",
            filename: "dua.html"
        })
    ]
}