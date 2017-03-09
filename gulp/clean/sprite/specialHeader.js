module.exports = function () {
    var config = this.opts.config;
    var $ = this.opts.$;
    return $.del([config.styles.path + '/sprites/special-header-sprite/**']);
};
