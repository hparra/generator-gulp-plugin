var through = require("through"),
	gutil = require("gulp-util");

module.exports = function (param) {
	"use strict";

	// if necessary check for required param(s), e.g. options hash, etc.
	if (!param) {
		throw new gutil.PluginError("<%= appname %>", "No param supplied");
	}

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/wiki/Writing-a-Plugin:-Guidelines
	function <%= pluginName %>(file) {

		// Do nothing if no contents
		if (file.isNull()) return this.queue(file);

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {

			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
			file.contents = new Buffer(String(file.contents) + "\n" + param);

			this.queue(file);

		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("<%= appname %>", "Stream content is not supported"));
		}
	}

	return through(<%= pluginName %>);
};
