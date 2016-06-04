/**
 * Created by Administrator on 2016-6-4.
 */
(function () {
    var carousel = document.getElementById('carousel'),
        item = document.getElementById('item');
    var imgWidth = window.getComputedStyle(carousel.children[0]).width;

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

    //鼠标移入切换
    function changeImage() {
        imgWidth = parseInt(window.getComputedStyle(carousel.children[0]).width);
        window.onresize = function () {
            imgWidth = parseInt(window.getComputedStyle(carousel.children[0]).width);
        };

        for (var i = 0; i < item.children.length; i++) {
            (function (i) {
                item.children[i].onmouseover = function () {
                    carousel.style.left = -(imgWidth * i) + 'px';
                    console.log(carousel.style.left);
                    //carousel.children[i].style.zIndex = 3;
                }
            })(i);
        }
    }

    window.onload = changeImage();
    //自动轮播

})();