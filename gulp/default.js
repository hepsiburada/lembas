module.exports = function () {
  return this.opts.$.seq('eslint', ['sass', 'copy:font']);
};

module.exports.dependencies = ['clean:dist'];
