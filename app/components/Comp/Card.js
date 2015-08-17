import React from 'react';

class Card extends React.Component {
	render(){
		return (
			<div {...this.props} className={`rui-card ${this.props.className}`}>
			    {this.props.children}
			</div>
		)
	}
}

export default Card;