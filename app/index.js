import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main";
import Scroll from './components/ScrollBar';

import {Redirect, Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

ReactDOM.render((
		<Router history={history}>
			<Switch>
				{/* these are good */}
				<Route exact path='/' component={Main}/>
				<Route path='/scroll' component={Scroll}/>
			</Switch>
		</Router>),
	document.getElementById('app'))