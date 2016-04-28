module.exports = function () {
  return this.opts.$.seq('eslint', 'publish', ['sass:lembas', 'sass:app', 'copy:font']);
};

module.exports.dependencies = ['clean:all'];
