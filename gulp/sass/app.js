module.exports = function () {
  var $ = this.opts.$;
  return this.gulp
    .src('app/styles/main.scss')
    .pipe($.size({
      showFiles: true
    }))
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(this.gulp.dest('publish/static/'));
};

