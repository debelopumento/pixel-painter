import React, { Component } from "react";
import { connect } from "react-redux";
import colors from "./colors";
import * as actions from "../actions/actions";
class ColorPalette extends Component {
	getColor = event => {
		const selectedColor = event.target.style.backgroundColor;
		this.props.updateCurrentColor(selectedColor);
	};
	render() {
		const colorCollection = Object.keys(colors).map(index => {
			const localColor = colors[index];
			return (
				<div
					key={index}
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						backgroundColor: localColor
					}}
					onClick={this.getColor}
				/>
			);
		});
		const rowWidth =
			this.props.resolution.cellSize * this.props.resolution.width + 10;

		return (
			<div
				style={{
					display: "flex",
					width: rowWidth,
					margin: "auto",
					marginTop: 15
				}}
			>
				{colorCollection}
			</div>
		);
	}
}

export default connect(
	storeState => ({
		resolution: storeState.resolution
	}),
	{
		updateCurrentColor: actions.updateCurrentColor
	}
)(ColorPalette);
