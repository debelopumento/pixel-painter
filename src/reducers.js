import { combineReducers } from "redux";

const resolutionReducer = (
	state = { width: 45, height: 30, cellSize: 10 },
	action
) => {
	switch (action.type) {
		case "UPDATE_FIRST_REDUCER": {
			return action.payload;
		}
		default:
			return state;
	}
};

const currentColorReducer = (state = "white", action) => {
	switch (action.type) {
		case "UPDATE_CURRENT_COLOR": {
			return action.payload;
		}
		default:
			return state;
	}
};

const paintingReducer = (state = null, action) => {
	switch (action.type) {
		case "UPDATE_PAINTING": {
			return action.payload;
		}
		default:
			return state;
	}
};

const currentToolReducer = (state = "brush", action) => {
	switch (action.type) {
		case "UPDATE_TOOL": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	resolution: resolutionReducer,
	currentColor: currentColorReducer,
	painting: paintingReducer,
	currentTool: currentToolReducer
});

export default allReducers;
