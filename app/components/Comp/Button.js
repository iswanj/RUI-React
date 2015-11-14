import React from 'react';
import { Link } from 'react-router';
import Component from './Base';
import mergeObjects from './m';

// Button styles
import styles from './styles/button.js';

/**
 *
 * USAGE:
 * <Button  />
 *
 */
class Button extends Component {
	constructor() {
		super();
		this.state = {
			hovered: false,
			mouseDown: false
		}

		this.tagName = 'button';

		this._bind('handleMouseEnter', 'handleMouseDown');
	}

	handleMouseEnter() {
		this.setState({
			hovered: !this.state.hovered,
			mouseDown: false
		});
	}

	handleMouseDown() {
		this.setState({ mouseDown: !this.state.mouseDown });
	}

	render() {
		if(typeof this.props.href !== 'undefined') {
			this.tagName = 'a';
		}

		const {size, type, label, ...rest} = this.props;
		let { hovered, mouseDown } = this.state;
		let buttonStyles = mergeObjects(
			styles.base,
			styles[size],
			styles[type],
			hovered && styles[`${type}Hovered`],
			mouseDown && styles[`${type}Clicked`]
		);

		return (
			<this.tagName
				style={buttonStyles}
				onMouseEnter = {this.handleMouseEnter}
				onMouseLeave = {this.handleMouseEnter}
				onMouseDown = {this.handleMouseDown}
				onMouseUp = {this.handleMouseDown}
				{...rest}
			>
				{label}
			</this.tagName>
		)
	}
}

Button.propTypes = {
	onClick: React.PropTypes.func
};

Button.defaultProps = {
	label: 'Button',
	type: 'normal',
	size: 'normalSize'
}

export default Button;
