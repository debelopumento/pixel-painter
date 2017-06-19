import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router>
				<div>
					<Route exact path="/" component={App} />
				</div>
			</Router>
		</div>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
