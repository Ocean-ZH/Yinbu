'use strict';

//获取DPR，设置视口
function metaDPR() {
    var iScale = 1 / window.devicePixelRatio;
    var head = document.querySelector('head');
    var metaArr = document.querySelectorAll('meta');
    var metaFlag = true;

    for (var i = 0; i < metaArr.length; i++) {
        if (metaArr[i].name === 'viewport') {
            metaArr[i]['content'] = 'width=device-width, user-scalable=no, initial-scale=' + iScale + ', maximum-scale=' + iScale + ', minimum-scale=' + iScale;
            metaFlag = false;
        }
    }
    if (metaFlag) {
        var metaVP = document.createElement('meta');
        metaVP.name = 'viewport';
        metaVP.content = 'width=device-width, user-scalable=no, initial-scale=' + iScale + ', maximum-scale=' + iScale + ', minimum-scale=' + iScale;
        head.appendChild(metaVP);
    }

    return iScale;
}

//获取文档宽高，设置rem
function getWinSize() {
    var iWidth = document.documentElement.clientWidth;
    var iHeight = document.documentElement.clientHeight;
    var htmlFont = iWidth / 10;
    document.getElementsByTagName('html')[0].style.fontSize = htmlFont + 'px';
    return {
        width: iWidth,
        height: iHeight,
    };
}

var iScale = metaDPR();
var winSize = getWinSize();
console.log('iWidth=' + winSize.width);
console.log('iHeight=' + winSize.height);

window.onresize = function () {
    getWinSize();
}