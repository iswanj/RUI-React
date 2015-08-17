import React from 'react';
import Input from './Comp/FormElements';
import Badge from './Comp/Badge';
import CodeBlock from './CodeBlock';

class Form extends React.Component {
	constructor(){
		super();
		this.state = {
			inputValue: ''
		}
	}
	handleChange(){
		this.setState({
	      inputValue: this.refs.input.getValue()
	    });
	}
	render() {
		let moduleUsage = 
			'import React from \'react\';\n' +
			'//Import React Form \n' +
			'import Input from \'./Comp/FormElements\';\n',
			firstExampleJs = 
				'constructor(){\n' +
				'	super();\n' +
				'	this.state = {\n' +
				'		inputValue: \'\'\n' +
				'	}\n' +
				'}\n' +
				'handleChange(){\n' +
				'	this.setState({\n' +
				'		inputValue: this.refs.input.getValue()\n' +
				'	});\n' +
				'}\n',
			firstExampleHtml = 
				'<form className="rui-form">\n' +
				'	<Input type="text"\n' +
				'		className="additional_class"\n' +
				'		label="Default input"\n' +
				'		id="inputdef"\n' +
				'		placeholder="Type someting"\n' +
				'		ref="input"\n' +
				'		description="Your default width input."\n' +
				'		onChange={this.handleChange.bind(this)}\n' +
				'	/>\n' +
				'</form>',
			inputElements = 
				'<Input type="text"\n' +
				'	className="additional_class"\n' +
				'	label="Default input"\n' +
				'	id="inputdef"\n' +
				'	placeholder="input placeholder"\n' +
				'	required={true}\n' +
				'	description="Your default width input." \n' +
				'/>\n' +
				'<Input type="text"\n' +
				'	className="long-input"\n' +
				'	label="Long input"\n' +
				'	id="inputLong"\n' +
				'	description="Your long width input."\n' +
				'/>\n' +
				'<Input type="text"\n' +
				'	className="medium-input"\n' +
				'	label="Medium input"\n' +
				'	id="inputMedium"\n' +
				'	description="Your medium width input."\n' + 
				'/>\n' +
				'<Input type="text"\n' +
				'	className="short-input"\n' +
				'	label="Short input"\n' +
				'	id="inputShort"\n' +
				'	description="Your short width input."\n' +
				'/>\n' +
				'<Input type="text"\n' +
				'	label="Disabled input"\n' +
				'	id="inputDisabled"\n' +
				'	placeholder="Disabled input"\n' +
				'	disabled="disabled"\n' +
				'/>',
			textAreaCode = 
				'<Input type="textarea"\n' +
				'	label="Comment"\n' +
				'	id="inputTextarea"\n' +
				'	placeholder="Your comment here..."\n' +
				'/>',
			selectCode = 
				'<Input type="select"\n' +
				'	label="Dropdown"\n' +
				'	id="inputDropdown"\n' +
				'>\n' +
				'	<option value="">Select</option>\n' +
				'	<option value="opt1">Option 1</option>\n' +
				'	<option value="opt2">Option 2</option>\n' +
				'	<optgroup label="Group 1">\n' +
				'		<option value="opts1">Option one</option>\n' +
				'		<option value="opts2">Option two</option>\n' +
				'	</optgroup>\n' +
				'	<option value="opt3">Option 3</option>\n' +
				'	<option value="opt4">Option 4</option>\n' +
				'</Input>\n' +
				'\n' +
				'<Input type="multi-select"\n' +
				'	label="Multi Select"\n' +
				'	id="inputDropdown"\n' +
				'	size="4"\n' +
				'	multiple="multiple"\n' +
				'>\n' +
				'	<option value="opt1">option one</option>\n' +
				'	<option value="opt2">option two</option>\n' +
				'	<option value="opt3">option three</option>\n' +
				'	<option value="opt4">option four</option>\n' +
				'	<option value="opt5">option five</option>\n' +
				'	<option value="opt6">option six</option>\n' +
				'</Input>',
			radioNcheckbox = 
				'<Input type="radio"\n' +
				'	label="Save as a blog post"\n' +
				'	defaultChecked="checked"\n' +
				'	name="radioButtons"\n' +
				'	id="radioButtons"\n' +
				'/>\n' +
				'\n' +
				'<Input type="checkbox"\n' +
				'	label="Receive email"\n' +
				'	defaultChecked="checked"\n' +
				'	id="checkBoxOne"\n' +
				'/>',
			fileuploader = 
				'<Input type="file"\n' +
				'	label="Upload file"\n' +
				'	id="fileUpload"\n' +
				'	multiple="multiple"\n' +
				'/>';
		return (
			<div>
				<h1>Form</h1>
				<p>Forms are used to collect user inputs.</p>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<form className="rui-form">
						<Input type="text"
							className="additional_class"
							label="Default input"
							id="inputdef"
							placeholder="Type someting"
							ref="input"
							description="Your default width input."
							onChange={this.handleChange.bind(this)}
						/>
					</form>
					<p><strong>Input Value: </strong> {this.state.inputValue}</p>
				</div>
				<div className="example-code">
					<CodeBlock>
						{firstExampleJs}
					</CodeBlock>
					<CodeBlock>
						{firstExampleHtml}
					</CodeBlock>
				</div>
				<div className="example">
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
					</form>
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{inputElements}
					</CodeBlock>
				</div>
				<div className="example">
					<form className="rui-form">
						<h4>Textarea</h4>
						<Input type="textarea"
							label="Comment"
							id="inputTextarea"
							placeholder="Your comment here..."
						/>
					</form>
				</div>
				<div className="example-code">
					<CodeBlock>
						{textAreaCode}
					</CodeBlock>
				</div>
				<div className="example">
					<form className="rui-form">
						<h4>Dropdown and multi select</h4>
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
					</form>
				</div>
				<div className="example-code">
					<CodeBlock>
						{selectCode}
					</CodeBlock>
				</div>
				<div className="example">
					<form className="rui-form">
						<h4>Radio buttons</h4>
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
						<h4>Checkboxes</h4>
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
				<div className="example-code">
					<CodeBlock>
						{radioNcheckbox}
					</CodeBlock>
				</div>
				<div className="example">
					<form className="rui-form">
					    <h4>File upload</h4>
					    <Input type="file"
					    	label="Upload file"
					    	id="fileUpload"
					    	multiple="multiple"
					    />
					</form>
				</div>
				<div className="example-code">
					<CodeBlock>
						{fileuploader}
					</CodeBlock>
				</div>
			</div>
		);
	}
}

export default Form;