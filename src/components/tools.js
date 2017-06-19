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
		this.props.updateCurrentColor(colors.defaultColor);
	};
	switchToBrush = () => {
		this.props.updateCurrentColor("black");
	};
	render() {
		return (
			<div>
				Tools
				<input
					type="submit"
					value="Brush"
					onClick={this.switchToBrush}
				/>
				<input
					type="submit"
					value="eraser"
					onClick={this.switchToEraser}
				/>
				<input type="submit" value="flood" onClick={this.flood} />
			</div>
		);
	}
}

export default connect(
	storeState => ({
		currentTool: storeState.currentTool
	}),
	{
		floodColor: actions.floodColor,
		updateCurrentColor: actions.updateCurrentColor
	}
)(Tools);
