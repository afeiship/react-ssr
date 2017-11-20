// import historyFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '~/build/webpack.config.development.babel';
import webpack from 'webpack';
import {resolve} from 'path';

const compiler = webpack(config);

const middleware = [
  webpackDevMiddleware(compiler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    progress: true,
    inline: true,
    quiet: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    serverSideRender: true,
    stats: {
      colors: true,
    },
  }),
  webpackHotMiddleware(compiler, {
    log: console.log, // eslint-disable-line no-console
  }),
  // historyFallback(),
];

export {middleware as hotMiddleware};
