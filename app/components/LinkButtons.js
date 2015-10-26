import React from 'react';
import Button, {LinkButton} from './Comp/Button';
import CodeBlock from './CodeBlock';

class LinkButtons extends React.Component {
	handleClick(){

	}
	
	render() {
		let moduleUsage =
			'import React from \'react\';\n' +
			'//Import LinkButton Component\n'+
			'import {LinkButton} from \'./Comp/Button\';\n';

		let usageCode =
			'//Button Normal\n' +
			'<LinkButton type="primary" size="large" label="Link Primary" href="#/linkbutons" target="_new"/>\n' +
			'<LinkButton type="normal" size="large" label="Link Default" href="#/linkbutons" />\n' +
			'<LinkButton type="danger" size="large" label="Link Danger" link="#/linkbutons" />\n' +
			'\n' +
			'//Button Small\n' +
			'<LinkButton type="primary" size="small" label="Link Primary" href="#/linkbutons" target="_new"/>\n' +
			'<LinkButton type="normal" size="small" label="Link Default" href="#/linkbutons" />\n' +
			'<LinkButton type="danger" size="small" label="Link Danger" link="#/linkbutons" />\n' +
			'\n' +
			'//Border only button\n' +
			'<LinkButton type="primary_o" size="small" label="Link Primary" href="#/linkbutons" target="_new"/>\n' +
			'<LinkButton type="normal_o" size="small" label="Link Default" href="#/linkbutons" />\n' +
			'<LinkButton type="danger_o" size="small" label="Link Danger" link="#/linkbutons" />\n';

		return (
			<div>
				<h1>Link Buttons</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button Normal</p>
					<Button type="danger" size="large" label="Sample Button" clickBtn={this.handleClick} />
					<LinkButton type="primary" size="large" label="Link Primary" link="#/linkbutons" target="_new"/>
					<LinkButton type="normal" size="large" label="Link Default" link="#/linkbutons" />
					<LinkButton type="danger" size="large" label="Link Danger" link="#/linkbutons" />
					<br /><br />
					<p className="help">Button Small</p>
					<LinkButton type="primary" size="small" label="Link Primary" link="#/linkbutons" target="_new"/>
					<LinkButton type="normal" size="small" label="Link Default" link="#/linkbutons" />
					<LinkButton type="danger" size="small" label="Link Danger" link="#/linkbutons" />
					<br />
					<br />
					<p className="help">Border only buttons</p>
					<LinkButton type="primary_o" size="small" label="Link Primary" link="#/linkbutons" target="_new"/>
					<LinkButton type="normal_o" size="small" label="Link Default" link="#/linkbutons" />
					<LinkButton type="danger_o" size="small" label="Link Danger" link="#/linkbutons" />
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

export default LinkButtons;
