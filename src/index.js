import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<h1>Form with Hook</h1>
			<Form />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
