import React from 'react';
import {Input} from './Comp/FormElements';

class Form extends React.Component {
	handleChange(){
		let text = this.refs.txt.getValue();
		console.log(text);
	}
	render() {
		return (
			<div>
				<h1>Form</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<h4>Text Input</h4>
					<form className="rui-form">
						<Input type="text"
							className="additional_class"
							label="Default input"
							id="inputdef"
							placeholder="input placeholder"
							required={true}
							description="Your default width input." 
						/>
						<Input type="text"
							className="long-input"
							label="Long input"
							id="inputLong"
							description="Your long width input." 
						/>
						<Input type="text"
							className="medium-input"
							label="Medium input"
							id="inputMedium"
							description="Your medium width input." 
						/>
						<Input type="text"
							className="short-input"
							label="Short input"
							id="inputShort"
							description="Your short width input." 
						/>
						<Input type="text"
							label="Disabled input"
							id="inputDisabled"
							placeholder="Disabled input"
							disabled="disabled"
						/>
						<h3>Textarea</h3>
						<Input type="textarea"
							label="Comment"
							id="inputTextarea"
							placeholder="Disabled input"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;