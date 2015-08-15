import React from 'react';

class Dialog extends React.Component {
	//Open dialog (From out side)
	static openDialog(selector){
		let El = document.querySelector(selector);
		El.style.display = "block";

		//disable body scrollbar
		let body = document.querySelector('body');
		body.classList.add('dialog-open');
	}

	//Close dialog out side from this component
	static closeDialogOutSide(){
		let elDialogs = document.querySelectorAll('.rui-dialog');
		for ( let el of Array.from(elDialogs) ) {
            el.style.display = "none";
        }
        //re-active body scrollbar
        let body = document.querySelector('body');
		body.classList.remove('dialog-open');
	}

	closeDialog(e){
		e.preventDefault();
		let elDialogs = document.querySelectorAll('.rui-dialog');
		for ( let el of Array.from(elDialogs) ) {
            el.style.display = "none";
        }

        //re-active body scrollbar
        let body = document.querySelector('body');
		body.classList.remove('dialog-open');
	}

	stopDialogClickHandler(e){
		e.stopPropagation();
	}

	render() {
		return (
			<div className="rui-dialog rui-overlay" onClick={this.closeDialog} data-role="dialog" id={this.props.id}>
				<div className="dialog-content dialog-small" onClick={this.stopDialogClickHandler}>
					<div className={`dialog-header ${this.props.className}`}>
						<h3>{this.props.Dtitle}</h3>
						<a href="#" className="closeM" onClick={this.closeDialog}><i className="material-icons">close</i></a>
					</div>
					{this.props.children}
				</div>
			</div>
        );
	}
}

export default Dialog;