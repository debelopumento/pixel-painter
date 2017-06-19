import React, { Component } from "react";
import { connect } from "react-redux";

class Canvas extends Component {
	color = event => {
		const position = event.target.id;
		const clickedRowIndex = event.target.id.slice(4, 6);
		const clickedColumnIndex = event.target.id.slice(13, 15);
		console.log(clickedRowIndex, clickedColumnIndex);
	};
	render() {
		const cellSize = this.props.resolution.cellSize;
		const rowElement = [...Array(this.props.resolution.width).keys()];
		const rowNumber = [...Array(this.props.resolution.height).keys()];
		let rowIndex;

		const grid = Object.keys(rowNumber).map(index => {
			rowIndex = index < 10 ? `0${index}` : index.toString();
			const row = Object.keys(rowElement).map(index => {
				const columnIndex = index < 10 ? `0${index}` : index.toString();
				const id = `row-${rowIndex}column-${columnIndex}`;
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
			return (
				<div
					key={index}
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
