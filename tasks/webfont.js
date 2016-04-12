module.exports = function (grunt) {
  grunt.config('webfont', {
    icons: {
      src: '<%= svg.fontPath %>/*.svg',
      dest: '<%= font.path %>/HbFont',
      destCss: '<%= styles.path %>/scss/custom/fonts/',
      options: {
        fontFilename: 'hb-special-font',
        types: 'ttf,svg,eot',
        htmlDemo: true,
        stylesheet: 'scss',
        callback: function (filename) {
          grunt.log.write(filename + ' done');
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
};
