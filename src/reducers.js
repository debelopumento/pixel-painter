import { combineReducers } from "redux";

const resolutionReducer = (state = { width: 15, height: 10 }, action) => {
	switch (action.type) {
		case "UPDATE_FIRST_REDUCER": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	resolution: resolutionReducer
});

export default allReducers;
