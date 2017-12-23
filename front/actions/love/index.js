/**
 * 构造函数
 * @param {Object} target jquery选中对象
 * @constructor
 */
function BearLove(target) {
    if (target === void 1 || target.length === 0) {
        throw new Error('target not found');
    }
    this.$target = target;
    this.codes = $.trim(this.$target.html()).split("\n");
    this.$target.html('').show();
    this.writenCode = '';
    this.writeDuration = 75;
}

/**
 * 是否还有内容未打印完
 * @returns {boolean}
 */
BearLove.prototype.hasRemainCode = function () {
    return this.codes.length > 0;
};

/**
 * 当前代码是否输出完毕了
 * @returns {boolean}
 */
BearLove.prototype.currentCodeFinished = function () {
    return this.currentCode === void 1 || this.currentCode === '';
};

/**
 * 获取当前需要输出的代码
 * @returns {string}
 */
BearLove.prototype.getCurrentCode = function () {
    if (this.hasRemainCode() && this.currentCodeFinished()) {
        this.currentCode = this.codes.shift();
    }

    return this.currentCode;
};

/**
 * 获取当前打印词
 * @returns {string}
 */
BearLove.prototype.getCurrentWord = function () {
    var letter = this.getCurrentCode().charAt(0);
    if (letter === '<') {
        letter = this.getCurrentCode().substr(0, this.getCurrentCode().indexOf('>') + 1);
        this.currentCode = this.getCurrentCode().substring(this.getCurrentCode().indexOf('>') + 1, this.getCurrentCode().length);
    } else {
        this.currentCode = this.getCurrentCode().substring(1, this.getCurrentCode().length);
    }

    return letter || false;
};

/**
 * 打印代码，才用递归配合setTimeout
 */
BearLove.prototype.type = function () {
    var word = this.getCurrentWord();
    if (word === false) {
        return console.log('finished');
    }
    this.writenCode += word;
    this.$target.html(this.writenCode + '_');
    var self = this;
    setTimeout(function () {
        self.typePause();
    }, this.writeDuration);
};

/**
 * 打印暂停，造成光标闪烁的效果
 */
BearLove.prototype.typePause = function () {
    this.$target.html(this.writenCode);
    var self = this;
    setTimeout(function () {
        self.type();
    }, this.writeDuration);
};

new BearLove($('#code')).type();