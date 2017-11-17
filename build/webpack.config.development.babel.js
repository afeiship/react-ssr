import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './webpack.common.babel';
import {resolve} from 'path';

export default merge(commonConfig, {
  entry: [
    'webpack-hot-middleware/client',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre'],
        },
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),  // Webpack 2.0 fixed this mispelling
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  //devtools:
  devtool: 'source-map',
  devServer: {
    hot: true,
    stats: 'errors-only',
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
});
