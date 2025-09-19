import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
	// const [loginInfo, setLoginInfo] = useState({
	// 	email: '',
	// 	password: ''
	// })

	// const [isEdited, setIsEdited] = useState({
	// 	email: false,
	// 	password: false
	// })
	const {
		value: emailValue,
		handleChange: handleEmailChange,
		handleBlur: handleEmailBlur,
		hasError: hasEmailError
	} = useInput('', isEmail)

	const {
		value: passwordValue,
		handleChange: handlePasswordChange,
		handleBlur: handlePasswordBlur,
		hasError: hasPasswordError
	} = useInput('', (value) => hasMinLength(value, 6))

	// const emailIsInvalid = isEdited.email && !isEmail(loginInfo.email);

	function handleSubmit(event) {
		event.preventDefault()
		console.log(emailValue, passwordValue)
	}

	// function handleChange(id, newValue) {
	// 	setLoginInfo((prevState) => ({ ...prevState, [id]: newValue }))
	// 	setIsEdited((prevState) => ({ ...prevState, [id]: false }))
	// }

	// function handleBlur(id) {
	// 	setIsEdited((prevState) => ({
	// 		...prevState,
	// 		[id]: true
	// 	}))
	// }

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label='Email'
					id='email'
					type="email"
					name="email"
					onBlur={handleEmailBlur}
					onChange={handleEmailChange}
					value={emailValue}
					error={hasEmailError && 'Please enter a valid email address'}
				/>

				{/* <div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onBlur={() => handleBlur('email')}
						onChange={(event) => handleChange('email', event.target.value)}
						value={loginInfo.email}
					/>
					<div className="control-error">
						{emailIsInvalid && <p>Please enter a valid email address</p>}
					</div>
				</div> */}

				<Input
					label="password"
					id="password"
					type="password"
					name="password"
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					value={passwordValue}
					error={hasPasswordError && 'Please enter a valid password'}
				/>
				{/* <div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(event) => handleChange('password', event.target.value)}
						value={loginInfo.password}
					/>
				</div> */}
			</div>

			<p className="form-actions">
				<button className="button button-flat" type="reset">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
