const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
        },
      },
      {
        test: /\.(pdf)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.html/,
        use: ["html-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
