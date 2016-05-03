module.exports = function () {
  var gulp = this.gulp;
  return gulp.src('dist/fonts/**/*.{eot,svg,woff,ttf}')
    .pipe(gulp.dest('publish/static/fonts'));
};
