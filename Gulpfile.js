"use strict";

var gulp = require("gulp"),
	join = require("path").join,
	jshint = require("gulp-jshint"),
	snyk = require("gulp-snyk");

// JSHint
// https://github.com/wearefractal/gulp-jshint
gulp.task("jshint", function () {
	gulp.src(["./**/*.js", "!node_modules/**", "!test/temp/**", "!app/templates/**/*.js"])
		.pipe(jshint(join(__dirname, ".jshintrc")))
		.pipe(jshint.reporter("default"));
});

gulp.task("protect", function(cb) {
  return snyk({ command: "protect" }, cb);
});

gulp.task("snyk", function(cb) {
  return snyk({ command: "test" }, cb);
});

// default task
gulp.task("default", ["snyk", "jshint"]);
