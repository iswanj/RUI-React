import React from 'react';

class Button extends React.Component {
	clickEventHandler(){
		this.props.clickBtn();
	}

	render() {
		return (
			<button className={`rui-button ${this.props.className}`} onClick={this.clickEventHandler.bind(this)} >{this.props.btnText}</button>
		);
	}
}

Button.propTypes = {
	clickBtn: React.PropTypes.func.isRequired
};

export default Button;