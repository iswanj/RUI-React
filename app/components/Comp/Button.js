import React from 'react';
import {Link} from 'react-router';
import mergeObjects from './m';

// Button styles
import styles from './styles/button.js';

//*** Normal Button Component
class Button extends React.Component {
	constructor() {
		super();
		this.state = {
			hovered: false,
			mouseDown: false
		}
	}

	handleMouseEnter() {
		this.setState({ hovered: !this.state.hovered });
		this.setState({ mouseDown: false });
	}

	handleMouseDown() {
		this.setState({ mouseDown: !this.state.mouseDown });
	}

	renderButton() {
		const {size, type, label, ...props} = this.props;
		let buttonStyle = mergeObjects(
			styles.base,
			(size === undefined) ? styles.normalSize : styles[size],
			styles[type],
			this.state.hovered && styles[`${type}Hovered`],
			this.state.mouseDown && styles[`${type}Clicked`],
		),
		handleMouseEnter = () => { this.handleMouseEnter(); },
		handleMouseDown = () => { this.handleMouseDown(); };
		return (
			<button
				style={buttonStyle}
				onClick={this.props.onClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseEnter}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseDown}
				{...props}
			>
				{label}
			</button>
		);
	}

	renderRouteLink() {
		const {size, type, label, href, ...props} = this.props;
		let buttonStyle = [
			styles.base,
			(size != undefined) ? styles.normal : styles[size],
			styles[type],
		];
		return (
			<Link
				style={buttonStyle}
				to={href}
				{...props}
			>
				{label}
			</Link>
		);
	}

	renderLink() {
		const {size, type, label, href, target, ...props} = this.props;
		let buttonStyle = [
			styles.base,
			(size != undefined) ? styles.normal : styles[size],
			styles[type],
		];
		return (
			<a
				style={buttonStyle}
				href={href}
				target={target}
				{...props}
			>
				{label}
			</a>
		);
	}

	render() {
		if(this.props.href == undefined) {
			return this.renderButton();
		} else if(this.props.target != undefined) {
			return this.renderRouteLink();
		} else {
			return this.renderLink();
		}
	}
}

Button.propTypes = {
	clickBtn: React.PropTypes.func
};


export default Button;
