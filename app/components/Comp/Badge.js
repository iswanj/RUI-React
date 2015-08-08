import React from 'react';

class Badge extends React.Component {
	render() {
		return (
			<span className={`rui-badges ${this.props.className}`}>{this.props.label}</span>
		);
	}
}

Badge.propTypes = {
	label: React.PropTypes.string.isRequired
};


export default Badge;