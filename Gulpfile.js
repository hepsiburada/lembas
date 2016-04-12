// load gulp tasks
var plugins = require('gulp-load-plugins')();
// plugins.seq = require('run-sequence');
// plugins.del = require('del');
// plugins.merge = require('merge-stream');

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
  '**/*.js'
];

// loading gulp tasks
require('gulp-task-loader')({
  dir: 'gulp',
  $: plugins,
  js: jsFiles.concat(ignoreList)
  // css: scssFiles.concat(ignoreList),
  // ts: tsFiles.concat(ignoreList),
  // config: config,
  // args: args
});
