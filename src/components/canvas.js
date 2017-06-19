import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Canvas extends Component {
	color = event => {
		const position = event.target.id;
		const clickedRowIndex = event.target.id.slice(4, 6);
		const clickedColumnIndex = event.target.id.slice(13, 15);
		console.log(clickedRowIndex, clickedColumnIndex);
	};

	componentWillMount() {
		this.props.initializePainting();
	}

	render() {
		if (this.props.painting !== null) {
			const cellSize = this.props.resolution.cellSize;
			const rowElement = [...Array(this.props.resolution.width).keys()];
			const rowNumber = [...Array(this.props.resolution.height).keys()];
			const painting = this.props.painting;
			let rowIndex;

			const grid = Object.keys(rowNumber).map(rowIndex => {
				const twoDigitRowIndex = rowIndex < 10
					? `0${rowIndex}`
					: rowIndex.toString();
				const row = Object.keys(rowElement).map(columnIndex => {
					const twoDigitColumnIndex = columnIndex < 10
						? `0${columnIndex}`
						: columnIndex.toString();
					const id = `row-${twoDigitRowIndex}column-${twoDigitColumnIndex}`;
					const localColor = painting[rowIndex][columnIndex];
					//console.log(painting[1]);

					return (
						<div
							key={columnIndex}
							id={id}
							style={{
								border: "1px solid black",
								width: cellSize,
								height: cellSize,
								backgroundColor: localColor
							}}
							onClick={this.color}
						/>
					);
				});
				return (
					<div
						key={rowIndex}
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
		return <div />;
	}
}

export default connect(
	storeState => ({
		resolution: storeState.resolution,
		currentColor: storeState.currentColor,
		painting: storeState.painting
	}),
	{
		initializePainting: actions.initializePainting
	}
)(Canvas);
