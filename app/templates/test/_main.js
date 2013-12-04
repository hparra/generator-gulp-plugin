var should = require("should"),
	mocha = require("mocha"),
	gulp = require("gulp"),
	plugin = require("../");

describe("<%= _.slugify(appname) %>", function () {
	it("should work", function (done) {

		var stream = gulp.src("./test/fixtures/hello.txt")
						.pipe(plugin("Bye"));

		stream.on("error", done);
		stream.on("data", function(file) {
			String(file.contents).should.equal("Hello\nBye");
		});
		stream.on("end", function() {
			done();
		});

	});
});
