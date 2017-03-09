module.exports = function () {
	var gulp = this.gulp;
	var config = this.opts.config;

	function copyIt(path, dist) {
	return gulp.src(path)
	.pipe(gulp.dest(dist));
	}

	copyIt('src/sprites/svg-sprite/svg/*.svg', config.dist + '/svg');
	copyIt('src/sprites/png-sprite/*.png', config.dist);
};
