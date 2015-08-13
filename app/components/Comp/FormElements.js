import React from 'react';

class Text extends React.Component {
	componentDidMount(){
		console.log(this.refs.inputdef.getDOMNode().value);
	}
	getValue(){
		return this.refs.input.getDOMNode().value;
	}
	render() {
		let req_star,description;
		if(this.props.required == true){
			req_star =  <i className="material-icons">star</i>;
		}
		if(this.props.description != ''){
			description = <div className="description">{this.props.description}</div>;
		}
		return (
			<div className="input-group">
		        <label htmlFor={this.props.id}>{this.props.label} {req_star}</label>
		        <input className={`text ${this.props.className}`} type="text" id={this.props.id} name={this.props.id} placeholder={this.props.placeholder} ref="input" defaultValue="Hello!"/>
		        {description}
		    </div>
		)
	}
}

Text.propTypes = {
	label: React.PropTypes.string.isRequired,
	id: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string.isRequired,
	//ref: React.PropTypes.string.isRequired,
	required: React.PropTypes.bool.isRequired,
	description: React.PropTypes.string.isRequired
};

class TextArea extends React.Component {
	render() {
		return (
			<div>
				TextArea
			</div>
		)
	}
}

export {Text, TextArea};