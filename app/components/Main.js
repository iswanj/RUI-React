import React from 'react';
var {Link, RouteHandler} = require('react-router');
import Badge from './Comp/Badge';
import './less/style.less';

class Main extends React.Component{
	render() {
		return (
			<div>
				<div className="sidebar col-lg-2 col-md-3">
					<ul>
						<li><Link to="color">Color</Link></li>
						<li><Link to="typography">Typography</Link></li>
						<li><Link to="buttons">Buttons</Link></li>
						<li><Link to="linkbutons">Link Buttons</Link></li>
						<li><Link to="badges">Badges</Link></li>
						<li><Link to="form">Dialog</Link> <Badge className="rui-badges-warning-o" label="experiment" /> </li>
						<li><Link to="dialog">Messages</Link></li>
						<li><Link to="messages">Form</Link></li>
						<li><Link to="cards">Cards</Link></li>
						<li><Link to="avatars">Avatars</Link></li>
					</ul>
				</div>
				<div className="main col-lg-10 col-md-9">
					<RouteHandler {...this.props} />
				</div>
			</div>
		)
	}
};

export default Main;
