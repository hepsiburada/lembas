module.exports = function () {
  return this.gulp.src('publish/**/*')
    .pipe(this.opts.$.ghPages());
};

module.exports.dependencies = ['default'];
