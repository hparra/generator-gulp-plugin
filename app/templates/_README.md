(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# <%= appname %> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> <%= pluginName %> plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `<%= appname %>` as a development dependency:

```shell
npm install --save-dev <%= appname %>
```

Then, add it to your `gulpfile.js`:

```javascript
var <%= pluginName %> = require("<%= appname %>");

gulp.src("./src/*.ext")
	.pipe(<%= pluginName %>({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### <%= pluginName %>(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/<%= appname %>
[npm-image]: https://badge.fury.io/js/<%= appname %>.png

[travis-url]: http://travis-ci.org/<%= githubUser %>/<%= appname %>
[travis-image]: https://secure.travis-ci.org/<%= githubUser %>/<%= appname %>.png?branch=master

[depstat-url]: https://david-dm.org/<%= githubUser %>/<%= appname %>
[depstat-image]: https://david-dm.org/<%= githubUser %>/<%= appname %>.png
