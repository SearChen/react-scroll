import {Redirect, Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
import Main from '../components/Main'

const Routers = () => {
	return (
		<Routers history={history}>
			<Switch>
				{/* these are good */}
				<Route exact path='/' component={Main}/>
			</Switch>
		</Routers>
	)
}

export default Routers


