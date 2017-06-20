import React, { Component } from "react";
import { connect } from "react-redux";
import * as colors from "./colors";
import * as actions from "../actions/actions";

class CanvasSizer extends Component {
	state = {
		height: this.props.resolution.height,
		cellSize: this.props.resolution.cellSize
	};
	getNewWidth = event => {
		const newWidth = Number(event.target.value);
		this.props.updateCanvasWidth(newWidth);
	};
	getNewHeight = event => {
		const newHeight = Number(event.target.value);
		this.props.updateCanvasHeight(newHeight);
	};

	render() {
		const resolution = this.props.resolution;
		return (
			<div>
				Width:
				{" "}
				<input
					type="text"
					placeholder={resolution.width}
					onChange={this.getNewWidth}
				/>
				Height:
				{" "}
				<input
					type="text"
					placeholder={resolution.height}
					onChange={this.getNewHeight}
				/>

			</div>
		);
	}
}

export default connect(
	storeState => ({
		resolution: storeState.resolution
	}),
	{
		updateCanvasWidth: actions.updateCanvasWidth,
		updateCanvasHeight: actions.updateCanvasHeight
	}
)(CanvasSizer);
