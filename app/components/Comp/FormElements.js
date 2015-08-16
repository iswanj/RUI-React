import React from 'react';

class Input extends React.Component {
	//Set input value
	getValue(){
		switch(this.props.type){
			case 'text':
				return React.findDOMNode(this.refs.input).value;
				break;
			case 'textarea':
				return React.findDOMNode(this.refs.textarea).value;
			default:
				return 'invalid input type';
		}
		
	}

	//get input description
	getDescription() {
		if(this.props.description != ''){
			return this.description = <div className="description">{this.props.description}</div>;
		}
	}

	getRequiredIcon() {
		if(this.props.required == true){
			return this.req_star =  <i className="material-icons">star</i>;
		}
	}

	renderTextInput() {
		
		return (
			<div className="input-group">
		        <label htmlFor={this.props.id}>{this.props.label} {this.getRequiredIcon()}</label>
		        <input {...this.props} className={`text ${this.props.className}`} type="text" ref="input"/>
		        {this.getDescription()}
		    </div>
		)
	}
	renderTextArea() {
		return (
			<div className="input-group">
		        <label htmlFor={this.props.id} >{this.props.label} {this.getRequiredIcon()}</label>
		        <textarea {...this.props} className={`textarea ${this.props.className}`} name="comment" id="textarea" placeholder="Your comment here..." ref="textarea"></textarea>
		        {this.getDescription()}
		    </div>
		)
	}
	render() {
		if(this.props.type == 'text'){
			return this.renderTextInput();
		}else if(this.props.type == 'textarea'){
			return this.renderTextArea();
		}
	}
}

Text.propTypes = {
	label: React.PropTypes.string.isRequired,
	id: React.PropTypes.string.isRequired
};


export {Input};