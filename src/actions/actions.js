import store from "../store";

export const updateCurrentColor = color => ({
	type: "UPDATE_CURRENT_COLOR",
	payload: color
});

export const initializePainting = () => dispatch => {
	const width = store.getState().resolution.width;
	const height = store.getState().resolution.height;
	let row = [];
	for (let i = 0; i < width; i++) {
		row.push("#ddd");
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
