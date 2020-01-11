import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Main from './Pages/Main/Main'

const Router = () => {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Login} />
			<Route path='/main' component={Main} />
		</BrowserRouter>
	)
}

export default Router
