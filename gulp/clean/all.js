module.exports = function () {
  return this.opts.$.del(['.publish', 'publish', 'dist',
    '.phantomcss/results', '.phantomcss/failures']);
};
