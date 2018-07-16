import {Redirect, Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
import Main from '../components/Main'
import Scroll from '../components/ScrollBar'

const Routers = () => {
	return (
		<Routers history={history}>
			<Switch>
				{/* these are good */}
				<Route exact path='/' component={Main}/>
				<Route exact path='/scroll' component={Scroll}/>
			</Switch>
		</Routers>
	)
}

export default Routers


