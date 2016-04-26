module.exports = function () {
  return this.gulp.src('app/**/*')
    .pipe(this.opts.$.ghPages());
};

module.exports.dependencies = ['default'];
