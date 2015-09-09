import Radium from 'radium';
import React from 'react';
// Button styles
import styles from './styles/button.js';

//*** Normal Button Component
class Button extends React.Component {
	clickEventHandler(){
		this.props.clickBtn();
	}

	render() {
		const {size, type, Label, ...props} = this.props;
		return (
			<button style={[
          styles.base,
					styles[size],
          styles[type],
        ]}
				onClick={this.clickEventHandler.bind(this)}
				{...props}
			>
				{Label}
			</button>
		);
	}
}

Button.propTypes = {
	clickBtn: React.PropTypes.func.isRequired
};

//*** Link Button Component
class LinkButton extends React.Component {
	render() {
		const {size, type, Label, ...props} = this.props;
		return (
			<a style={[
          styles.base,
					styles[size],
          styles[type],
        ]}
				{...props}
			>
				{Label}
			</a>
		);
	}
}

LinkButton.propTypes = {
	link: React.PropTypes.string.isRequired
};

Button = Radium(Button);
LinkButton = Radium(LinkButton);
export {Button, LinkButton};
