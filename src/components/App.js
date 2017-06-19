import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Canvas from "./canvas";
import ColorPalette from "./colorPalette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Canvas />
        <ColorPalette />
      </div>
    );
  }
}

export default connect(storeState => ({
  firstProp: storeState.firstProp
}))(App);
