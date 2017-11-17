import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import AppBase from 'components/scripts/index';
import routes from './routes';


function appDispatcher(Router) {

  return class extends AppBase {
    static initialState() {
      return {
        memory: {
          initialData: {
            tes: 123,
            age: 100,
            items: []
          },
          myInitial: 0,
          sum: 0
        },
        local: {
          test: 'by fei'
        }
      }
    }

    render() {
      const childRoutes = renderRoutes(routes);
      return Router ? <Router ref="root" children={childRoutes}/> : childRoutes;
    }
  };

}


export const Client = appDispatcher(BrowserRouter);
export const Server = appDispatcher(null);
