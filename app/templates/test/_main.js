/*global describe, it*/
"use strict";

var fs = require("fs");
require("should");
require("mocha");

var gutil = require("gulp-util"),
	<%= pluginName %> = require("../");

describe("<%= _.slugify(appname) %>", function () {

	var file = new gutil.File({
		path: "test/fixtures/hello.txt",
		cwd: "test/",
		base: "test/fixtures",
		contents: fs.readFileSync("test/fixtures/hello.txt")
	});

	it("should work", function (done) {

		var stream = <%= pluginName %>("Bye");

		stream.on("error", done);
		stream.on("data", function (file) {
			String(file.contents).should.equal("Hello\nBye");
			done();
		});

		stream.write(file);
		stream.end();
	});
});
