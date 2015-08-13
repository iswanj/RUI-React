import React from 'react';
import {Text, TextArea} from './Comp/FormElements';

class Form extends React.Component {
	handleSubmit(e){
		e.stopPropagation();
		var username = this.refs.inputdef.getDOMNode().value;
		console.log(username);
	}
	render() {
		return (
			<div>
				<h1>Form</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<h4>Text Input</h4>
					<form className="rui-form" onSubmit={this.handleSubmit.bind(this)}>
						<Text className="additional_class" label="Default input" id="inputdef" placeholder="input placeholder" required={true} description="Your default width input." />
					</form>
				</div>
			</div>
		);
	}
}

export default Form;