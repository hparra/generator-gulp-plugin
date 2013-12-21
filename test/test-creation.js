/*global describe, beforeEach, it*/
"use strict";

var path    = require("path");
var helpers = require("yeoman-generator").test;


describe("gulp-plugin generator", function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, "temp"), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator("gulp-plugin:app", [
                "../../app"
            ]);
            done();
        }.bind(this));
    });

    it("creates expected files", function (done) {
        var expected = [
            // add files you expect to exist here.
            ".editorconfig",
            ".gitattributes",
            ".gitignore",
            ".jshintrc",
            ".travis.yml",
            "index.js",
            "LICENSE",
            "package.json",
            "README.md",
            "test/main.js",
            "test/fixtures/hello.txt"
        ];

		this.app.userInfo = function () {
			this.realname = "Foo Blah";
			this.email = "foo@blah.com";
			this.githubUrl = "https://github.com/blah";
		};

        helpers.mockPrompt(this.app, {
            "githubUser": "foo",
            "pluginName": "blah"
        });
        this.app.options["skip-install"] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
