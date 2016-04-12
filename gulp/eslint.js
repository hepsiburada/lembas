module.exports = function () {
  var $ = this.opts.$;
  return this.gulp.src(this.opts.js)
    .pipe($.size())
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.formatEach());
};
