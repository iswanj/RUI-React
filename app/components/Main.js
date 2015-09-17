import React from 'react';
import { Link } from 'react-router';
import IndexLink from 'react-router/lib/IndexLink';
import Badge from './Comp/Badge';
import './less/style.less';

class Main extends React.Component{
	render() {
		return (
			<div>
				<div className="sidebar col-lg-2 col-md-3">
					<ul>
						<li><IndexLink to="/" activeClassName="active">Color</IndexLink></li>
						<li><Link to={`/typography`} activeClassName="active">Typography</Link></li>
						<li><Link to={`/buttons`} activeClassName="active">Buttons</Link></li>
						<li><Link to={`/linkbutons`} activeClassName="active">Link Buttons</Link></li>
						<li><Link to={`/badges`} activeClassName="active">Badges</Link> <Badge className="rui-badges-warning-o" label="experiment" /></li>
						<li><Link to={`/dialog`} activeClassName="active">Dialog</Link></li>
						<li><Link to={`/messages`} activeClassName="active">Messages</Link></li>
						<li><Link to={`/form`} activeClassName="active">Form</Link></li>
						<li><Link to={`/cards`} activeClassName="active">Cards</Link></li>
						<li><Link to={`/avatars`} activeClassName="active">Avatars</Link></li>
					</ul>
				</div>
				<div className="main col-lg-10 col-md-9">
					{React.cloneElement(this.props.children, {...this.props})}
				</div>
			</div>
		)
	}
};

export default Main;
