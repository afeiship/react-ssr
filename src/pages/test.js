import React, { Component } from 'react';

export default class Test extends Component {

  static fetchData() {} // will be used for server side rendering

  render() {
    console.log('render test!');
    return (
      <h1>Test Page</h1>
    );
  }
}
