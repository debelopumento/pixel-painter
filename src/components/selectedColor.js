import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedColor extends Component {
	componentWillMount() {}
	render() {
		console.log(this.props.selectedColor);

		return (
			<div>
				{this.props.selectedColor.currentColor}
				<div
					style={{
						width: 50,
						height: 50,
						borderRadius: "3%",
						border: "1px solid lightGrey",
						backgroundColor: this.props.selectedColor.currentColor,
						margin: "auto"
					}}
				/>
			</div>
		);
	}
}

export default connect(storeState => ({
	selectedColor: storeState.selectedColor
}))(SelectedColor);
