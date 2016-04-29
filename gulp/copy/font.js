module.exports = function () {
  var gulp = this.gulp;
  var config = this.opts.config;
  return gulp.src('src/fonts/**/*.{eot,svg,woff,ttf}')
    .pipe(gulp.dest(config.dist + '/fonts'));
};
