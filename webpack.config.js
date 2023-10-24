const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
        
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]"
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
                type: "asset/resource"
            }
            
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Hello from webpack",
            filename: "index.html",
            template: "src/templete.html"
        }),
        new BundleAnalyzerPlugin()

    ]
}