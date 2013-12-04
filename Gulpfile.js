"use strict";

var gulp = require("gulp"),
	ignore = require("gulp-ignore"),
	jshint = require("gulp-jshint");

// JSHint
// https://github.com/wearefractal/gulp-jshint
gulp.task("jshint", function() {

	//
	// FIXME
	//
	// Can't use following due to Error: EMFILE, too many open files:
	//
	//	gulp.src("./**/*.js")
	//		.pipe(ignore({
	//			pattern: [
	//				"./node_modules/**",
	//				"./test/temp/**"]}))
	//
	// Must wait for core impl of .src() ignores
	//

	gulp.src("./*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));

	gulp.src("./app/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));

	gulp.src("./test/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});

// default task
gulp.task("default", function() {
	gulp.run("jshint");
});
