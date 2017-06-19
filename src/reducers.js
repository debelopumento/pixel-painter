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

const selectedColorReducer = (
	state = { currentColor: "white", lastSelectedColor: "white" },
	action
) => {
	switch (action.type) {
		case "UPDATE_CURRENT_COLOR": {
			//console.log(3);
			state = {
				currentColor: action.payload,
				lastSelectedColor: state.lastSelectedColor
			};
			//console.log(4, state);
			return state;
		}
		case "UPDATE_LASTSELECTEDCOLOR": {
			state.lastSelectedColor = state.currentColor;
			return state;
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
	selectedColor: selectedColorReducer,
	painting: paintingReducer,
	currentTool: currentToolReducer
});

export default allReducers;
