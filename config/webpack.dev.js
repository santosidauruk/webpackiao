const path = require('path');

module.exports = {
    entry: {
        main: ["babel-polyfill", "./src/main.js"]
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
        overlay: true
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
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
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
    }
}