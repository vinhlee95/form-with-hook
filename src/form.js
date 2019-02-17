import React, { useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("");

	const submit = () => {
		alert(firstName);
	};

	return (
		<div>
			<label htmlFor="fist-name">First name</label>
			<input
				value={firstName}
				type="text"
				id="first-name"
				onChange={e => setFirstName(e.target.value)}
			/>

			<button type="submit" onClick={submit}>
				Submit
			</button>
		</div>
	);
}

export default Form;
