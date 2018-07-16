import {Component} from 'react';
import {Link } from "react-router-dom";

class Main extends Component{
	render () {
		return (
			<div>
				<Link to="/scroll">测试DEMO</Link>
			</div>
		)
	}
}
export default Main;