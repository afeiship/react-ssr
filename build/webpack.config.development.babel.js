import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './webpack.common.babel';

export default merge(commonConfig, {
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
