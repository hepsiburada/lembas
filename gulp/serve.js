module.exports = function () {
  var gulp = this.gulp;
  var $ = this.opts.$;
  $.browserSync.init({
    server: 'app',
    logPrefix: 'Lembas'
  });
  gulp.watch('src/lembas.scss', ['sass:lembas']).on('change', $.browserSync.reload);
  gulp.watch('app/style/main.scss', ['sass:app']).on('change', $.browserSync.reload);
  gulp.watch('app/**/*').on('change', $.browserSync.reload);
};

module.exports.dependencies = ['default'];
