module.exports = function () {
  var $ = this.opts.$;
  var config = this.opts.config;
  var gulp = this.gulp;

  var fileName = 'svg-sprite';

  return this.gulp.src([
      config.styles.path + '/images/svg-sprite/*.svg'
  ])
  .pipe($.svgSprite({
    log: 'verbose',
    shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    view: {
      prefix: '%%svg-%s',
      dest: '',
      render: {
        scss: {
          dest: fileName + '.scss'
        }
      }
    }
  }
  }))
  .pipe(gulp.dest(config.styles.path + '/sprites/' + fileName + '/'));
};

module.exports.dependencies = ['clean:sprite:svg'];
