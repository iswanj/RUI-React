import React from 'react';
import Button from './Comp/Button';
import Dialog from './Comp/Dialog';
import CodeBlock from './CodeBlock';

class Dialogs extends React.Component {

	openDialog() {
        Dialog.openDialog("#my-dialog2");
    }
    openErrorDialog() {
    	Dialog.openDialog("#my-dialog3");
    }
    closeD() {
    	Dialog.closeDialogOutSide();
    }

	render() {
		let moduleUsage =
			'import React from \'react\';\n' +
			'//Import Dialog Component\n' +
			'import {Button} from \'./Comp/Button\';\n' +
			'import Dialog from \'./Comp/Dialog\';\n',

			dialogDefault =
				'<Dialog id="my-dialog2" Dtitle="Dialog Title">\n' +
				'	<div className="dialog-body">\n' +
				'		Dialog body\n' +
				'	</div>\n' +
				'	<div className="dialog-footer">\n' +
				'		<button className="rui-button right" onClick={this.closeD.bind(this)}>Close</button>\n' +
				'	</div>\n' +
                '</Dialog>',
            dialogDanger =
            	'<Dialog className="dialog-warning" id="my-dialog3" Dtitle="Danger Dialog Title">\n' +
				'	<div className="dialog-body">\n' +
				'		Danger dialog body\n' +
				'	</div>\n' +
				'	<div className="dialog-footer">\n' +
				'		<button className="rui-button right" onClick={this.closeD.bind(this)}>Close</button>\n' +
				'	</div>\n' +
				'</Dialog>',
			dialogOpen =
				'//Open Dialog\n' +
				'openDialog() {\n' +
			    '    Dialog.openDialog("#my-dialog2");\n' +
			    '}',
			dialogClose =
				'//Close Dialog \n' +
				'closeDialog() {\n' +
			    '	Dialog.closeDialogOutSide();\n' +
			    '}';

		return (
			<div>
				<h1>Dialog</h1>
				<p className="help">( Core Components )</p>
				<div className="example">
					<p className="head">Example</p>
					<Button type="primary" size="large" label="Open Dialog" onClick={this.openDialog} />
					<Button type="danger" size="large" label="Open Error Dialog" onClick={this.openErrorDialog} />
				</div>
				<div className="example-code">
					<CodeBlock>
						{moduleUsage}
					</CodeBlock>
					<CodeBlock>
						{dialogDefault}
					</CodeBlock>
					<CodeBlock>
						{dialogDanger}
					</CodeBlock>
					<CodeBlock>
						{dialogOpen}
					</CodeBlock>
					<CodeBlock>
						{dialogClose}
					</CodeBlock>
				</div>

				<Dialog id="my-dialog2" Dtitle="Dialog Title">
					<div className="dialog-body">
						Dialog body
					</div>
					<div className="dialog-footer">
						<button className="rui-button right" onClick={this.closeD}>Close</button>
					</div>
                </Dialog>

                <Dialog className="dialog-warning" id="my-dialog3" Dtitle="Danger Dialog Title">
					<div className="dialog-body">
						Danger dialog body
					</div>
					<div className="dialog-footer">
						<button className="rui-button right" onClick={this.closeD}>Close</button>
					</div>
				</Dialog>
			</div>
		)
	}
}

export default Dialogs;
