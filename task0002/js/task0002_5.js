/**
 * Created by Administrator on 2016-6-10.
 */
(function () {
    var leftOuter = document.getElementById('left'),
        rightOuter = document.getElementById('right'),
        inner = [],
        length = leftOuter.children.length,
        left1 = 0,
        top1 = 0;
    for (var i = 0; i < length; i++) {
        (function (m) {
            leftOuter.children[m].onmousedown = function () {
                console.log(m + ':' + window.getComputedStyle(leftOuter.children[m]).left + ';' + window.getComputedStyle(leftOuter.children[m]).offsetTop);
                left1 = parseInt(leftOuter.children[m].offsetLeft)+50;
                console.log(left1);
                leftOuter.children[m].style.left = left1+'px';
            }
        })(i);
    }
})();