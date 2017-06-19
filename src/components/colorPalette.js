import React, { Component } from "react";
import { connect } from "react-redux";
import colors from "./colors";

class ColorPalette extends Component {
	getColor = event => {
		console.log(event.target.style.backgroundColor);
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
		return (
			<div style={{ display: "flex" }}>
				{colorCollection}
			</div>
		);
	}
}

export default connect(storeState => ({
	resolution: storeState.resolution
}))(ColorPalette);
