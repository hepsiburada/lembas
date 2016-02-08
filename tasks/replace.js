module.exports = function(grunt) {

	grunt.config('replace', {
		path: {
	    src: [
	    	'<%= styles.path %>/scss/custom/fonts/_icons.scss'
	    ],
	    dest: '<%= styles.path %>/scss/custom/fonts/_icons.scss',
	    replacements: [
	    {
	      from: '../../../../content/fonts',
	      to: '#{$styleguide-webfont-path}'
	    }]
	  }
	});
	
	grunt.loadNpmTasks('grunt-text-replace');
};