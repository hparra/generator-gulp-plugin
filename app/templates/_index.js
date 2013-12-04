var es = require("event-stream");

module.exports = function (param) {
	"use strict";

	// see "Writing a plugin"
	// https://github.com/wearefractal/gulp
	function <%= pluginName %>(file, callback) {

		// if necessary check for required param(s), e.g. options hash, etc.
		if (!param) {
			callback(new Error("No param supplied"), undefined);
		}

		// check if file.contents is a `Buffer`
		if (file.contents instanceof Buffer) {

			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
			file.contents = new Buffer(String(file.contents) + "\n" + param);

		} else { // assume it is a `stream.Readable`

			// do fancy stream io stuff
			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream
		}

		callback(null, file);
	}

	return es.map(<%= pluginName %>);
};
