require('dotenv').config()

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const outputConfig = {
  destPath: "./dist"
};

const entryConfig = [
  "./src/index.tsx",
  "./src/styles/index.scss",
];

const copyPluginPatterns = {
  patterns: [
    { from: "./src/assets/images", to: "images" },
    { from: "./src/assets/fonts", to: "fonts" },
  ]
};


const devServer = {
  static: {
    directory: path.join(__dirname, outputConfig.destPath),
  },
  port: "8080",
  host: "0.0.0.0",
	historyApiFallback: true
};

module.exports = (env, options) =>
{
  return {
    mode: options.mode,
    entry: entryConfig,
    devServer,
    target: "web",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    ["postcss-preset-env"],
                  ],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                api: "modern",
              },
            },
          ],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: "javascript/auto",
          loader: "file-loader",
          options: {
            publicPath: "../",
            name: "[path][name].[ext]",
            context: path.resolve(__dirname, "src/assets"),
            emitFile: false,
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "javascript/auto",
          exclude: /images/,
          loader: "file-loader",
          options: {
            publicPath: "../",
            context: path.resolve(__dirname, "src/assets"),
            name: "[path][name].[ext]",
            emitFile: false,
          },
        },
      ],
    },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    output: {
      filename: "js/[name].bundle.js",
      path: path.resolve(__dirname, outputConfig.destPath),
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        minify: false
      }),
      new CopyPlugin(copyPluginPatterns),
      new webpack.DefinePlugin({
        'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY),
        'process.env.FEATURE_LIST_VIEW_GRID_VIEW': JSON.stringify(process.env.FEATURE_LIST_VIEW_GRID_VIEW),
        'process.env.FEATURE_FADE_IN_IMAGE': JSON.stringify(process.env.FEATURE_FADE_IN_IMAGE),
        'process.env.FEATURE_LAZY_LOAD_IMAGE': JSON.stringify(process.env.FEATURE_LAZY_LOAD_IMAGE),
        'process.env.FEATURE_HIGHLIGHT_EFFECT': JSON.stringify(process.env.FEATURE_HIGHLIGHT_EFFECT),
        'process.env.FEATURE_SKELETON_LOADING': JSON.stringify(process.env.FEATURE_SKELETON_LOADING),
      })
    ]
  };
};
