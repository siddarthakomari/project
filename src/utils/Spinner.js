import React from "react";
import { Circles } from "react-loader-spinner";
const Spinner = ({ message, height, width, color, messageColor }) => {
	return (
		<div className="spinner-container">
			<div className="loading-spinner"></div>
		</div>
	);
};

export default Spinner;
