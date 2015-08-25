import React from 'react';

class Avatar extends React.Component{
	render() {
		const {style, size, imgSrc, ...props} = this.props;
		return (
			<span style={style} className={`rui-avatar rui-avatar-${size}`}>
			    <span className="rui-avatar-img">
			        <img {...props} src={imgSrc} />
			    </span>
			</span>
		)
	}
}

export default Avatar;
