import React from 'react';
import Message from './Comp/Message';
import {Toaster} from './Comp/Toaster';
import CodeBlock from './CodeBlock';

class Messages extends React.Component {
	openToaster(){
		Toaster.show({
            title: 'Completed!',
            body: 'You have been successfuly completed Induction Training final quiz',
            type: 'success',
            autoClose: true
        });
	}
	render() {
		let moduleUsage = 
			'import React from \'react\';\n' +
			'//Import Dialog Component\n' +
			'import Message from \'./Comp/Message\';\n',
			msgTypes = 
				'//Default Message\n' +
				'<Message type="default">\n' +
				'	<h4 className="title">Training Status</h4>\n' +
				'	<p className="body">Final quiz for <strong>Induction Training</strong> will available after 21/08/2015.</p>\n' +
				'</Message>\n' +
				'\n' +
				'//Danger/Alert Message\n' +
				'<Message type="danger">\n' +
				'	<h4 className="title">Training Expired!</h4>\n' +
				'	<p className="body">The training has been expired before you complete it.</p>\n' +
				'	<p className="info">\n' +
				'		<strong>Training Name:</strong> Induction Training\n' +
				'	</p>\n' +
				'</Message>\n' +
				'\n' +
				'//Warning Message\n' +
				'<Message type="warning">\n' +
				'	<h4 className="title">Warning!</h4>\n' +
				'	<p className="body">You have only 2 more days to complete final quiz.</p>\n' +
				'	<p className="info">\n' +
				'		<strong>Training Name:</strong> Induction Training\n' +
				'	</p>\n' +
				'</Message>\n' +
				'\n' +
				'//Success Message\n' +
				'<Message type="success">\n' +
				'	<h4 className="title">Completed!</h4>\n' +
				'	<p className="body">You have been successfuly completed <strong>Induction Training</strong> final quiz</p>\n' +
				'</Message>',
			toasterButton = 
				'//Buttion\n' +
				'<button className="rui-button rui-button-primary" onClick={this.openToaster}>Show Toaster</button>\n',
			toasterMsg = 
				'//Opening Toaster\n' +
				'openToaster(){\n' +
				'	Toaster.show({\n' +
			    '		title: \'Completed!\',\n' +
			    '		body: \'You have been successfuly completed Induction Training final quiz\',\n' +
			    '		type: \'success\',\n' +
			    '		autoClose: true\n' +
			    '	});\n' +
				'}';
		return (
			<div>
				<h1>Messages</h1>
				<p>Messages are the main method for providing system feedback in the product user interface. There are varius kind of message notifications: confirmations, notices, warnings, info and errors </p>
				<p className="help">(Core Components)</p>
				<div className="example">
					<p className="head">Example</p>

					<p className="help">With HTML</p>
					<Message type="default">
						<h4 className="title">Training Status</h4>
			        	<p className="body">Final quiz for <strong>Induction Training</strong> will available after 21/08/2015.</p>
					</Message>
					<br />
					<Message type="danger">
						<h4 className="title">Training Expired!</h4>
				        <p className="body">The training has been expired before you complete it.</p>
				        <p className="info">
				            <strong>Training Name:</strong> Induction Training
				        </p>
					</Message>
					<br />
					<Message type="warning">
						<h4 className="title">Warning!</h4>
				        <p className="body">You have only 2 more days to complete final quiz.</p>
				        <p className="info">
				            <strong>Training Name:</strong> Induction Training
				        </p>
					</Message>
					<br />
					<Message type="success">
						<h4 className="title">Completed!</h4>
        				<p className="body">You have been successfuly completed <strong>Induction Training</strong> final quiz</p>
					</Message>
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{msgTypes}
					</CodeBlock>
				</div>

				<h1>Toaster Messages</h1>
				<p>Toaster Messages the main method fro providing immediate feedback in response to a user action. The messages are shown at the top of the page and like html messages stay for few seconds.</p>
				<p className="help">(Core Components)</p>
				<p className="help"><strong>Variations </strong>(type): info(default), success, danger, warning</p>
				<div className="example">
					<p className="head">Example</p>
					<button className="rui-button rui-button-primary" onClick={this.openToaster}>Show Toaster</button>
				</div>
				<div className="example-code">
					<CodeBlock>
						{toasterButton}
					</CodeBlock>
					<CodeBlock>
						{toasterMsg}
					</CodeBlock>
				</div>
			</div>
		);
	}
}

export default Messages;