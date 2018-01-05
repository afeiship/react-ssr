import React, { Component } from 'react';

export default class Test extends Component {

  static fetchData() {} // will be used for server side rendering

  render() {
    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <p>
          <input type="text" name="username" id="1"/>
        </p>
        <p>
          <input type="password" name="password" id="2"/>
        </p>
      </div>
    );
  }
}
