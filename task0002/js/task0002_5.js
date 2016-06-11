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
        pointLeft = 0,//鼠标指针与被拖动元素左边界的距离
        pointTop = 0,
        originClientX = 0,
        originClientY = 0;
    for (var i = 0; i < length; i++) {
        (function (m) {
            leftOuter.children[m].onmousedown = function (event) {
                originClientX = event.clientX;
                originClientY = event.clientY;
                console.log('clientX:'+event.clientX+';offsetLeft:'+leftOuter.children[m].offsetLeft+';pointLeft:'+pointLeft);
                console.log('clientY:'+event.clientY+';offsetTop:'+leftOuter.children[m].offsetTop+';pointTop:'+pointTop);

                leftOuter.children[m].onmousemove = function (event) {
                    leftOuter.children[m].style.left = event.clientX - originClientX +'px';
                    leftOuter.children[m].style.top = event.clientY - originClientY +'px';
                    console.log('clientX:'+event.clientX+';targetLeft:'+targetLeft);
                    if((leftOuter.children[m].offsetLeft + 80) > targetLeft){
                        leftOuter.children[m].style.left = targetLeft - originLeft + 'px';
                        leftOuter.children[m].onmousemove = null;
                    }
                };

            };
            leftOuter.children[m].onmouseup = function () {
                //leftOuter.children[m].onmousedown = null;
                leftOuter.children[m].onmouseover = null;
            };

        })(i);
    }
})();