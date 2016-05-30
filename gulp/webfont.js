module.exports = function () {
  var $ = this.opts.$;
  var svgPath = 'src/images/svg-fonts/*.svg';
  var fontName = 'HbSpecialFont';
  var fontPath = '#{$styleguide-webfont-path}/HbFont/';
  var webfontConfig = {
    fontName: fontName,
    formats: ['ttf', 'eot', 'woff', 'svg'],
    normalize: true
  };
  var webfontCssConfig = {
    fontName: fontName,
    path: 'src/common/mixins/font-icon-creator/iconfont-template.scss',
    targetPath: '_' + fontName + '.scss',
    fontPath: fontPath,
    cssClass: 'icon'
  };

  return this.gulp.src(svgPath)
  .pipe($.iconfontCss(webfontCssConfig))
  .pipe($.iconfont(webfontConfig))
  .on('glyphs', function (glyphs, options) {
    console.log(glyphs, options);
  })
  .pipe(this.gulp.dest(fontPath));
};
