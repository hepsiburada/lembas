// load gulp tasks
var plugins = require('gulp-load-plugins')();
plugins.seq = require('run-sequence');

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
  '**/*.json'
];


var config = {
  dist: './static'
};

// loading gulp tasks
require('gulp-task-loader')({
  dir: 'gulp',
  $: plugins,
  js: jsFiles.concat(ignoreList),
  config: config
});
