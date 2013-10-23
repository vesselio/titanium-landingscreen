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
		text:VesselSDK.getValue('subtitle', 'Lets embark on the journey'),
		top:10,
		textAlign:'center',
		font: {
			fontWeight:'bold',
			fontSize:18
		},
		color: '#fff',
		height:Ti.UI.SIZE
	}));
	
	var fbBtn = Ti.UI.createButton({
		title:L('login_with_facebook'),
		height:50,
		width:200,
		top:50,
		backgroundColor:'#0000FF',
		backgroundImage: 'none'
	});
	var gplusBtn = Ti.UI.createButton({
		title:L('login_with_gplus'),
		height:40,
		width:200,
		top:20,
		backgroundColor:'#FF0000',
		backgroundImage: 'none'

	});
	win.add(fbBtn);
	win.add(gplusBtn);
	
	fbBtn.addEventListener('click', function() {
		Ti.API.info('Vessel Facebook clicked');
		VesselSDK.checkPointVisited('facebook_clicked');
	});
	
	gplusBtn.addEventListener('click', function() {
		Ti.API.info('Vessel Google+ clicked');
	
		VesselSDK.checkPointVisited('gplus_clicked');
	});
		
	email_signup = Ti.UI.createLabel({
		text:L('login_with_email','Signup with email'),
		top:30,
		textAlign:'center',
		font: {
			fontWeight:'bold',
			fontSize:18
		},
		color: '#fff',
		height:40
	});
	win.add(email_signup);
	
	
	email_signup.addEventListener('click', function() {
		Ti.API.info('Vessel email signup');
		VesselSDK.checkPointVisited('signup_clicked');
	});
	
		win.add(Ti.UI.createLabel({
		text:'B',
		top:30,
		textAlign:'center',
		font: {
			fontWeight:'bold',
			fontSize:32
		},
		color: '#FF0000',
		height:40
	}));
	
	return win;
};
module.exports = AddWindow;