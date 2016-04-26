module.exports = function () {
  return this.opts.$.seq('eslint', ['sass:lembas', 'sass:app', 'copy:font']);
};

module.exports.dependencies = ['clean:dist'];
