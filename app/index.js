import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main";

import {Redirect, Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

ReactDOM.render((
		<Router history={history}>
			<Switch>
				{/* these are good */}
				<Route exact path='/' component={Main}/>
			</Switch>
		</Router>),
	document.getElementById('app'))