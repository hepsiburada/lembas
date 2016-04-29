module.exports = function () {
  var $ = this.opts.$;
  return $.shell('casperjs test ./test');
};
