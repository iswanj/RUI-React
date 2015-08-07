import React from 'react';    

class CodeBlock extends React.Component {
	componentDidMount() {
		//Highlight(React.findDOMNode(this));
		$('pre code').each(function(i, block) {
		    hljs.highlightBlock(block);
		});
	}
	render() {
		return (
			<pre>
		        <code>{this.props.children}</code>
		    </pre>
		);
	}
}

export default CodeBlock;