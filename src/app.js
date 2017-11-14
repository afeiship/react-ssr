import React from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import {Route, NavLink} from 'react-router-dom';


export default class extends React.Component {
  render() {
    return (
      <div className="router-wrapper">
        <h1>Layout</h1>
        <ul>
          <li><NavLink activeClassName='active' exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName='active' to="/test">Test</NavLink></li>
        </ul>
        <Route path="/" exact component={Home}></Route>
        <Route path="/test" component={Test}></Route>
      </div>
    );
  }
}
