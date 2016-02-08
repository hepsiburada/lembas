module.exports = function (grunt) {
	'use strict';

	grunt.file.defaultEncoding = "utf8";
	grunt.file.preserveBOM = false;

	grunt.initConfig({
		name: "Hepsiburada.com",
		pkg: require('./package.json'),
		base: __dirname,

		styles: {
			path: "<%= base %>/styles"
		},

		svg: {
			fontPath: "<%= base %>/content/images/svg-fonts",
			spritePath: "<%= base %>/content/images/svg-sprite"
		},

		png: {
			path: "<%= base %>/content/images/png"
		},

		font: {
			path: "<%= base %>/content/fonts"
		}
	}); 

	grunt.loadTasks('tasks');

	grunt.registerTask("style", ["sass", "cssmin"]);
	grunt.registerTask("createFont", ["webfont", "replace"]);

	grunt.registerTask('default', ['webfont', 'replace', 'sass', 'cssmin']);
}