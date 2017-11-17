import webpack from 'webpack';
import {resolve} from 'path';
import {Dir} from '../src/config';


export default {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    resolve(__dirname, '../src/client.js')
  ],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '../public/build'),
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),  // Webpack 2.0 fixed this mispelling
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}