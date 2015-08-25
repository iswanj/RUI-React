import React from 'react';

//*** Normal Button Component
class Button extends React.Component {
	clickEventHandler(){
		this.props.clickBtn();
	}

	render() {
		let btnType = '', btnSize = '';
		if(this.props.type){
			btnType = `rui-button-${this.props.type}`;
		}
		if(this.props.size){
			btnSize = `button-${this.props.size}`;
		}
		return (
			<button {...this.props} className={`rui-button ${btnType} ${btnSize} ${this.props.className}`} onClick={this.clickEventHandler.bind(this)} >{this.props.btnText}</button>
		);
	}
}

Button.propTypes = {
	clickBtn: React.PropTypes.func.isRequired
};


//*** Link Button Component
class LinkButton extends React.Component {
	render() {
		return (
			<a className={`rui-button ${this.props.className}`} href={this.props.link} target={this.props.target} >{this.props.btnText}</a>
		);
	}
}

LinkButton.propTypes = {
	link: React.PropTypes.string.isRequired
};

export {Button, LinkButton};
