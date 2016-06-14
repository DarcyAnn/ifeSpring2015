/**
 * Created by Administrator on 2016-6-10.
 */
(function () {
    var leftOuter = document.getElementById('left'),
        rightOuter = document.getElementById('right'),
        length = leftOuter.children.length,
        originLeft = leftOuter.offsetLeft,//左边起始容器的left
        targetLeft = rightOuter.offsetLeft,//右边目标容器的left
        targetTop = rightOuter.offsetTop,
        originClientX = 0,
        originClientY = 0,
        originCount = length,
        targetCount = 0,
        itemTop = 0,//左边某个小方块的top值
        itemHeight = leftOuter.children[0].offsetHeight,
        rightItemTop = 0;//右边某个小方块的top值

    window.onload = drag;
    function drag() {
        for (var i = 0; i < length; i++) {
            (function (m) {
                leftOuter.children[m].onmousedown = function (event) {
                    if (leftOuter.children[m].offsetLeft < targetLeft) {//从左边移到右边
                        originClientX = event.clientX;
                        originClientY = event.clientY;
                        itemTop = leftOuter.children[m].offsetTop;
                        leftOuter.children[m].onmousemove = function (event) {
                            leftOuter.children[m].style.filter = 'alpha(opacity:60)';
                            leftOuter.children[m].style.opacity = 0.6;
                            leftOuter.children[m].style.left = event.clientX - originClientX + 'px';
                            leftOuter.children[m].style.top = event.clientY - originClientY + 'px';
                            if ((leftOuter.children[m].offsetLeft + 80) > targetLeft) {
                                leftOuter.children[m].style.filter = 'alpha(opacity:100)';
                                leftOuter.children[m].style.opacity = 1;
                                leftOuter.children[m].style.left = targetLeft - originLeft + 'px';
                                leftOuter.children[m].style.top = targetTop + targetCount * itemHeight - itemTop + 'px';
                                originCount--;
                                targetCount++;
                                leftOuter.children[m].onmousemove = null;
                            }
                        }
                        //下面这行有问题，再看看哇
                        leftOuter.children[m].onmouseup = function () {
                            leftOuter.children[m].onmouseover = null;
                            leftOuter.children[m].onmouseup = null;
                        }
                    } else {//从右边移到左边
                        originClientX = event.clientX;
                        originClientY = event.clientY;
                        itemTop = leftOuter.children[m].offsetTop;
                        rightItemTop = parseInt(leftOuter.children[m].style.top);
                        leftOuter.children[m].onmousemove = function (event) {
                            leftOuter.children[m].style.filter = 'alpha(opacity:60)';
                            leftOuter.children[m].style.opacity = 0.6;
                            leftOuter.children[m].style.left = targetLeft - originLeft - (originClientX - event.clientX) + 'px';
                            leftOuter.children[m].style.top =  rightItemTop + event.clientY - originClientY + 'px';
                            if (leftOuter.children[m].offsetLeft < (originLeft + 80)) {
                                leftOuter.children[m].style.filter = 'alpha(opacity:100)';
                                leftOuter.children[m].style.opacity = 1;
                                leftOuter.children[m].style.left = 0;
                                leftOuter.children[m].style.top = 0;
                                originCount++;
                                targetCount--;
                                leftOuter.children[m].onmousemove = null;
                            }
                        }
                        leftOuter.children[m].onmouseup = function () {
                            leftOuter.children[m].onmouseover = null;
                            leftOuter.children[m].onmouseup = null;
                        }
                    }
                };
            })(i);
        }
    }
})();