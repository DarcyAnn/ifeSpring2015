/**
 * Created by Administrator on 2016-6-4.
 */
(function () {
    var carousel = document.getElementById('carousel'),
        item = document.getElementById('item');
    var imgWidth = parseInt(window.getComputedStyle(carousel.children[0]).width);
    var timer = 0;
    function addEvent(element, event, listener) {
        // your implement
        if (element.addEventListener) {
            element.addEventListener(event, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        } else {
            element['on' + event] = listener;
        }
    }

    window.onresize = function () {
        imgWidth = parseInt(window.getComputedStyle(carousel.children[0]).width);
    };

    //鼠标移入切换
    function changeImage() {

        for (var p = 0; p < item.children.length; p++) {
            (function (i) {
                item.children[i].onmouseover = function () {
                    clearTimeout(timer);
                    carousel.style.left = -(imgWidth * i) + 'px';
                    for(var n = 0 ; n < item.children.length ; n++){
                        item.children[n].style.backgroundColor = '#fff';
                    }
                    item.children[i].style.backgroundColor = '#848484';
                };

                item.children[i].onmouseout = function () {
                    clearTimeout(timer);
                    b = i+1;
                    timer = setTimeout(function () {
                        autoChange(b);
                    },2500);
                };
            })(p);
        }
    }

    window.onload = changeImage();

    //自动轮播
    function autoChange(count){
        clearTimeout(timer);
        carousel.style.left = -(imgWidth * (count % 3)) + 'px';
        for(var m = 0 ; m < item.children.length ; m++){
            item.children[m].style.backgroundColor = '#fff';
        }
        item.children[count%3].style.backgroundColor = '#848484';
        timer = setTimeout(function () {
            var q = count + 1;
            autoChange(q);
        },2500);
    }

    timer = setTimeout(function () {
        autoChange(0);
    },2500);

})();