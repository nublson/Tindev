import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'

const Login = () => {
	return (
		<div className="login-container">
			<form>
				<img src={logo} alt="tindev" />
				<input placeholder="Enter your Github username" />
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login
