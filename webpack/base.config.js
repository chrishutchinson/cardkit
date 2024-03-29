const path = require("path");

const config = {
  entry: {},

  output: {
    path: path.resolve(__dirname, "../"),
    filename: "[name].js",
    library: "CardKit[name]",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },

  mode: "development",

  optimization: {
    minimize: false,
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.js$/i,
        include: /(node_modules\/svg2png)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        use: "svg-inline-loader",
      },
    ],
  },

  node: {
    child_process: "empty",
    fs: "empty",
  },

  plugins: [],
};

module.exports = config;
