import React from 'react';
import Card from './Comp/Card';
import CodeBlock from './CodeBlock';

class Cards extends React.Component {
	render(){
		let customStyle = {
			width: '50%'
		},
		moduleUsage = 
			'import React from \'react\';\n' +
			'//Import Card Component\n' +
			'import Card from \'./Comp/Card\';',
		codeSample = 
			'<Card style={customStyle}>\n' +
			'	<h4>Title</h4>\n' +
			'	<p>Et pro minim quodsi molestie, hinc mazim choro ad quo, ad has quis veniam. Electram constituto pri ex. No iisque impedit mei, magna adipiscing ad quo, ut veri utamur tractatos vis. Copiosae invidunt adipisci nec eu. Ea sit porro senserit principes,</p>\n' +
			'</Card>\n' +
			'<Card className="card-success" style={customStyle}>\n' +
			'	<h4>Success Card</h4>\n' +
			'</Card>\n' +
			'<Card className="card-danger" style={customStyle}>\n' +
			'	<h4>Danger Card</h4>\n' +
			'</Card>';
		return (
			<div>
				<h1>Dialog</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<Card style={customStyle}>
						<h4>Title</h4>
	    				<p>Et pro minim quodsi molestie, hinc mazim choro ad quo, ad has quis veniam. Electram constituto pri ex. No iisque impedit mei, magna adipiscing ad quo, ut veri utamur tractatos vis. Copiosae invidunt adipisci nec eu. Ea sit porro senserit principes,</p>
					</Card>
					<Card className="card-success" style={customStyle}>
						<h4>Success Card</h4>
					</Card>
					<Card className="card-danger" style={customStyle}>
						<h4>Danger Card</h4>
					</Card>
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

export default Cards;