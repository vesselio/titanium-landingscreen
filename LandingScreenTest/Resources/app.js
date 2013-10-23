(function() {
	Ti.API.info('Welcome to Landing Screen Test ' + Ti.Platform.osname);
	
	var VesselSDK = require('io.vessel');
	VesselSDK.initialize('MkNUVnE4cWRrUHJBRXZ1eE13aVpsbXk5');
	
	VesselSDK.checkPointVisited('StartApp');
	var bl = VesselSDK.isTestRunning();
	Ti.API.info('vessel Op is ' + bl);
	
	VesselSDK.setABListener(function(e) {
		var bl = VesselSDK.isTestRunning();
		Ti.API.info('vessel Test is running: ' + bl);
		Ti.API.info('vessel whichVariation ' + VesselSDK.whichVariation('Appcelerator'));
		Ti.API.info('vessel whichTest ' + VesselSDK.whichTest());
		Ti.API.info('vessel isTestVariationRunning ' + VesselSDK.isTestVariationRunning('Appcelerator',  'A'));
		Ti.API.info('vessel getTestId ' + VesselSDK.getTestId());

	

		Ti.API.info('Vessel Test loaded ' + JSON.stringify(e));
			var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
			tabgroup = ApplicationTabGroup();
			tabgroup.open();
			if (e.test == 'Appcelerator') {
				
				if (e.variation == 'A') {
					tabgroup.setActiveTab(1);
				} else if (e.variation == 'B') {
					tabgroup.setActiveTab(0);
				}
			}
	},
	function (e) {
		Ti.API.info('Vessel No test');
		var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
		new ApplicationTabGroup().open();

	}
	);
	
	/*
	var SocialSignup = require('ui/common/SocialSignup');
	new SocialSignup().open();
	*/
	
	
})();
