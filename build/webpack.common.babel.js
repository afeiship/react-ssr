import webpack from 'webpack';
import path from 'path';
import {Dir} from '~/src/config';


export default {
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/client.js')
  ],
  output: {
    path: path.resolve(__dirname, '../public/build'),
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
}