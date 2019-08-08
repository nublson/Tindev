import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login/login'
import Main from './pages/Main/main'

const Routes = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact={true} component={Login} />
			<Route path="/main" component={Main} />
		</BrowserRouter>
	)
}

export default Routes
