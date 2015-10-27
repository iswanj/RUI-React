import React from 'react';
import Button from './Comp/Button';
import CodeBlock from './CodeBlock';

class Buttons extends React.Component {
	handleClick(){

	}

	render() {
		let moduleUsage =
			'import React from \'react\';\n' +
			'//Import Button Component\n'+
			'import {Button} from \'./Comp/Button\';\n';

		let usageCode =
			'//Button Normal\n' +
			'<Button type="primary" size="large" label="Link Primary" href="#/linkbutons" target="_new"/>\n' +
			'<Button type="normal" size="large" label="Link Default" href="#/linkbutons" />\n' +
			'<Button type="danger" size="large" label="Link Danger" link="#/linkbutons" />\n' +
			'\n' +
			'//Button Small\n' +
			'<Button type="primary" size="small" label="Link Primary" href="#/linkbutons" target="_new"/>\n' +
			'<Button type="normal" size="small" label="Link Default" href="#/linkbutons" />\n' +
			'<Button type="danger" size="small" label="Link Danger" link="#/linkbutons" />\n' +
			'\n' +
			'//Border only button\n' +
			'<Button type="primary_o" size="small" label="Link Primary" href="#/linkbutons" target="_new"/>\n' +
			'<Button type="normal_o" size="small" label="Link Default" href="#/linkbutons" />\n' +
			'<Button type="danger_o" size="small" label="Link Danger" link="#/linkbutons" />\n';

		return (
			<div>
				<h1>Link Buttons</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button Normal</p>
					<Button type="primary" size="large" label="Link Primary" href="/linkbutons" target="_new"/>
					<Button type="normal" size="large" label="Link Default" href="/linkbutons" />
					<Button type="danger" size="large" label="Link Danger" href="/linkbutons" />
					<br /><br />
					<p className="help">Button Small</p>
					<Button type="primary" size="small" label="Link Primary" href="/linkbutons" target="_new"/>
					<Button type="normal" size="small" label="Link Default" href="/linkbutons" />
					<Button type="danger" size="small" label="Link Danger" href="/linkbutons" />
					<br />
					<br />
					<p className="help">Border only buttons</p>
					<Button type="primary_o" size="small" label="Link Primary" href="/linkbutons" target="_new"/>
					<Button type="normal_o" size="small" label="Link Default" href="/linkbutons" />
					<Button type="danger_o" size="small" label="Link Danger" href="/linkbutons" />
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{usageCode}
					</CodeBlock>
				</div>
			</div>
		)
	}
}

export default Buttons;
