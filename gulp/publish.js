module.exports = function () {
  return this.opts.$.seq('template', ['copy:app', 'sass:app']);
};

module.exports.dependencies = ['clean:publish'];
