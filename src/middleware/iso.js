import React from 'react';
import isDev from 'isdev';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Server} from '~/src/app';
///import manifestJson from '~/public/build/manifest.json';

// console.log(manifestJson);


export function isoMiddleware(req, res) {
  const context = {};
  const manifest = require('~/public/build/manifest.json');
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
        mainJs: manifest['main.js'],
        vendorJs: manifest['vendor.js'],
        root: html || null,
      });
  }
}
