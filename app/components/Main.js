import React from 'react';
import { RouteHandler } from 'react-router';
import './less/style.less';

class Main extends React.Component{
	render() {
		return (
			<div>
				<div className="sidebar col-lg-2 col-md-3">
					<ul>
						<li><a href="#/">Color</a></li>
						<li><a href="#/typography">Typography</a></li>
						<li><a href="#/buttons">Buttons</a></li>
						<li><a href="#/linkbutons">Link Buttons</a></li>
						<li><a href="#/badges">Badges</a></li>
						<li><a href="#/forms">Forms</a></li>
						<li><a href="#/cards">Cards</a></li>
						<li><a href="#/avatars">Avatars</a></li>
						<li><a href="#/messages">Messages</a></li>
						<li><a href="#/#/dialog">Dialog</a></li>
						<li><a href="#/tabs">Tabs</a></li>
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