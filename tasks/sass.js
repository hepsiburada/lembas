module.exports = function (grunt) {
  grunt.config('sass', {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        '<%= styles.path %>/css/hb-styleguide.css': '<%= styles.path %>/scss/hb-styleguide.scss',
        '<%= base %>/site/styles/main.css': '<%= base %>/site/styles/main.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
