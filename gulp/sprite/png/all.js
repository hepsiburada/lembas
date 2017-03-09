module.exports = function () {
    var $ = this.opts.$;
    var config = this.opts.config;
    var gulp = this.gulp;

    var fileName = 'png-sprite';

    return this.gulp.src([
            config.styles.path + '/images/png-sprite/*.{png,jpg}'
        ])
        .pipe($.spritesmith({
            imgName: fileName + '.png',
            cssName: fileName + '.scss'
        }))
        .pipe(gulp.dest(config.styles.path + '/sprites/' + fileName + '/'));

};

module.exports.dependencies = ['clean:sprite:png'];
