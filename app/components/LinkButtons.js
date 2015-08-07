import React from 'react';
import {LinkButton} from './Button/Button';
import CodeBlock from './CodeBlock';

class LinkButtons extends React.Component {
	render() {
		let moduleUsage = 
			'import React from \'react\';\n' +
			'//Import LinkButton Component\n'+
			'import {LinkButton} from \'./Button\';\n';

		let usageCode =
			'//Button Normal\n' +
			'<LinkButton className="rui-button-primary" btnText="Link Primary" link="#/linkbutons" target="_new"/>\n' +
			'<LinkButton btnText="Link Default" link="#/linkbutons" /> \n' +
			'<LinkButton className="rui-button-danger" btnText="Link Danger" link="#/linkbutons" />\n' +
			'\n' +
			'//Button Small\n' +
			'<LinkButton className="rui-button-primary rui-button-sm" btnText="Link Primary" link="#/linkbutons" />\n' +
			'<LinkButton className="rui-button-sm" btnText="Link Default" link="#/linkbutons" /> \n' +
			'<LinkButton className="rui-button-danger rui-button-sm" btnText="Link Danger" link="#/linkbutons" />';
		return (
			<div>
				<h1>Link Buttons</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<p className="help">Button Normal</p>
					<LinkButton className="rui-button-primary" btnText="Link Primary" link="#/linkbutons" target="_new"/>
					<LinkButton btnText="Link Default" link="#/linkbutons" /> 
					<LinkButton className="rui-button-danger" btnText="Link Danger" link="#/linkbutons" />
					<br /><br />
					<p className="help">Button Small</p>
					<LinkButton className="rui-button-primary rui-button-sm" btnText="Link Primary" link="#/linkbutons" />
					<LinkButton className="rui-button-sm" btnText="Link Default" link="#/linkbutons" /> 
					<LinkButton className="rui-button-danger rui-button-sm" btnText="Link Danger" link="#/linkbutons" />
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