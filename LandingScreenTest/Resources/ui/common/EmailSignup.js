var AddWindow = function() {
	var VesselSDK = require('io.vessel');

	var win = Ti.UI.createWindow({
		title:L('signup'),
		layout:'vertical',
		barColor: '#6d0a0c',
		backgroundColor: 'transparent',
		backgroundImage: 'images/grain.png'
	});

	win.add(Ti.UI.createLabel({
		text:'Vessel',
		top:10,
		textAlign:'center',
		font: {
			fontWeight:'bold',
			fontSize:18
		},
		color: '#fff',
		height:Ti.UI.SIZE
	}));
	
	win.add(Ti.UI.createLabel({
		text:VesselSDK.getValue('subtitle', 'Lets get started'),
		top:10,
		textAlign:'center',
		font: {
			fontWeight:'bold',
			fontSize:18
		},
		color: '#fff',
		height:Ti.UI.SIZE
	}));
	

	var email = Ti.UI.createTextField({
		height:(Ti.Platform.osname==='android') ? Ti.UI.SIZE : 40,
		top:50,
		width:250,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText:L('email')
	});
	
	var password = Ti.UI.createTextField({
		height:(Ti.Platform.osname==='android') ? Ti.UI.SIZE : 40,
		top:20,
		width:250,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DONE,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText:L('password')
	});
	
	win.add(email);
	win.add(password);
	var save = Ti.UI.createButton({
		title:L('signup'),
		height:40,
		width:80,
		top:30,
		right:60,
		backgroundColor: '#00FF00',
		backgroundImage:'none'
	});
	
	win.add(save);
	
	win.add(Ti.UI.createLabel({
		text:'A',
		top:30,
		textAlign:'center',
		font: {
			fontWeight:'bold',
			fontSize:32
		},
		color: '#00FF00',
		height:40
	}));
	
	return win;
};
module.exports = AddWindow;