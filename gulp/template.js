module.exports = function () {
  var $ = this.opts.$;
  var gulp = this.gulp;
  return gulp.src(['app/**/*.pug', '!app/partials/*.pug'])
    .pipe($.size({
      showFiles: true
    }))
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest('publish'));
};
