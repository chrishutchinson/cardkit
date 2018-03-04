const path = require("path");

let config = {
  entry: {},

  output: {
    path: path.resolve(__dirname, "../"),
    filename: "[name].js",
    library: "CardKit[name]",
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|rvg.js/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: "url-loader?limit=50000"
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        use: "svg-inline-loader"
      }
    ]
  },

  // resolve: {
  //   root: path.resolve("./src"),
  //   extensions: ["", ".js"],
  //   alias: {
  //     react: path.resolve("./node_modules/react")
  //   }
  // },

  node: {
    child_process: "empty",
    fs: "empty"
  },

  plugins: [],

  mode: "production"
};

module.exports = config;
