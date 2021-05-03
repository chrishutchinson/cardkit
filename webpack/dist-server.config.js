// Load some dependencies
const path = require("path");
const _ = require("lodash");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");

const fs = require("fs");
const node_modules = fs.readdirSync("node_modules");

// Get the base config
const base = require("./base.config");

// Merge with base
const config = merge(base, {
  entry: path.resolve(__dirname, "../src/renderers/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../"),
    filename: "server.js",
    libraryTarget: "umd",
    library: "CardKitServer",
  },
  mode: "production",
  externals: _.merge(node_modules, {
    react: {
      amd: "react",
      root: "React",
      commonjs: "react",
      commonjs2: "react",
    },
    "react-dom/server": {
      amd: "react-dom/server",
      root: "ReactDOMServer",
      commonjs: "react-dom/server",
      commonjs2: "react-dom/server",
    },
  }),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new ESLintPlugin(),
  ],
});

// Export config
module.exports = config;
