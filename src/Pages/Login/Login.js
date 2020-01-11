import React from 'react'
import { Formik, Field, Form } from 'formik'

import './Login.scss'

import logo from '../../assets/logo.svg'

const Login = () => {
	return (
		<div className='login-container'>
			<Formik
				initialValues={{ username: '' }}
				onSubmit={(values, actions) => {
					console.log(values)

					actions.resetForm()
				}}
			>
				{() => (
					<Form>
						<img src={logo} alt='Tindev' />
						<Field
							type='text'
							name='username'
							placeholder='Your github username'
							autocomplete='off'
						/>

						<button type='submit'>Login</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Login
