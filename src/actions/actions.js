import store from "../store";

export const updateCurrentColor = color => ({
	type: "UPDATE_CURRENT_COLOR",
	payload: color
});
