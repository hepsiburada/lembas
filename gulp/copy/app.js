module.exports = function () {
  var gulp = this.gulp;
  return gulp.src('app/static/**')
    .pipe(gulp.dest('publish/static'));
};
