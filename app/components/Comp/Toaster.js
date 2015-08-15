class Toast {
	setAttributes(el, attrs) {
		for(var key in attrs) {
			el.setAttribute(key, attrs[key]);
		}
	}
	clearToasters(){
		const elMsg = document.querySelector('.rui-toaster');
		if(elMsg){
			document.body.removeChild(elMsg);
		}
	}
	show(options) {
		let icon, toast, closeLink, ruiMsg;
		const title = (options.title != '' ? options.title : "Message titlle");
		const body = (options.body != '' ? options.body : "Message titlle");
		const type = (options.type != '' ? options.type : "");
		const autoClose= (options.autoClose != '' ? options.autoClose : "Message titlle");

		//clear all toasters
		this.clearToasters();

		//creating a toaster
		toast = document.createElement('div');
		toast.setAttribute('class', 'rui-toaster');

		//creating a close link
		closeLink = document.createElement('a');
		this.setAttributes(closeLink,{
			'href': '#',
			'class': 'close',
		});
		closeLink.insertAdjacentHTML('beforeend','<i class="material-icons">&#xE5CD;</i>');
		
		//add close event 
		closeLink.addEventListener('click', (e) => {
			e.preventDefault();
			document.body.removeChild(toast);
		});

		//toaster msg
		ruiMsg = document.createElement('div');
		this.setAttributes(ruiMsg, {
			'class': `rui-message message-${type}`
		});

		//message icon generate
		switch(type) {
			case 'success':
				icon = '<i class="material-icons">&#xE876;</i>';
				break;
			case 'danger':
				icon = '<i class="material-icons">&#xE888;</i>';
				break;
			case 'warning':
				icon = '<i class="material-icons">&#xE002;</i>';
			default:
				icon = '<i class="material-icons">&#xE88F;</i>';
		}


		//msg content
		const msgCont = `<div class="msg-icon left">
							${icon}
						</div>
						<div class="msg-content left">
							<h4 class="title">${title}</h4>
							<p class="body">${body}</p>
						</div>`;

		ruiMsg.appendChild(closeLink);
		ruiMsg.insertAdjacentHTML('beforeend', msgCont);
		toast.appendChild(ruiMsg);
		document.body.appendChild(toast);

		//timeout auto close after 4Sec
		if(autoClose === true){
			setTimeout(()=>{
				if(toast){
					document.body.removeChild(toast);
				}
			}, 4000);
		}
	}
}
//export default Toaster;
export let Toaster = new Toast();