import React from 'react';
import './less/color.less';

class Color extends React.Component{

	render() {
		return (
			<div>
				<h3>Colors</h3>
				<div className="cl-wrap">
					<div className="color-slot color-primary">
						Primary<br />
						<span className="hash">#1f90ff</span><br />
						<span>( Dodger Blue )</span>
					</div>
					<div className="color-slot color-success">
						Success<br />
						<span className="hash">#14892c</span><br />
						<span>( Jewel )</span>
					</div>
					<div className="color-slot color-secondary">
						Secondary<br />
						<span className="hash">#fcb117</span><br />
						<span>( Sun )</span>
					</div>
					<div className="color-slot color-warning">
						Warning<br />
						<span className="hash">#f79232</span><br />
						<span>( Sea Buckthorn )</span>
					</div>
					<div className="color-slot color-danger">
						Danger<br />
						<span className="hash">#d04437</span><br />
						<span>( Persian Red )</span>
					</div>
					<div className="color-slot color-default">
						Default<br />
					<span className="hash">#eeeeee</span><br />
						<span>( Gallery )</span>
					</div>
				</div>
				<div className="cl-wrap">
					<h3>Text Colors</h3>
					<div className="color-slot color-txt">
						Normal Text<br />
						<span className="hash">#333333</span><br />
						<span>( Mine Shaft )</span>
					</div>
					<div className="color-slot color-subtext">
						Text Secondary<br />
						<span className="hash">#666666</span><br />
						<span>( Ironside Gray )</span>
					</div>
					<div className="color-slot color-textsmall">
						Text Small<br />
						<span className="hash">#888888</span><br />
						<span>( Taupe gray )</span>
					</div>
				</div>
			</div>
		);
	}

};

export default Color;
