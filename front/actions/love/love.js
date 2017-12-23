var $code = $('#code');
var codes = $.trim($code.html()).split("\n");
$code.html('').show();

var writeCode = '';
var currentCode;

/**
 * 写入
 */
function write() {
    if (!currentCode) {
        if (codes.length === 0) {
            return console.log('finished');
        }
        currentCode = codes.shift();//<span class="comments">/**</span>
    }

    var letter = currentCode.charAt(0);
    if (letter === '<') {
        letter = currentCode.substr(0, currentCode.indexOf('>') + 1);
        currentCode = currentCode.substring(currentCode.indexOf('>') + 1, currentCode.length);
    } else {
        currentCode = currentCode.substring(1, currentCode.length);
    }

    writeCode += letter;
    $code.html(writeCode + '_');
    setTimeout(writePause, 75);
}

/**
 * 写入暂停
 */
function writePause() {
    $code.html(writeCode);
    setTimeout(write, 75);
}

// 开始写入
write();
