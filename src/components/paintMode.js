import React, { Component } from "react";
import { connect } from "react-redux";
import colors from "./colors";
import * as actions from "../actions/actions";

class PaintMode extends Component {
	flood = () => {
		this.props.floodColor();
	};
	render() {
		return (
			<div>
				paint mode
				<input type="submit" value="flood" onClick={this.flood} />
			</div>
		);
	}
}

export default connect(
	storeState => ({
		resolution: storeState.resolution
	}),
	{
		floodColor: actions.floodColor
	}
)(PaintMode);
