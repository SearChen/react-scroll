/**
 * author： KUANGYI
 * Date: 2018/7/9
 * Time: 09:48
 */
import {Component} from 'react'
import CSSModules from 'react-css-modules'
import FreeScrollBar from '../commons/index'
import styles from './index.less';

let things = ['Clean the room', 'Take out the ice-cream', 'Do the homework', 'Feed the cat', 'Clean the car', 'Go to dinner', 'Clean the cups', 'Throw a party', 'Repeat things above', 'Think about the trip', 'Make up a list', 'Go out with friends', 'Kick neighbor\'s butt'];
let List = things.map((item, key) => {
	return (
		<li key={key}>{item}</li>
	);
});

@CSSModules(styles)
class Demo extends Component {
	render () {
		return (
			<div className="Root">
				<div className="container">
					<div className="page-header">
						<h1>React Free Scrollbar</h1>
						<p className="lead">A react module for creating customizable scroll area</p>
					</div>
					<a href="https://github.com/fuermosi777/react-free-scrollbar" className="btn btn-lg btn-primary"><span className="fui-github"></span> Documentation on Github</a>

					<h3>Features</h3>
					<ul>
						<li>Vertical and horizontal scrolling</li>
						<li>Auto-hide</li>
						<li>Fully customizable</li>
					</ul>

					<h3>Install</h3>
					<pre>
                        <code>$ npm install --save react-free-scrollbar</code>
                    </pre>
					<h3>Examples</h3>
					<div className="row">
						<div className="col-md-6">
							<h4>Quick start</h4>
							<div className="quick-start">
								<FreeScrollBar start={"top"} browserOffset={"20px"}>
									<div className="inner">{List}{List}{List}{List}{List}{List}{List}</div>
								</FreeScrollBar>
							</div>
						</div>
						<div className="col-md-6">
							<h4>Horizontal</h4>
							<div className="horizontal">
								<FreeScrollBar start={'bottom right'}>
									<img src="https://placeimg.com/1000/1000/any" className="img-rounded"/>
								</FreeScrollBar>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<h4>Custom styles</h4>
							<div className="custom-styles">
								<FreeScrollBar className="example" tracksize="12px">
									<div className="inner">{List}{List}{List}{List}{List}{List}{List}</div>
								</FreeScrollBar>
							</div>
						</div>
						<div className="col-md-6">
							<h4>Auto hide, and the starting position is on the "bottom right".</h4>
							<div className="auto-hide">
								<FreeScrollBar className="example" autohide={true} fixed={true} start={'bottom right'} onScrollbarScroll={() => {console.log('scrolled')}} onScrollbarScrollTimeout={100}>


								</FreeScrollBar>
							</div>
						</div>
					</div>



					<h3></h3>
					<a href="https://github.com/fuermosi777/react-free-scrollbar" className="btn btn-lg btn-primary"><span className="fui-github"></span> Documentation on Github</a>
					<p className="footer">&copy; 2017 Hao Liu</p>
				</div>
			</div>
		)
	}
}
export default Demo;