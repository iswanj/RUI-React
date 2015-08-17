import React from 'react';
import Avatar from './Comp/Avatar';
import CodeBlock from './CodeBlock';

class Avatars extends React.Component {
	render() {
		let styles = {
			marginRight: '.4em'
		},
		moduleUsage = 
			'import React from \'react\';\n' +
			'//Import Avatar Component\n' +
			'import Avatar from \'./Comp/Avatar\';\n',
		codeSample =
			'<Avatar style={styles} id="imageId" size="xsm" imgSrc="./img/avatar.png" />\n' +
			'<Avatar style={styles} size="sm" imgSrc="./img/avatar.png" />\n' +
			'<Avatar style={styles} size="lg" imgSrc="./img/avatar.png" />\n' +
			'<Avatar style={styles} size="xlg" imgSrc="./img/avatar.png" />\n' +
			'<Avatar style={styles} size="xxlg" imgSrc="./img/avatar.png" />';
		return (
			<div>
				<h1>Avatars</h1>
				<p className="help">( Core Components )</p>
				<p><strong>Available Sizes: </strong> xsm, sm, lg, xlg, xxlg</p>
				<div className="example">
					<p className="head">Example</p>
					<Avatar style={styles} id="imageId" size="xsm" imgSrc="./img/avatar.png" />
					<Avatar style={styles} size="sm" imgSrc="./img/avatar.png" />
					<Avatar style={styles} size="lg" imgSrc="./img/avatar.png" />
					<Avatar style={styles} size="xlg" imgSrc="./img/avatar.png" />
					<Avatar style={styles} size="xxlg" imgSrc="./img/avatar.png" />
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{codeSample}
					</CodeBlock>
				</div>
			</div>
		)
	}
}

export default Avatars;