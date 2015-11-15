import React from 'react';
import Badge from './Comp/Badge';
import CodeBlock from './CodeBlock';

class Badges extends React.Component {
	render() {
		let moduleUsage =
					'import React from \'react\';\n' +
					'//Import Button Component\n'+
					'import Badge from \'./Comp/Badge\';\n',
		badgesCode =
					'<Badge type="primary" label="Completed" />\n' +
					'<Badge type="danger" label="Rejected" />\n' +
					'<Badge type="secondary" label="info" />\n' +
					'<Badge type="success" label="Accepted" />\n' +
					'<Badge type="warning" label="Pending" />\n' +
					'<Badge label="Default" />';
		return (
			<div>
				<h1>Badges</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<Badge type="primary" label="Completed" />
					<Badge type="danger" label="Rejected" />
					<Badge type="secondary" label="info" />
					<Badge type="success" label="Accepted" />
					<Badge type="warning" label="Pending" />
					<Badge label="Default" />
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{badgesCode}
					</CodeBlock>
				</div>
			</div>
		);
	}
}

export default Badges;
