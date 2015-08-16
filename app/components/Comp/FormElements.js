import React from 'react';

class Input extends React.Component {
	constructor(){
		super();
		this.textType = ['text','password','date','number'];
	}
	//Set input value
	getValue(){
		if(this.textType.indexOf(this.props.type) > -1){
			return React.findDOMNode(this.refs.input).value;
		}else if(this.props.type === 'textarea'){
			return React.findDOMNode(this.refs.textarea).value;
		}else if(this.props.type === 'select'){
			return React.findDOMNode(this.refs.select).value;
		}else if(this.props.type === 'multi-select'){
			// send all selected values
			let node = React.findDOMNode(this.refs.multiSelect);
		    let options = [].slice.call(node.querySelectorAll('option'));
		    let selected = options.filter(function (option) {
		        return option.selected;
		    });
		    let selectedValues = selected.map(function (option) {
		        return option.value;
		    });
		    return selectedValues;
		}else {
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
		        <input {...this.props} className={`text ${this.props.className}`} ref="input"/>
		        {this.getDescription()}
		    </div>
		)
	}
	renderTextArea() {
		return (
			<div className="input-group">
		        <label htmlFor={this.props.id} >{this.props.label} {this.getRequiredIcon()}</label>
		        <textarea {...this.props} className={`textarea ${this.props.className}`} ref="textarea"></textarea>
		        {this.getDescription()}
		    </div>
		)
	}
	renderDropdown(){
		return (
			<div className="input-group">
		        <label htmlFor={this.props.id}>{this.props.label} {this.getRequiredIcon()}</label>
		        <select {...this.props} className={`select ${this.props.className}`} ref="select" >
		            {this.props.children}
		        </select>
		    </div>
		)
	}
	renderMultiSelect() {
		return (
			<div className="input-group">
		        <label htmlFor={this.props.id}>{this.props.label} {this.getRequiredIcon()}</label>
		        <select {...this.props} className={`multi-select ${this.props.className}`} ref="multiSelect">
		            {this.props.children}
		        </select>
		    </div>
		)
	}
	render() {
		if(this.textType.indexOf(this.props.type) > -1){
			return this.renderTextInput();
		}else if(this.props.type === 'textarea'){
			return this.renderTextArea();
		}else if(this.props.type === 'select'){
			return this.renderDropdown();
		}else if(this.props.type === 'multi-select') {
			return this.renderMultiSelect();
		}else {
			return (
				<div>Invalid type value</div>
			)
		}
	}
}

Text.propTypes = {
	label: React.PropTypes.string.isRequired,
	id: React.PropTypes.string.isRequired
};


export {Input};