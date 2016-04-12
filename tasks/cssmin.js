module.exports = function (grunt) {
  grunt.config('cssmin', {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    },
    target: {
      files: {
        '<%= styles.path %>/css/hb-styleguide.min.css': '<%= styles.path %>/css/hb-styleguide.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
