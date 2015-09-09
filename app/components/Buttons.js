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
			'<Button type="primary" size="large" Label="Save" clickBtn={this.handleClick} />\n' +
			'<Button type="normal" size="large" Label="Save" clickBtn={this.handleClick} />\n' +
			'<Button type="danger" size="large" Label="Save" clickBtn={this.handleClick} />\n' +
			'\n' +
			'//Button Small\n' +
			'<Button type="primary" size="small" Label="Save" clickBtn={this.handleClick} />\n' +
			'<Button type="normal" size="small" Label="Save" clickBtn={this.handleClick} />\n' +
			'<Button type="danger" size="small" Label="Save" clickBtn={this.handleClick} />',
		borderButton =
			'//Border only buttons\n' +
			'<Button type="primary_o" size="large" Label="Save" clickBtn={this.handleClick} />\n' +
			'<Button type="normal_o" size="large" Label="Save" clickBtn={this.handleClick} />\n' +
			'<Button type="danger_o" size="large" Label="Save" clickBtn={this.handleClick} />\n';
		return (
			<div>
				<h1>Buttons</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button Normal</p>
					<Button type="primary" size="large" Label="Accept" clickBtn={this.handleClick} />
					<Button type="normal" size="large" Label="Back" clickBtn={this.handleClick} />
					<Button type="danger" size="large" Label="Reject" clickBtn={this.handleClick} />
					<br />
					<br />
					<p className="help">Button small</p>
					<Button type="primary" size="small" Label="Save" clickBtn={this.handleClick} />
					<Button type="normal" size="small" Label="Cancel" clickBtn={this.handleClick} />
					<Button type="danger" size="small" Label="Delete" clickBtn={this.handleClick} />
					<br />
					<br />
					<p className="help">Border only buttons</p>
					<Button type="primary_o" size="large" Label="Save" clickBtn={this.handleClick} />
					<Button type="normal_o" size="large" Label="Cancel" clickBtn={this.handleClick} />
					<Button type="danger_o" size="large" Label="Delete" clickBtn={this.handleClick} />
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
