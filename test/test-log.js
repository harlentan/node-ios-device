var iosDevice = require('../ios-device');

iosDevice.devices(function (err, devices) {
	if (err) {
		console.error(err.toString());
		process.exit(1);
	}

	console.log(devices);
	console.log('=====================================================');

	if (!devices.length) {
		console.log('No devices detected');
		return;
	}

	iosDevice
		.log(devices[0].udid)
		.on('log', console.log)
		.on('error', function (err) {
			console.error('Error!', err);
		});
});
