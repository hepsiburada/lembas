module.exports = function(grunt) {

	grunt.config('watch', {
		style: {
			files: [
				'<%= styles.path %>/scss/*.scss',
				'<%= styles.path %>/scss/**/*.scss',
				'<%= styles.path %>/scss/**/**/.scss',
				'<%= base %>/site/styles/*.scss'
			],
    	tasks: [
        'style'
      ],
      options: {
        atBegin: true
      }
		}
	});
	
	grunt.event.on('watch', function(action, filepath, target) {
	  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};