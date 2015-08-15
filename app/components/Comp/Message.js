import React from 'react';

class Message extends React.Component {
	renderIcon(type){
		switch (type) {
			case 'danger':
				return <i className="material-icons">highlight_off</i>;
			case 'warning':
				return <i className="material-icons">warning</i>;
			case 'success':
				return <i className="material-icons">done</i>;
			default:
				return <i className="material-icons">info_outline</i>;
		}
		
	}
	render() {
		return (
			<div className={`rui-message message-${this.props.type}`}>
			    <div className="msg-icon left">
			        {this.renderIcon(this.props.type)}
			    </div>
			    <div className="msg-content left">
			        {this.props.children}
			    </div>
			</div>
		);
	}
}

export default Message;