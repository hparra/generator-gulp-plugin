"use strict";
var util = require("util");
var url = require("url");
var path = require("path");
var yeoman = require("yeoman-generator");

/* jshint -W106 */
var proxy = process.env.http_proxy || process.env.HTTP_PROXY || process.env.https_proxy || process.env.HTTPS_PROXY || null;
/* jshint +W106 */
var githubOptions = {
	version: "3.0.0"
};

if (proxy) {
	githubOptions.proxy = {};
	githubOptions.proxy.host = url.parse(proxy).hostname;
	githubOptions.proxy.port = url.parse(proxy).port;
}

var GitHubApi = require("github");
var github = new GitHubApi(githubOptions);

var extractPluginName = function (_, appname) {
	var slugged = _.slugify(appname),
		match = slugged.match(/^gulp-(.+)/);

	if (match && match.length === 2) {
		return match[1].toLowerCase();
	}

	return slugged;
};

var githubUserInfo = function (name, cb) {
	github.user.getFrom({
		user: name
	}, function (err, res) {
		if (err) {
			throw err;
		}
		cb(JSON.parse(JSON.stringify(res)));
	});
};

var GulpPluginGenerator = module.exports = function GulpPluginGenerator(args, options) {//, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.on("end", function () {
		this.installDependencies({ skipInstall: options["skip-install"] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, "../package.json")));
};

util.inherits(GulpPluginGenerator, yeoman.generators.Base);

GulpPluginGenerator.prototype.askFor = function askFor() {
	var done = this.async();
	var pluginName = extractPluginName(this._, this.appname);

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [{
		name: "githubUser",
		message: "Would you mind telling me your username on GitHub?",
		default: "someuser"
	}, {
		name: "pluginName",
		message: "What\"s the base name of your gulp plugin?",
		default: pluginName
	}];

	this.prompt(prompts, function (props) {
		this.githubUser = props.githubUser;
		this.pluginName = props.pluginName;
		this.appname = "gulp-" + this.pluginName;
		this.pluginNameCamel = this._.camelize(this.pluginName);
		done();
	}.bind(this));
};

GulpPluginGenerator.prototype.userInfo = function userInfo() {
	var done = this.async();

	githubUserInfo(this.githubUser, function (res) {
		/*jshint camelcase:false */
		this.realname = res.name;
		this.email = res.email;
		this.githubUrl = res.html_url;
		done();
	}.bind(this));
};

GulpPluginGenerator.prototype.gitfiles = function gitfiles() {
	this.copy("gitattributes", ".gitattributes");
	this.copy("gitignore", ".gitignore");
};

GulpPluginGenerator.prototype.app = function app() {
	this.copy("_index.js", "index.js");
	this.copy("_package.json", "package.json");
	this.copy("_README.md", "README.md");
	this.template("_LICENSE", "LICENSE");
	this.copy("_travis.yml", ".travis.yml");

	this.copy("test/_main.js", "test/main.js");
	this.copy("test/fixtures/hello.txt", "test/fixtures/hello.txt");
	this.copy("test/expected/hello.txt", "test/expected/hello.txt");
};

GulpPluginGenerator.prototype.projectfiles = function projectfiles() {
	this.copy("editorconfig", ".editorconfig");
	this.copy("jshintrc", ".jshintrc");
};
