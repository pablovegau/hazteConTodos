const webpack = require("webpack")
const { merge } = require("webpack-merge")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)

const pathsToClean = { template: "./dist" }

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
})

module.exports = ({ mode } = { mode: "production" }) =>
  merge(
    {
      mode: mode,
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000,
                },
              },
            ],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
        ],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [
        htmlPlugin,
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(pathsToClean),
      ],
    },
    modeConfig(mode)
  )
