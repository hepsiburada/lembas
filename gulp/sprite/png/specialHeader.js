module.exports = function () {
    var $ = this.opts.$;
    var config = this.opts.config;
    var gulp = this.gulp;

    var fileName = 'special-header-sprite';

    return this.gulp.src([
            config.styles.path + '/images/special-header-sprite/*.png'
        ])
        .pipe($.spritesmith({
            imgName: fileName + '.png',
            cssName: fileName + '.scss'
        }))
        .pipe(gulp.dest(config.styles.path + '/sprites/' + fileName + '/'));
};

module.exports.dependencies = ['clean:sprite:specialHeader'];
