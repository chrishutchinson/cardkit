// Load some dependencies
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

// Get the base config
const base = require("./base.config");

// Merge with base
const config = merge(base, {
  entry: path.resolve(__dirname, "../docs/cardkit.js"),
  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: "bundle.js",
  },
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
});

// Export config
module.exports = config;
