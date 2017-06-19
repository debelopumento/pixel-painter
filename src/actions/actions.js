import store from "../store";
import * as colors from "../components/colors";

export const updateCurrentColor = color => ({
	type: "UPDATE_CURRENT_COLOR",
	payload: color
});

export const initializePainting = () => dispatch => {
	const width = store.getState().resolution.width;
	const height = store.getState().resolution.height;
	let row = [];
	for (let i = 0; i < width; i++) {
		row.push(colors.defaultColor);
	}
	let painting = [];
	for (let j = 0; j < height; j++) {
		painting.push(row);
	}
	dispatch({
		type: "UPDATE_PAINTING",
		payload: painting
	});
};

export const floodColor = () => dispatch => {
	const selectedColor = store.getState().selectedColor.currentColor;
	const width = store.getState().resolution.width;
	const height = store.getState().resolution.height;
	let row = [];
	for (let i = 0; i < width; i++) {
		row.push(selectedColor);
	}
	let painting = [];
	for (let j = 0; j < height; j++) {
		painting.push(row);
	}
	dispatch({
		type: "UPDATE_PAINTING",
		payload: painting
	});
};

export const paint = (row, column, color) => dispatch => {
	const oldPainting = store.getState().painting;
	const width = store.getState().resolution.width;
	const height = store.getState().resolution.height;
	let newPainting = [];
	for (let i = 0; i < height; i++) {
		let newPaintingRow = [];
		for (let j = 0; j < width; j++) {
			if (i === row && j === column) {
				newPaintingRow[j] = color;
			} else {
				newPaintingRow[j] = oldPainting[i][j];
			}
		}
		newPainting.push(newPaintingRow);
	}
	dispatch({
		type: "UPDATE_PAINTING",
		payload: newPainting
	});
};

export const switchToEraser = () => dispatch => {
	dispatch({
		type: "UPDATE_LASTSELECTEDCOLOR",
		payload: null
	});
	dispatch({
		type: "UPDATE_TOOL",
		payload: "eraser"
	});
	dispatch(updateCurrentColor(colors.defaultColor));
};
