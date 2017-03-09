// load gulp tasks
var plugins = require('gulp-load-plugins')();
plugins.seq = require('run-sequence');
plugins.del = require('del');
plugins.merge = require('merge-stream');
plugins.browserSync = require('browser-sync').create();

// ignoring some folders
var ignoreList = [
  '!node_modules/**',
  '!packages/**',
  '!.bower/**',
  '!**/bin/**',
  '!**/build/**',
  '!**/stub/**'];

// example js files
var jsFiles = [
  '**/*.js',
  '!**/prettify/**/*.js',
  '**/*.json'
];

// example sass files
var sassFiles = [
  'src/lembas.scss'
];

var config = {
  dist: './dist',
  styles: {
    path: 'src'
  }
};

// loading gulp tasks
require('gulp-task-loader')({
  dir: 'gulp',
  $: plugins,
  js: jsFiles.concat(ignoreList),
  sass: sassFiles.concat(ignoreList),
  config: config
});
