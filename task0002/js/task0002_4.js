/**
 * Created by Administrator on 2016-6-6.
 */
(function () {
    var suggestData = ['Simon', 'Siri', 'Smith'];
    var length = suggestData.length;
    var hintLi = [];
    var content = document.getElementById('content');
    var hintUl = document.getElementById('hint');
    content.onfocus = function () {
        for (var i = 0; i < length; i++) {
            hintLi[i] = document.createElement('li');
            hintLi[i].innerHTML = suggestData[i];
            hintUl.appendChild(hintLi[i]);
        }
        hintUl.style.display = 'block';
        function fillForm() {
            for (var j = 0; j < length; j++) {
                (function (p) {
                    //这里用onclick不起作用，原因是先触发了content元素的onblur事件，ul隐藏了。
                    hintLi[p].onmousedown = function () {
                        content.value = hintLi[p].innerHTML;
                    }
                })(j);
            }
        }
        fillForm();
    }

    content.onblur = function () {
        hintUl.innerHTML = null;
        hintUl.style.display = 'none';
    }


})();