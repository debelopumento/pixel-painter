import React, { Component } from "react";
import { connect } from "react-redux";

class Canvas extends Component {
	color = event => {
		const rowId = event.target.id.slice(7, 9);
		console.log(rowId);
	};
	render() {
		const cellSize = this.props.resolution.cellSize;
		const rowElement = [...Array(this.props.resolution.width).keys()];
		const rowNumber = [...Array(this.props.resolution.height).keys()];
		const row = Object.keys(rowElement).map(index => {
			const id = `column-${index}`;
			return (
				<div
					key={index}
					id={id}
					style={{
						border: "1px solid black",
						width: cellSize,
						height: cellSize,
						backgroundColor: "#ddd"
					}}
					onClick={this.color}
				/>
			);
		});
		const grid = Object.keys(rowNumber).map(index => {
			const id = `row-${index}`;
			return (
				<div
					key={index}
					id={id}
					style={{
						width: rowWidth,
						display: "flex",
						margin: "auto"
					}}
				>
					{row}
				</div>
			);
		});

		const rowWidth = cellSize * this.props.resolution.width + 10;
		return (
			<div style={{ width: rowWidth, margin: "auto" }}>
				{grid}
			</div>
		);
	}
}

export default connect(storeState => ({
	resolution: storeState.resolution
}))(Canvas);
