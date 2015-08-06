import React from 'react';

class Typography extends React.Component {
	render() {
		return (
			<div>
				<h1>Typography</h1>
					<p className="help">( Core Components )</p>
					<div className="example">
						<p className="head">Example</p>
						<h4>Headers</h4>
						<p>styles for all of the header elements</p>

						<h1>h1. This is a very large header.</h1>
						<h2>h2. This is a large header.</h2>
						<h3>h3. This is a medium header.</h3>
						<h4>h4. This is a moderate header.</h4>
						<h5>h5. This is a small header.</h5>
						<h6>h6. This is a tiny header.</h6>
					</div>
					<div className="example">
						<p className="head">Example</p>
						<h4>Subheaders</h4>
						<p>styles for all of the subheader elements</p>

						<h1 className="subheader">h1. This is a very large header.</h1>
						<h2 className="subheader">h2. This is a large header.</h2>
						<h3 className="subheader">h3. This is a medium header.</h3>
						<h4 className="subheader">h4. This is a moderate header.</h4>
						<h5 className="subheader">h5. This is a small header.</h5>
						<h6 className="subheader">h6. This is a tiny header.</h6>
					</div>

					<div className="example">
						<p className="head">Example</p>
						<h4>Paragraphs</h4>
						<p>This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.</p>
					</div>

					<div className="example">
						<p className="head">Example</p>
						<h4>Links</h4>
						<p>Links are very standard, and the <a href="https://www.youtube.com/watch?v=5U9uP6riAZM" target="_blank">color is preset</a> to the Foundation primary color.</p>
					</div>
			</div>
		);
	}

};

export default Typography;