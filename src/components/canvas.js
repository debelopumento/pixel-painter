import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Canvas extends Component {
	state = {
		activePaint: false
	};
	startPainting = event => {
		const clickedRowIndex = Number(event.target.id.slice(4, 6));
		const clickedColumnIndex = Number(event.target.id.slice(13, 15));
		this.setState({ activePaint: true });
		this.props.paint(
			clickedRowIndex,
			clickedColumnIndex,
			this.props.selectedColor.currentColor
		);
	};
	endPainting = event => {
		this.setState({ activePaint: false });
	};
	handleMouseOver = event => {
		if (this.state.activePaint === true) {
			const clickedRowIndex = Number(event.target.id.slice(4, 6));
			const clickedColumnIndex = Number(event.target.id.slice(13, 15));
			this.props.paint(
				clickedRowIndex,
				clickedColumnIndex,
				this.props.selectedColor.currentColor
			);
		}
	};

	componentWillMount() {
		this.props.initializePainting();
	}

	render() {
		const rowElement = [...Array(this.props.resolution.width).keys()];
		const rowNumber = [...Array(this.props.resolution.height).keys()];
		const painting = this.props.painting;
		if (painting !== null) {
			const cellSize = this.props.resolution.cellSize;
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
					const border = localColor === "#eee"
						? `1px solid lightGrey`
						: `1px solid ${localColor}`;
					return (
						<div
							key={columnIndex}
							id={id}
							style={{
								borderLeft: border,
								borderTop: border,
								width: cellSize,
								height: cellSize,
								backgroundColor: localColor
							}}
							onMouseDown={this.startPainting}
							onMouseUp={this.endPainting}
							onMouseOver={this.handleMouseOver}
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

			const rowWidth = cellSize * this.props.resolution.width;
			console.log(rowWidth, cellSize, this.props.resolution.width);
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
		selectedColor: storeState.selectedColor,
		painting: storeState.painting
	}),
	{
		initializePainting: actions.initializePainting,
		paint: actions.paint
	}
)(Canvas);
