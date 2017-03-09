module.exports = function () {
  var $ = this.opts.$;
  var config = this.opts.config;
  var gulp = this.gulp;

  return this.gulp.src([
    config.dist + '/images/**/*.{png,jpg,jpeg}'
  ])
  .pipe($.tinypng({
    key: 'DuEjgcUctRP0Ak_uvoYZmHy0z1vtlyMp',
    log: true
  }))
  .pipe(gulp.dest(config.dist + '/images/'));
};
