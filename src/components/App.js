import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Canvas from "./canvas";
import ColorPalette from "./colorPalette";
import SelectedColor from "./selectedColor";
import Tools from "./tools";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pixel Painter</h2>
        </div>
        <Canvas /><SelectedColor />
        <ColorPalette />
        <Tools />
      </div>
    );
  }
}

export default connect(storeState => ({
  firstProp: storeState.firstProp
}))(App);
