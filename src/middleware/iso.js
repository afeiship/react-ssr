import React from 'react';
import isDev from 'isdev';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Server} from '~/src/app';


export function isoMiddleware(req, res) {
  const context = {};
  const html = renderToStaticMarkup(
    <StaticRouter location={req.url} context={context}>
      <Server />
    </StaticRouter>
  );

  res
    .status(200)
    .render('index', {
      build: isDev ? null : '/build',
      root: html,
    });
}
