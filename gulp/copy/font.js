module.exports = function () {
  var gulp = this.gulp;
  var config = this.opts.config;
  return gulp.src('src/fonts/**')
    .pipe(gulp.dest(config.dist + '/fonts'));
};
