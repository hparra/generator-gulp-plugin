"use strict";

var gulp = require("gulp"),
	join = require("path").join,
	jshint = require("gulp-jshint");

// JSHint
// https://github.com/wearefractal/gulp-jshint
gulp.task("jshint", function () {
	gulp.src(["./**/*.js", "!node_modules/**", "!test/temp/**"])
		.pipe(jshint(join(__dirname, ".jshintrc")))
		.pipe(jshint.reporter("default"));
});

// default task
gulp.task("default", function () {
	gulp.run("jshint");
});
