import React, { useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const submit = e => {
		e.preventDefault();
		console.log(firstName, lastName, email);
	};

	return (
		<form>
			<label htmlFor="fist-name">
				First name
			</label>
			<input
				value={firstName}
				type="text"
				id="first-name"
				onChange={e =>
					setFirstName(e.target.value)
				}
				required
			/>

			<label htmlFor="last-name">Last name</label>
			<input
				value={lastName}
				type="text"
				id="last-name"
				onChange={e =>
					setLastName(e.target.value)
				}
				required
			/>

			<label htmlFor="email">Email</label>
			<input
				value={email}
				type="email"
				id="email"
				onChange={e => setEmail(e.target.value)}
				required
			/>

			<button type="submit" onClick={submit}>
				Submit
			</button>
		</form>
	);
}

export default Form;
