import React, { Component } from "react";
import { connect } from "react-redux";
class SelectedColor extends Component {
	render() {
		return (
			<div>

				<div
					style={{
						width: 50,
						height: 50,
						borderRadius: "3%",
						border: "1px solid lightGrey",
						backgroundColor: this.props.currentColor,
						margin: "auto"
					}}
				/>
			</div>
		);
	}
}

export default connect(storeState => ({
	currentColor: storeState.currentColor
}))(SelectedColor);
