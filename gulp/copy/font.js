module.exports = function () {
  var gulp = this.gulp;
  var config = this.opts.config;
  return gulp.src('.bower/bower/lembas/dist/fonts/**')
    .pipe(gulp.dest(config.dist + '/fonts'));
};
