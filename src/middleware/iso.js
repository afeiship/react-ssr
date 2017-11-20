import React from 'react';
import isDev from 'isdev';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Server} from '~/src/app';
import { matchPath } from 'react-router';


export function isoMiddleware(req, res) {
  console.log(req.url);
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Server />
    </StaticRouter>
  );

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.status(302);
  } else {
    res
      .status(200)
      .render('index', {
        build: isDev ? null : '/build',
        root: html,
      });
  }
}
