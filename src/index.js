import React from "react";
import ReactDOM from "react-dom";
//import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { Container } from "@mui/material";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Header />
				<main>
					<App />
				</main>
				<Footer />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
