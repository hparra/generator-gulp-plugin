/*global describe, beforeEach, it*/
"use strict";

var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var path    = require("path");

describe("gulp-plugin generator", function () {
  before(function (done) {
    helpers.run(path.join(__dirname, "../app"), { tmpdir: true })
      .withPrompts({
        githubUser: "foo",
        pluginName: "blah"
      })
      .on("end", done);
  });

  it("creates expected files", function (done) {
    var expected = [
      // add files you expect to exist here.
      ".editorconfig",
      ".gitattributes",
      ".gitignore",
      ".jshintrc",
      ".travis.yml",
      ".yo-rc.json",
      "index.js",
      "LICENSE",
      "package.json",
      "README.md",
      "test/main.js",
      "test/fixtures/hello.txt"
    ];

    assert.file(expected);
    done();
  });
});
