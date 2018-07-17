/**
 * author： KUANGYI
 * Date: 2018/7/9
 * Time: 09:48
 */
import {Component} from 'react'
import withCss from '@/withCss/index'
import FreeScrollBar from 'Components/commons/index'
import styles from './index.less';

let things = ['Clean the room', 'Take out the ice-cream', 'Do the homework', 'Feed the cat', 'Clean the car', 'Go to dinner', 'Clean the cups', 'Throw a party', 'Repeat things above', 'Think about the trip', 'Make up a list', 'Go out with friends', 'Kick neighbor\'s butt'];
let List = things.map((item, key) => {
	return (
		<li key={key}>{item}</li>
	);
});

@withCss(styles)
class Demo extends Component {
	render () {
		return (
			<div className="Root">
				<div className="container">
					<h3>Examples</h3>
					<div className="row">
						<div className="col-md-6">
							<h4>Quick start</h4>
							<div styleName="quick-start">
								<FreeScrollBar start={"top"} browserOffset={"20px"}>
									<div className={styles["inner"]}>{List}{List}{List}{List}{List}{List}{List}</div>
								</FreeScrollBar>
							</div>
						</div>
						<div className="col-md-6">
							<h4>Horizontal</h4>
							<div className={`horizontal ${styles['horizontal']}`} styleName="horizontal">
								<FreeScrollBar start={'bottom right'}>
									<img src="https://placeimg.com/1000/1000/any" className="img-rounded"/>
								</FreeScrollBar>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<h4>Custom styles</h4>
							<div styleName="custom-styles">
								<FreeScrollBar className="example" tracksize="12px">
									<div className="inner">{List}{List}{List}{List}{List}{List}{List}</div>
								</FreeScrollBar>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Demo;