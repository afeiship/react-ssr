import AppBase from 'components/scripts/index';
import React from 'react';
import routes from './routes';
import {renderRoutes} from 'react-router-config';


export default (Router) => {

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
        }
      }
    }

    render() {
      const childRoutes = renderRoutes(routes);
      return Router ? <Router ref="root" children={childRoutes}/> : childRoutes;
    }
  };

};

