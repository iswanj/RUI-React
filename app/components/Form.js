import React from 'react';
import {Input} from './Comp/FormElements';

class Form extends React.Component {
	handleChange(e){
		e.preventDefault();
		let text1 = this.refs.check1.getValue();
		let text2 = this.refs.check2.getValue();
		let text3 = this.refs.check3.getValue();
		console.log(text1 +' - '+ text2 +' - '+ text3);
	}
	render() {
		return (
			<div>
				<h1>Form</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<h4>Text Input</h4>
					<form className="rui-form" onSubmit={this.handleChange.bind(this)}>
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
							placeholder="Your comment here..."
						/>
						<h3>Dropdown and multi select</h3>
						<Input type="select"
							label="Dropdown"
							id="inputDropdown"
						>
							<option value="">Select</option>
				            <option value="opt1">Option 1</option>
				            <option value="opt2">Option 2</option>
				            <optgroup label="Group 1">
				                <option value="opts1">Option one</option>
				                <option value="opts2">Option two</option>
				            </optgroup>
				            <option value="opt3">Option 3</option>
				            <option value="opt4">Option 4</option>
						</Input>
						<Input type="multi-select"
							label="Multi Select"
							id="inputDropdown"
							size="4"
							multiple="multiple"
						>
							<option value="opt1">option one</option>
				            <option value="opt2">option two</option>
				            <option value="opt3">option three</option>
				            <option value="opt4">option four</option>
				            <option value="opt5">option five</option>
				            <option value="opt6">option six</option>
						</Input>
						<h3>Radio buttons</h3>
						<fieldset className="group">
							<legend><span>Radio buttons</span></legend>
							<Input type="radio"
								label="Save as a blog post"
								defaultChecked="checked"
								name="radioButtons"
								id="radioButtons"
							/>
							<Input type="radio"
								label="Save as a page"
								name="radioButtons"
								id="radioButtonTwo"
							/>
							<Input type="radio"
								label="Save to your drafts"
								name="radioButtons"
								id="radioButtonThree"
							/>
						</fieldset>
						<h3>Checkboxes</h3>
						<fieldset className="group">
					        <legend><span>Checkboxes</span></legend>
					        <Input type="checkbox"
								label="Receive email"
								id="checkBoxOne"
							/>
							<Input type="checkbox"
								label="Receive push notification"
								id="checkBoxTwo"
							/>
							<Input type="checkbox"
								label="Receive in-app notification"
								id="checkBoxThree"
							/>
					    </fieldset>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;