import webpack, { DefinePlugin } from 'webpack'; // eslint-disable-line no-unused-vars
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import utils from './webpack-utils';

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const isProd = process.env.NODE_ENV === 'production';

const appConstants = {
  'process.env': {
    GMAPS_API_KEY: JSON.stringify('AIzaSyBlv6nMqco0AdDGO5V8ufudA1B61ig8aUg'),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'dev')
  },
};

export default {
  context: srcPath,
  target: 'web',
  watch: true,
  devServer: {
    contentBase: srcPath,
    compress: true,
    hot: true,
    open: true,
    port: 8080,
    watchContentBase: true,
    watchOptions: {
      poll: 1000
    }
  },
  // entry point
  entry: [
    'react-hot-loader/patch',
    'app.js'
  ],
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      nodeModulesPath,
      srcPath
    ],
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  plugins: [
    new DefinePlugin(appConstants),
    new HtmlWebpackPlugin({
      title: 'Where Am I?',
      template: 'index.tpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    (isProd ? new webpack.optimize.CommonsChunkPlugin('common') : utils.noop()),
    (isProd ? new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }) : utils.noop()),
    (isProd ? new webpack.optimize.AggressiveMergingPlugin() : utils.noop())
  ],
  module: {
    rules: [
      {
        // js & react components
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192'
      },
      // { // sass
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract({
      //     use: [
      //       {
      //         loader: 'css-loader'
      //       },
      //       {
      //         loader: 'postcss-loader'
      //       }, {
      //         loader: 'sass-loader',
      //         options: {
      //           sourceMap: true,
      //         }
      //       }
      //     ]
      //   })
      // }
      // {
      //   test: /\.(svg)$/,
      //   exclude: /node_modules/,
      //   loader: 'svg-inline-loader'
      // }
    ]
  },
  devtool: (!isProd && 'cheap-source-map'),
};
