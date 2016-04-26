module.exports = function () {
  var gulp = this.gulp;
  var $ = this.opts.$;
  var config = this.opts.config;
  var dist = config.dist + '/css';
  return gulp
    .src(this.opts.sass)
    .pipe($.size({
      showFiles: true
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(dist))
    .pipe($.cleanCss({
      compatibility: 'ie8',
      shorthandCompacting: false,
      roundingPrecision: -1
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dist))
    .pipe($.browserSync.reload({
      stream: true
    }));
};
