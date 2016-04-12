module.exports = function () {
  var gulp = this.gulp;
  var $ = this.opts.$;
  return gulp
    .src('styles/main.scss')
    .pipe($.size({
      showFiles: true
    }))
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest(this.opts.config.dist));
};
