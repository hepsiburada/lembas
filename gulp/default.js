module.exports = function () {
  return this.opts.$.seq('eslint', ['sass:lembas', 'sass:app', 'copy:font', 'copy:sprite'], 'publish');
};

module.exports.dependencies = ['clean:all'];
