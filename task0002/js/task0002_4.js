/**
 * Created by Administrator on 2016-6-6.
 */
(function () {
    var suggestData = ['Simon', 'Siri', 'Smith'];
    var length = suggestData.length;
    var hintLi = [];
    var content = document.getElementById('content');
    var hintUl = document.getElementById('hint');
    var bool = false;
    content.onfocus = function () {
        for (var i = 0; i < length; i++) {
            hintLi[i] = document.createElement('li');
            hintLi[i].innerHTML = suggestData[i];
            hintUl.appendChild(hintLi[i]);
        }
        hintUl.style.display = 'block';
        bool = true;
    }
    content.onblur = function () {
        hintUl.innerHTML = null;
        hintUl.style.display = 'none';
    }


    if (bool) {
        for (var j = 0; j < length; j++) {
            (function (p) {
                hintUl.onclick = function () {
                    content.value = hintLi[p].innerHTML;
                }
            })(j);
        }
    }


})();