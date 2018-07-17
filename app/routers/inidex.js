import {Redirect, Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Main from "Components/Main";
import Scroll from 'Components/ScrollBar';
const history = createHistory()

const Routes = () => (
	<Router history={history}>
		<Switch>
			<Route exact path='/' component={Main}/>
			<Route path='/scroll' component={Scroll}/>
		</Switch>
	</Router>
);

export default Routes;


