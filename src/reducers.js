import { combineReducers } from "redux";

const firstReducer = (state = null, action) => {
	switch (action.type) {
		case "UPDATE_FIRST_REDUCER": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	firstProp: firstReducer
});

export default allReducers;
