import React from 'react';
import Button from './Button/Button';

class Buttons extends React.Component {
	handleClick() {
		console.log("clicked");
	}
	render() {
		return (
			<Button className="rui-button-primary" btnText="Button" clickBtn={this.handleClick} />
		)
	}
}

export default Buttons;