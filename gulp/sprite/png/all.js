module.exports = function () {
    var $ = this.opts.$;
    var config = this.opts.config;
    var gulp = this.gulp;

    var fileName = 'png-sprite';

    return this.gulp.src([
            config.styles.path + '/images/png-sprite/*.{png,jpg}'
        ])
        .pipe($.spritesmith({
            retinaSrcFilter: './src/images/png-sprite/*@2x.png',
            imgName: fileName + '.png',
            retinaImgName: fileName + '@2x.png',
            cssName: fileName + '.scss'
        }))
        .pipe(gulp.dest(config.styles.path + '/sprites/' + fileName + '/'));

};

module.exports.dependencies = ['clean:sprite:png'];
