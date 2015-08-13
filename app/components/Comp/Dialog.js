import React from 'react';

class Dialog extends React.Component {

	static openDialog(selector){
		let El = document.querySelector(selector);
		El.style.display = "block";
	}

	static closeDialogOutSide(){
		let Els = document.querySelectorAll('.rui-dialog');
		for ( let el of Array.from(Els) ) {
            el.style.display = "none";
        }
	}

	closeDialog(e){
		e.preventDefault();
		let Els = document.querySelectorAll('.rui-dialog');
		for ( let el of Array.from(Els) ) {
            el.style.display = "none";
        }
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