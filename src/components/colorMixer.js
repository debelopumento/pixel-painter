import React, { Component } from "react";
import { connect } from "react-redux";
import * as colors from "./colors";
import * as actions from "../actions/actions";

class ColorMixer extends Component {
	state = {
		R: 0,
		G: 0,
		B: 255
	};
	changeRed = event => {
		const red = event.target.value;
		this.setState({ R: red });
	};
	changeGreen = event => {
		const green = event.target.value;
		this.setState({ G: green });
	};
	changeBlue = event => {
		const blue = event.target.value;
		this.setState({ B: blue });
	};
	render() {
		const mixedColor = `rgb(${this.state.R}, ${this.state.G}, ${this.state.B})`;
		return (
			<div>
				color mixer
				<div
					style={{
						width: 50,
						height: 50,
						backgroundColor: mixedColor,
						margin: "auto"
					}}
				/>
				<div>Red: {this.state.R}</div>
				<input
					type="range"
					min="0"
					max="255"
					onInput={this.changeRed}
					onChange={this.changeRed}
					value={this.state.R}
				/>
				<div>Green: {this.state.G}</div>
				<input
					type="range"
					min="0"
					max="255"
					onInput={this.changeGreen}
					onChange={this.changeGreen}
					value={this.state.G}
				/>
				<div>Blue: {this.state.B}</div>
				<input
					type="range"
					min="0"
					max="255"
					onInput={this.changeBlue}
					onChange={this.changeBlue}
					value={this.state.B}
				/>
			</div>
		);
	}
}

export default connect(
	storeState => ({
		brushSize: storeState.brushSize,
		selectedColor: storeState.selectedColor
	}),
	{
		updateBrushSize: actions.updateBrushSize
	}
)(ColorMixer);
