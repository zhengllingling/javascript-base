const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        hot: true,
        open: true,
        stats: "errors-only"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "scss-loader"]
            },
            {
                test: /\.png|jpg|jpeg|gif|bmp|mp4|ogg|mp3|wav$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1024,
                        fallback: {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]"
                            }
                        }
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "javascript基础学习与练习",
            template: "./public/index.html"
        })
    ],
    mode: "development"
}