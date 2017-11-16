import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import isDev from 'isdev';
import {Dir} from './src/config';

const TARGET = process.env.npm_lifecycle_event;

let Config = {
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  entry: [
    'babel-polyfill',
    path.join(Dir.src, 'client.js'),
  ],
  output: {
    path: path.join(Dir.public, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   loader: 'eslint-loader',
    //   exclude: /node_modules/,
    //   include: Dir.src,
    // }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),      // Webpack 1.0
    new webpack.optimize.OccurrenceOrderPlugin(),  // Webpack 2.0 fixed this mispelling
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

if (TARGET === 'build:prod' && !isDev) {
  Config = merge(Config, {
    bail: true,
    devtool: 'source-map',
    output: {publicPath: '/build/'},
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        "parallel": {
          "cache": true,
          "workers": 2
        },
        "compress": {
          "negate_iife": false,
          "unsafe_comps": true,
          "properties": true,
          "keep_fargs": false,
          "pure_getters": true,
          "collapse_vars": true,
          "unsafe": true,
          "warnings": false,
          "screw_ie8": true,
          "sequences": true,
          "dead_code": true,
          "drop_debugger": true,
          "comparisons": true,
          "conditionals": true,
          "evaluate": true,
          "booleans": true,
          "loops": true,
          "unused": true,
          "hoist_funs": true,
          "if_return": true,
          "join_vars": true,
          "cascade": true,
          "drop_console": true,
          "pure_funcs": [
            "classCallCheck",
            "invariant",
            "warning"
          ]
        },
        "output": {
          "comments": false
        }
      })
    ],
  });
}


if (TARGET === 'server:dev' && isDev) {
  Config = merge(Config, {
    devtool: 'eval',
    entry: ['webpack-hot-middleware/client'],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre'],
        },
      }],
    },
  });
}

export default Config;
