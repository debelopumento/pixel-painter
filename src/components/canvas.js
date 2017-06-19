import React, { Component } from "react";
import { connect } from "react-redux";

class Canvas extends Component {
	render() {
		const width = [...Array(this.props.resolution.width).keys()];
		const height = [...Array(this.props.resolution.height).keys()];
		const row = Object.keys(width).map(index => {
			return (
				<div
					key={index}
					style={{
						border: "1px solid black",
						width: 30,
						height: 30
					}}
				/>
			);
		});
		return (
			<div style={{ display: "flex" }}>
				{row}
			</div>
		);
	}
}

export default connect(storeState => ({
	resolution: storeState.resolution
}))(Canvas);
