module.exports = function (callback) {
    var $ = this.opts.$;
    $.seq(['sprite:png:all', 'sprite:png:specialHeader', 'sprite:svg'], 'copy:sprite', callback);
};
