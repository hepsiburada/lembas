module.exports = function () {
  return this.opts.$.seq('eslint', ['sass:lembas', 'sass:app', 'copy:font'], 'publish');
};

module.exports.dependencies = ['clean:all'];
