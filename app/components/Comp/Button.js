import Radium from 'radium';
import React from 'react';
// Button styles
import styles from './styles/button.js';

//*** Normal Button Component
@Radium
class Button extends React.Component {
	clickEventHandler(){
		this.props.clickBtn();
	}

	render() {
		const {size, type, label, ...props} = this.props;
		return (
			<button style={[
          styles.base,
					styles[size],
          styles[type],
        ]}
				onClick={this.clickEventHandler.bind(this)}
				{...props}
			>
				{label}
			</button>
		);
	}
}

Button.propTypes = {
	clickBtn: React.PropTypes.func.isRequired
};

//*** Link Button Component
@Radium
class LinkButton extends React.Component {
	render() {
		const {size, type, label, ...props} = this.props;
		return (
			<a style={[
          styles.base,
					styles[size],
          styles[type],
        ]}
				{...props}
			>
				{label}
			</a>
		);
	}
}

LinkButton.propTypes = {
	link: React.PropTypes.string.isRequired
};
export default Button;
export {LinkButton};
