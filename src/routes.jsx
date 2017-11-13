import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import Layout from './pages/Layout';
import Home from './pages/Home';
import Test from './pages/Test';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="test" component={Test} />
  </Route>
);
