import React, { Component } from "react";
import "./App.css";
const logo = 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React in the Server</h2>
        </div>
        <p className="App-intro">Isn't this cool?</p>
      </div>
    );
  }
}
export default App;