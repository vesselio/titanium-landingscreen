function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	var SocialSignup = require('ui/common/SocialSignup');
	var EmailSignup = require('ui/common/EmailSignup');

	//create app tabs
	var emailSignup = new EmailSignup(),
		socialSignup = new SocialSignup();
	
	var tab1 = Ti.UI.createTab({
		title: 'EmailSignup',
		icon: '/images/fugitives.png',
		window: emailSignup
	});
	
	emailSignup.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'SocialSignup',
		icon: '/images/captured.png',
		window: socialSignup
	});
	socialSignup.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;
