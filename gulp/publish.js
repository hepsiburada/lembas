module.exports = function () {
  return this.opts.$.seq('template', 'copy:dist', ['copy:app', 'sass:app']);
};

module.exports.dependencies = ['clean:publish'];
