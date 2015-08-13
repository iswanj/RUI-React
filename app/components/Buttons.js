import React from 'react';
import {Button} from './Comp/Button';
import CodeBlock from './CodeBlock';

class Buttons extends React.Component {
	handleClick() {
		console.log("...clicked");
	}
	render() {
		let moduleUsage = 
			'import React from \'react\';\n' +
			'//Import Button Component\n'+
			'import {Button} from \'./Comp/Button\';\n',

		usageCode =
			'//Button Normal\n' +
			'<Button className="rui-button-primary" btnText="Save" clickBtn={this.handleClick} />\n' +
			'<Button btnText="Cancel" clickBtn={this.handleClick} /> \n' +
			'<Button className="rui-button-danger" btnText="Delete" clickBtn={this.handleClick} />\n' +
			'\n' +
			'//Button Small\n' +
			'<Button className="rui-button-primary rui-button-sm" btnText="Save" clickBtn={this.handleClick} />\n' +
			'<Button className="rui-button-sm" btnText="Cancel" clickBtn={this.handleClick} /> \n' +
			'<Button className="rui-button-danger rui-button-sm" btnText="Delete" clickBtn={this.handleClick} />\n',
		borderButton = 
			'//Border only buttons\n' +
			'<Button className="rui-button-primary button-o" btnText="Save" clickBtn={this.handleClick} />\n' +
			'<Button className="button-o" btnText="Cancel" clickBtn={this.handleClick} />\n' +
			'<Button className="rui-button-danger button-o" btnText="Delete" clickBtn={this.handleClick} />';
		return (
			<div>
				<h1>Buttons</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button Normal</p>
					<Button className="rui-button-primary" btnText="Save" clickBtn={this.handleClick} />
					<Button btnText="Cancel" clickBtn={this.handleClick} /> 
					<Button className="rui-button-danger" btnText="Delete" clickBtn={this.handleClick} />
					<br /><br />
					<p className="help">Button Small</p>
					<Button className="rui-button-primary rui-button-sm" btnText="Save" clickBtn={this.handleClick} />
					<Button className="rui-button-sm" btnText="Cancel" clickBtn={this.handleClick} /> 
					<Button className="rui-button-danger rui-button-sm" btnText="Delete" clickBtn={this.handleClick} />
					<br /><br />
					<p className="help">Border only buttons</p>
					<Button className="rui-button-primary button-o" btnText="Save" clickBtn={this.handleClick} />
					<Button className="button-o" btnText="Cancel" clickBtn={this.handleClick} /> 
					<Button className="rui-button-danger button-o" btnText="Delete" clickBtn={this.handleClick} />
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{usageCode}
					</CodeBlock>
					<CodeBlock>
						{borderButton}
					</CodeBlock>
				</div>
			</div>
		)
	}
}

export default Buttons;