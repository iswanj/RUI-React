import React from 'react';
import Button from './Comp/Button';
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

		normalBtn =
				'<Button type="primary" label="Accept" onClick={this.handleClick} />\n' +
				'<Button type="normal" label="Back" onClick={this.handleClick} />\n' +
				'<Button type="secondary" label="Save a Life" onClick={this.handleClick} />\n' +
				'<Button type="danger" label="Reject" onClick={this.handleClick} />',
		smallBtn =
				'<Button type="primary" size="small" label="Save" onClick={this.handleClick} />\n' +
				'<Button type="normal" size="small" label="Cancel" onClick={this.handleClick} />\n' +
				'<Button type="secondary" size="small" label="Save a Life" onClick={this.handleClick} />\n' +
				'<Button type="danger" size="small" label="Delete" onClick={this.handleClick} />',
		largeBtn =
				'<Button type="primary" size="large" label="Save" onClick={this.handleClick} />\n' +
				'<Button type="normal" size="large" label="Cancel" onClick={this.handleClick} />\n' +
				'<Button type="secondary" size="large" label="Save a Life" onClick={this.handleClick} />\n' +
				'<Button type="danger" size="large" label="Delete" onClick={this.handleClick} />',
		borderButton =
			'//Border only buttons\n' +
			'<Button type="primary_o" size="large" label="Save" onClick={this.handleClick} />\n' +
			'<Button type="normal_o" size="large" label="Save" onClick={this.handleClick} />\n' +
			'<Button type="danger_o" size="large" label="Save" onClick={this.handleClick} />\n';
		return (
			<div>
				<h1>Buttons</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button Normal</p>
					<Button type="primary" label="Accept" onClick={this.handleClick} />
					<Button type="normal" label="Back" onClick={this.handleClick} />
					<Button type="secondary" label="Save a Life" onClick={this.handleClick} />
					<Button type="danger" label="Reject" onClick={this.handleClick} />
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{normalBtn}
					</CodeBlock>
				</div>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button large</p>
					<Button type="primary" size="large" label="Save" onClick={this.handleClick} />
					<Button type="normal" size="large" label="Cancel" onClick={this.handleClick} />
					<Button type="secondary" size="large" label="Save a Life" onClick={this.handleClick} />
					<Button type="danger" size="large" label="Delete" onClick={this.handleClick} />
				</div>
				<div className="example-code">
					<CodeBlock>
						{largeBtn}
					</CodeBlock>
				</div>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button small</p>
					<Button type="primary" size="small" label="Save" onClick={this.handleClick} />
					<Button type="normal" size="small" label="Cancel" onClick={this.handleClick} />
					<Button type="secondary" size="small" label="Save a Life" onClick={this.handleClick} />
					<Button type="danger" size="small" label="Delete" onClick={this.handleClick} />
				</div>
				<div className="example-code">
					<CodeBlock>
						{smallBtn}
					</CodeBlock>
				</div>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Border only buttons</p>
					<Button type="primary_o" label="Save" onClick={this.handleClick} />
					<Button type="normal_o" label="Cancel" onClick={this.handleClick} />
					<Button type="secondary_o" label="Save a Life" onClick={this.handleClick} />
					<Button type="danger_o" label="Delete" onClick={this.handleClick} />
				</div>
				<div className="example-code">
					<CodeBlock>
						{borderButton}
					</CodeBlock>
				</div>
			</div>
		)
	}
}

export default Buttons;
