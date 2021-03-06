var Helper = [];

/** Combines two or more objects 
* @target (object): final object
* @objects (object): two or more objects
*/
Helper.extend = function(target) {
	
	var sources = [].slice.call(arguments, 1);

	sources.forEach(function (source) {
		for(var prop in source) {
			target[prop] = source[prop];
		}
	});

    return target;

}



/** Simple parser for command line arguments. 
* It uses process.argv property.
*/
Helper.argumentsParser = function() {

	var args = {};

	for(var i = 0, len = process.argv.length; i < len; i++) {

		var cmd = process.argv[i];

		if(cmd.indexOf("=") == -1) {
			continue;
		}

		var splitCmd = cmd.split("="),
			param = splitCmd[0].replace(new RegExp("-", "g"), "");

		args[param] = splitCmd[1];

	}

	return extend({}, argsDefault, args);

}



/** Parser and setter configuration paramaters
* @config (object): configuration object
*/
Helper.setConfig = function(config, app, express) {

	if(!app || !express) {
		return null;
	}

	// Paths
	if(config.paths) {
		for(var type in config.paths) {
			
			var paths = config.paths[type];

			if(!paths || paths.length != 2) {
				continue;
			}

			app.use(paths[0], express.static(__dirname + paths[1]));

		};
	}
	// //Paths

	// Port
	if(config.port) {
		app.set("port", config.port);
	}
	// //Port

}



/** Returns router configuration
* @config (object): configuration object
*/
Helper.getRouter = function(config) {

	if(config.router) {
		return config.router;
	}

}



/** GET params parser
* @params (object) GET parameters
* @callback (function) callback function
*/
Helper.parseParams = function(params, callback) {

	if(params.time) {
		setTimeout(function() {
			callback.apply();
		}, params.time);
	} else {
		callback.apply();
	}

}

exports.Helper = Helper;