# <%= appname %>

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
