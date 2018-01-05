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
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  //devtools:
  devtool: 'source-map',
  devServer: {
    hot: true,
    stats: 'errors-only',
    compress: false,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
});
