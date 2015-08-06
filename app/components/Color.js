import React from 'react';
import './less/color.less';

class Color extends React.Component{

	render() {
		return (
			<div>
				<h3>Colors</h3>
				<div className="cl-wrap">
					<div className="color-slot color-dark">
						Dark<br />
						<span className="hash">#1d2027</span><br />
						<span>( Shark )</span>
					</div>
					<div className="color-slot color-primary-dark">
						Primary Dark<br />
						<span className="hash">#2e323b</span><br />
						<span>( Charade )</span>
					</div>
					<div className="color-slot color-primary">
						Primary<br />
						<span className="hash">#1e90ff</span><br />
						<span>( Dodger Blue )</span>
					</div>
					<div className="color-slot color-success">
						Success<br />
						<span className="hash">#14892c</span><br />
						<span>( Jewel )</span>
					</div>
					<div className="color-slot color-success-light">
						Success Light<br />
						<span className="hash">#67ab49</span><br />
						<span>( Apple )</span>
					</div>
					<div className="color-slot color-info">
						Info<br />
						<span className="hash">#439fe0</span><br />
						<span>( Picton Blue )</span>
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
					<div className="color-slot color-yellow">
						Yellow<br />
						<span className="hash">#f6c342</span><br />
						<span>( Saffron )</span>
					</div>
					<div className="color-slot color-default">
						Default<br />
						<span className="hash">#f5f5f5</span><br />
						<span>( Wild Sand )</span>
					</div>
				</div>
				<div className="cl-wrap">
					<h3>Text Colors</h3>
					<div className="color-slot color-txt">
						Text<br />
						<span className="hash">#2e323b</span><br />
						<span>( Charade )</span>
					</div>
					<div className="color-slot color-subtext">
						Sub Text<br />
						<span className="hash">#505666</span><br />
						<span>( Trout )</span>
					</div>
					<div className="color-slot color-textsmall">
						Text Small<br />
						<span className="hash">#6A7387</span><br />
						<span>( Pale Sky )</span>
					</div>
				</div>
			</div>
		);
	}

};

export default Color;