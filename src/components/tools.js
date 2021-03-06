import React, { Component } from "react";
import { connect } from "react-redux";
import * as colors from "./colors";
import * as actions from "../actions/actions";

const tools = ["brush", "eraser", "flood"];
class Tools extends Component {
	state = {
		activeTool: "brush"
	};
	flood = () => {
		this.props.floodColor();
	};
	switchToEraser = () => {
		this.props.switchToEraser();
	};
	switchToBrush = () => {
		const lastSelectedColor = this.props.selectedColor.lastSelectedColor;
		this.props.updateCurrentColor(lastSelectedColor);
	};
	render() {
		return (
			<div>
				Tools
				<input
					type="submit"
					value="Brush"
					style={{
						backgroundColor: this.props.currentTool === "brush"
							? "blue"
							: "white",
						color: this.props.currentTool === "brush"
							? "white"
							: "black"
					}}
					onClick={this.switchToBrush}
				/>
				<input
					type="submit"
					value="eraser"
					style={{
						backgroundColor: this.props.currentTool === "eraser"
							? "blue"
							: "white",
						color: this.props.currentTool === "eraser"
							? "white"
							: "black"
					}}
					onClick={this.switchToEraser}
				/>
				<input type="submit" value="flood" onClick={this.flood} />
			</div>
		);
	}
}

export default connect(
	storeState => ({
		currentTool: storeState.currentTool,
		selectedColor: storeState.selectedColor
	}),
	{
		floodColor: actions.floodColor,
		updateCurrentColor: actions.updateCurrentColor,
		switchToEraser: actions.switchToEraser
	}
)(Tools);
