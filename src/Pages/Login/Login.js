import React from 'react'
import { Formik, Field, Form } from 'formik'
import api from '../../services/api'

import './Login.scss'

import logo from '../../assets/logo.svg'

const Login = ({ history }) => {
	return (
		<div className='login-container'>
			<Formik
				initialValues={{ username: '' }}
				onSubmit={async ({ username }) => {
					const response = await api.post('/devs', {
						username
					})

					const { _id } = response.data

					history.push(`/dev/${_id}`)
				}}
			>
				{() => (
					<Form>
						<img src={logo} alt='Tindev' />
						<Field
							type='text'
							name='username'
							placeholder='Your github username'
							autoComplete='off'
						/>

						<button type='submit'>Login</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Login
