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

const allReducers = combineReducers({
	resolution: resolutionReducer,
	currentColor: currentColorReducer
});

export default allReducers;
