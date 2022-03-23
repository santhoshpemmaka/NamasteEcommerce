import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {StateProvider} from "./Context/StateProvider";
import ScrollTop from "./ScrollTop";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider>
			<Router>
				<ScrollTop />
				<App />
			</Router>
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
