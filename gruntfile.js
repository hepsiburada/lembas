module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('createFont', ['webfont', 'replace']);

  grunt.registerTask('default', ['webfont', 'replace', 'sass', 'cssmin']);
};
