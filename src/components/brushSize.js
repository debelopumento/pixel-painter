import React, { Component } from "react";
import { connect } from "react-redux";
import * as colors from "./colors";
import * as actions from "../actions/actions";

const brushSizes = [1, 3, 5];
class BrushSize extends Component {
	updateBrushSize = event => {
		const brushSize = Number(event.target.id);
		this.props.updateBrushSize(brushSize);
	};
	render() {
		const brushSizeSelecter = Object.keys(brushSizes).map(index => {
			const localBrushSize = brushSizes[index] * 10;
			const opacity = brushSizes[index] === this.props.brushSize
				? 2
				: 0.5;
			return (
				<div
					key={index}
					style={{
						width: localBrushSize + 20
					}}
				>
					<div
						id={brushSizes[index]}
						style={{
							backgroundColor: "black",
							width: localBrushSize,
							height: localBrushSize,
							margin: "auto",
							opacity: opacity
						}}
						onClick={this.updateBrushSize}
					/>
				</div>
			);
		});
		return (
			<div
				style={{
					display: "flex",
					width: 170,
					margin: "auto",
					marginTop: 15
				}}
			>
				{brushSizeSelecter}
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
)(BrushSize);
