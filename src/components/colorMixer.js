import React, { Component } from "react";
import { connect } from "react-redux";
import * as colors from "./colors";
import * as actions from "../actions/actions";

class ColorMixer extends Component {
	state = {
		R: 0,
		G: 0,
		B: 255,
		Hue: 240,
		Saturation: 100,
		Lightness: 50,
		mixedColor: `hsl(240, 100%, 50%)`
	};
	changeRed = event => {
		const red = event.target.value;
		this.setState({ R: red });
		this.updateRgb();
	};
	changeGreen = event => {
		const green = event.target.value;
		this.setState({ G: green });
		this.updateRgb();
	};
	changeBlue = event => {
		const blue = event.target.value;
		this.setState({ B: blue });
		this.updateRgb();
	};
	updateRgb = () => {
		this.setState({
			mixedColor: `rgb(${this.state.R}, ${this.state.G}, ${this.state.B})`
		});
		const updatedHsl = this.rgbToHsl(
			this.state.R,
			this.state.G,
			this.state.B
		);
		this.setState({
			Hue: updatedHsl[0],
			Saturation: updatedHsl[1],
			Lightness: updatedHsl[2]
		});
	};
	changeHue = event => {
		const hue = event.target.value;
		this.setState({ Hue: hue });
		this.updateHsl();
	};
	changeSaturation = event => {
		const saturation = event.target.value;
		this.setState({ Saturation: saturation });
		this.updateHsl();
	};
	changeLightness = event => {
		const lightness = event.target.value;
		this.setState({ Lightness: lightness });
		this.updateHsl();
	};
	updateHsl = () => {
		const mixedColor = `hsl(${this.state.Hue}, ${this.state.Saturation}%, ${this.state.Lightness}%)`;
		this.setState({
			mixedColor: mixedColor
		});
		const updatedRgb = this.hslToRgb(
			this.state.Hue,
			this.state.Saturation,
			this.state.Lightness
		);
		this.setState({
			R: updatedRgb[0],
			G: updatedRgb[1],
			B: updatedRgb[2]
		});
	};

	rgbToHsl = (r, g, b) => {
		r /= 255;
		g /= 255;
		b /= 255;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let h, s, l = (max + min) / 2;
		if (max == min) {
			h = s = 0; // achromatic
		} else {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h /= 6;
		}
		return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
	};

	hslToRgb = (hue, saturation, lightness) => {
		saturation = saturation / 100;
		lightness = lightness / 100;
		const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
		let huePrime = hue / 60;
		const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));

		huePrime = Math.floor(huePrime);
		let red;
		let green;
		let blue;

		if (huePrime === 0) {
			red = chroma;
			green = secondComponent;
			blue = 0;
		} else if (huePrime === 1) {
			red = secondComponent;
			green = chroma;
			blue = 0;
		} else if (huePrime === 2) {
			red = 0;
			green = chroma;
			blue = secondComponent;
		} else if (huePrime === 3) {
			red = 0;
			green = secondComponent;
			blue = chroma;
		} else if (huePrime === 4) {
			red = secondComponent;
			green = 0;
			blue = chroma;
		} else if (huePrime === 5) {
			red = chroma;
			green = 0;
			blue = secondComponent;
		}

		const lightnessAdjustment = lightness - chroma / 2;
		red += lightnessAdjustment;
		green += lightnessAdjustment;
		blue += lightnessAdjustment;

		return [
			Math.round(red * 255),
			Math.round(green * 255),
			Math.round(blue * 255)
		];
	};

	componentWillMount() {
		const initialHsl = this.rgbToHsl(
			this.state.R,
			this.state.G,
			this.state.B
		);
		this.setState({ Hue: initialHsl[0] });
		this.setState({ Saturation: initialHsl[1] });
		this.setState({ Lightness: initialHsl[2] });
	}

	render() {
		return (
			<div>
				color mixer
				<div
					style={{
						width: 50,
						height: 50,
						backgroundColor: this.state.mixedColor,
						margin: "auto"
					}}
				/>
				<div>Red: {this.state.R}</div>
				<input
					type="range"
					min="0"
					max="255"
					onInput={this.changeRed}
					onChange={this.changeRed}
					value={this.state.R}
				/>
				<div>Green: {this.state.G}</div>
				<input
					type="range"
					min="0"
					max="255"
					onInput={this.changeGreen}
					onChange={this.changeGreen}
					value={this.state.G}
				/>
				<div>Blue: {this.state.B}</div>
				<input
					type="range"
					min="0"
					max="255"
					onInput={this.changeBlue}
					onChange={this.changeBlue}
					value={this.state.B}
				/>
				<div>Hue: {this.state.Hue}</div>
				<input
					type="range"
					min="0"
					max="360"
					onInput={this.changeHue}
					onChange={this.changeHue}
					value={this.state.Hue}
				/>
				<div>Saturation: {this.state.Saturation}</div>
				<input
					type="range"
					min="0"
					max="100"
					onInput={this.changeSaturation}
					onChange={this.changeSaturation}
					value={this.state.Saturation}
				/>
				<div>Lightness: {this.state.Lightness}</div>
				<input
					type="range"
					min="0"
					max="100"
					onInput={this.changeLightness}
					onChange={this.changeLightness}
					value={this.state.Lightness}
				/>
			</div>
		);
	}
}

export default connect(
	storeState => ({
		brushSize: storeState.brushSize,
		selectedColor: storeState.selectedColor
	}),
	{
		updateBrushSize: actions.updateBrushSize
	}
)(ColorMixer);
