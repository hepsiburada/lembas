module.exports = function () {
  var gulp = this.gulp;
  var $ = this.opts.$;
  $.browserSync.init({
    server: 'publish',
    logPrefix: 'Lembas'
  });
  gulp.watch('src/lembas.scss', ['sass:lembas']).on('change', $.browserSync.reload);
  gulp.watch('app/style/main.scss', ['sass:app']).on('change', $.browserSync.reload);
  gulp.watch('publish/**/*').on('change', $.browserSync.reload);
  gulp.watch('app/**/*.pug', ['template']).on('change', $.browserSync.reload);
};

module.exports.dependencies = ['default'];
