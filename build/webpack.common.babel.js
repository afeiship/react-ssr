import webpack from 'webpack';
import {resolve} from 'path';


export default {
  entry: [
    'babel-polyfill',
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
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),  // Webpack 2.0 fixed this mispelling

    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}