const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// https://webpack.js.org/concepts/output/#multiple-entry-points

module.exports = {
  mode: "production",
  entry: {
    app: "./src/feature-main/lending-main.vue",
    map: "./src/feature-map/lending-map.vue",
    products: "./src/feature-products/lending-products.vue"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/distChunks"
  },
  // entry: "./src/main.js",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "distNew")
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      favicon: "./src/assets/favicon.ico"
    })
  ]
};
