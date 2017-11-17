import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config'
import {NavLink} from 'react-router-dom';
export default class Test extends Component {

  static fetchData() {
  } // will be used for server side rendering

  render() {
    const {route} = this.props;
    return (
      <div className="app route-container">
        <h1>Layout!</h1>
        <p>Just s demo page!!</p>
        <ul>
          <li><NavLink activeClassName='active' exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName='active' to="/test">Test</NavLink></li>
        </ul>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}
