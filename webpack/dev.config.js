const path = require("path");
const args = require("minimist")(process.argv.slice(2));
const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");

const base = require("./base.config");

const srcPath = path.join(__dirname, "./app");

const config = merge(base, {
  entry: path.resolve(__dirname, "../src/demo-dom.js"),
  output: {
    path: path.resolve(__dirname, "../src"),
    filename: "demo-dom-bundle.js",
  },
  devServer: {
    port: args.port || 8000,
    inline: true,
  },
  devtool: "source-map",
  plugins: [new ESLintPlugin()],
});

module.exports = config;
