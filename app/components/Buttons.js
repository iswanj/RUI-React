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
			'<Button type="primary" btnText="Save" clickBtn={this.handleClick} />\n' +
			'<Button btnText="Cancel" clickBtn={this.handleClick} /> \n' +
			'<Button type="danger" btnText="Delete" clickBtn={this.handleClick} />\n' +
			'\n' +
			'//Button Small\n' +
			'<Button type="primary" size="sm" btnText="Save" clickBtn={this.handleClick} />\n' +
			'<Button size="sm" btnText="Cancel" clickBtn={this.handleClick} /> \n' +
			'<Button type="danger" size="sm" btnText="Delete" clickBtn={this.handleClick} />\n',
		borderButton =
			'//Border only buttons\n' +
			'<Button type="primary" className="button-o" btnText="Save" clickBtn={this.handleClick} />\n' +
			'<Button className="button-o" btnText="Cancel" clickBtn={this.handleClick} />\n' +
			'<Button type="danger" className="button-o" btnText="Delete" clickBtn={this.handleClick} />';
		return (
			<div>
				<h1>Buttons</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button Normal</p>
					<Button id="testId" type="primary" btnText="Save" clickBtn={this.handleClick} />
					<Button btnText="Cancel" clickBtn={this.handleClick} />
					<Button type="danger" btnText="Delete" clickBtn={this.handleClick} />
					<br /><br />
					<p className="help">Button Small</p>
					<Button type="primary" size="sm" btnText="Save" clickBtn={this.handleClick} />
					<Button size="sm" btnText="Cancel" clickBtn={this.handleClick} />
					<Button type="danger" size="sm" btnText="Delete" clickBtn={this.handleClick} />
					<br /><br />
					<p className="help">Border only buttons</p>
					<Button type="primary" className="button-o" btnText="Save" clickBtn={this.handleClick} />
					<Button className="button-o" btnText="Cancel" clickBtn={this.handleClick} />
					<Button type="danger" className="button-o" btnText="Delete" clickBtn={this.handleClick} />
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
