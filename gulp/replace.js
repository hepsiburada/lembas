module.exports = function () {
  var replace = require('gulp-replace');
  var fontPath = 'src/fonts/HbFont/';

  return this.gulp.src([fontPath + '*.scss'])
  .pipe(replace('./src/fonts', '#{$styleguide-webfont-path}'))
  .pipe(this.gulp.dest(fontPath));
};
