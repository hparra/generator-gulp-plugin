# <%= appname %> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

<%= appname %> is a plugin for [gulp](https://github.com/wearefractal/gulp).

## Usage

<%= appname %> does only one thing very well.

```javascript
var <%= pluginName %> = require("<%= appname %>");

gulp.src("./src/*.txt")
  .pipe(<%= pluginName %>("I'm appended to file!"))
  .pipe(gulp.dest("./dist"));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/<%= appname %>
[npm-image]: https://badge.fury.io/js/<%= appname %>.png

[travis-url]: http://travis-ci.org/<%= githubUser %>/<%= appname %>
[travis-image]: https://secure.travis-ci.org/<%= githubUser %>/<%= appname %>.png?branch=master

[depstat-url]: https://david-dm.org/<%= githubUser %>/<%= appname %>
[depstat-image]: https://david-dm.org/<%= githubUser %>/<%= appname %>.png
