import React from 'react';
import Showdown from 'showdown';
    

class Codes extends React.Component {
	render() {
		let converter = new Showdown.Converter();
		let html = '<p></p>';
		console.log(this.props.children);
		return (
			<div>
				{converter.makeHtml(html)}
			</div>
		);
	}
}

export default Codes;