import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Canvas extends Component {
	color = event => {
		const clickedRowIndex = Number(event.target.id.slice(4, 6));
		const clickedColumnIndex = Number(event.target.id.slice(13, 15));
		this.props.paint(
			clickedRowIndex,
			clickedColumnIndex,
			this.props.currentColor
		);
	};

	componentWillMount() {
		this.props.initializePainting();
		this.rowElement = [...Array(this.props.resolution.width).keys()];
		this.rowNumber = [...Array(this.props.resolution.height).keys()];
	}

	render() {
		const painting = this.props.painting;

		if (painting !== null) {
			const cellSize = this.props.resolution.cellSize;
			let rowIndex;
			const grid = Object.keys(this.rowNumber).map(rowIndex => {
				const twoDigitRowIndex = rowIndex < 10
					? `0${rowIndex}`
					: rowIndex.toString();
				const row = Object.keys(this.rowElement).map(columnIndex => {
					const twoDigitColumnIndex = columnIndex < 10
						? `0${columnIndex}`
						: columnIndex.toString();
					const id = `row-${twoDigitRowIndex}column-${twoDigitColumnIndex}`;
					const localColor = painting[rowIndex][columnIndex];

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
		initializePainting: actions.initializePainting,
		paint: actions.paint
	}
)(Canvas);
