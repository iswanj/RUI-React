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
					'<Badge className="rui-badges-completed" label="Completed" />\n'+
					'<Badge className="rui-badges-success" label="Accepted" />\n'+
					'<Badge className="rui-badges-info" label="info" />\n'+
					'<Badge className="rui-badges-danger" label="Rejected" />\n'+
					'<Badge className="rui-badges-warning" label="Pending" />\n'+
					'<Badge label="Default" />',
		badgesCode_o = 
					'//Border only badges\n'+
					'<Badge className="rui-badges-completed-o" label="Completed" />\n'+
					'<Badge className="rui-badges-success-o" label="Accepted" />\n'+
					'<Badge className="rui-badges-info-o" label="info" />\n'+
					'<Badge className="rui-badges-danger-o" label="Rejected" />\n'+
					'<Badge className="rui-badges-warning-o" label="Pending" />\n'+
					'<Badge className="rui-badges-o" label="Default" />';
		return (
			<div>
				<h1>Badges</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<Badge className="rui-badges-completed" label="Completed" />
					<Badge className="rui-badges-success" label="Accepted" />
					<Badge className="rui-badges-info" label="info" />
					<Badge className="rui-badges-danger" label="Rejected" />
					<Badge className="rui-badges-warning" label="Pending" />
					<Badge className="" label="Default" />
					<br /><br />
					<Badge className="rui-badges-completed-o" label="Completed" />
					<Badge className="rui-badges-success-o" label="Accepted" />
					<Badge className="rui-badges-info-o" label="info" />
					<Badge className="rui-badges-danger-o" label="Rejected" />
					<Badge className="rui-badges-warning-o" label="pending" />
					<Badge className="rui-badges-o" label="Default" />
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{badgesCode}
					</CodeBlock>
					<CodeBlock>
						{badgesCode_o}
					</CodeBlock>
				</div>
			</div>
		);
	}
}

export default Badges;