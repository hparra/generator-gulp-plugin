/*global describe, it*/
"use strict";

require("should");
require("mocha");

var gulp = require("gulp"),
	<%= pluginName %> = require("../");

describe("<%= _.slugify(appname) %>", function () {
	it("should work", function (done) {

		var stream = gulp.src("./test/fixtures/hello.txt")
						.pipe(<%= pluginName %>("Bye"));

		stream.on("error", done);
		stream.on("data", function (file) {
			String(file.contents).should.equal("Hello\nBye");
		});
		stream.on("end", function () {
			done();
		});

	});
});
