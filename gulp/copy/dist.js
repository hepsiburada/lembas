module.exports = function () {
	var gulp = this.gulp;

	function copyIt (path, dist) {
		return gulp.src(path)
		.pipe(gulp.dest(dist));
	}

	copyIt('dist/fonts/**/*.{eot,svg,woff,ttf}', 'publish/static/fonts');
	copyIt('dist/svg/*.svg', 'publish/static/svg');
	copyIt('dist/*.png', 'publish/static/');
};
