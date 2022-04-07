const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // "@babel/plugin-syntax-jsx"
  ],
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "react-native": "react-native-web",
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        // defaultVendors: false,
        // default: false,
        commons: {
          name: "externalvendor",
          chunks: "all",
          priority: 20,
          test: /[\\/]node_modules[\\/](?!react-native-web[\\/])/,
        },
        reactNative: {
          name: "reactNative",
          chunks: "all",
          priority: 25,
          test: /[\\/]node_modules[\\/]react-native-web[\\/]/,
        },
      },
    },
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\.(js|jsx|mjs)$/,
        // exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.png|svg|jpg|gif$/,
      //   use: ["file-loader"],
      // },
      {
        test: /\.(gif|jpe?g|png|svg|)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
    ],
  },
};
