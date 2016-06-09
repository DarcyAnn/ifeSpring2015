/**
 * Created by Administrator on 2016-6-6.
 */
(function () {
    var suggestData = ['Simon', 'Siri', 'Smith','Steven'];
    var length = suggestData.length;
    var hintLi = [];
    var content = document.getElementById('content');
    var hintUl = document.getElementById('hint');
    var focusLi = 0,
        key38Count = 0,
        key40Count = 0;
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

        content.onkeydown = function (event) {
            //按下键盘向上的键↑
            if (event.keyCode == 38) {
                if (key38Count == 0 && key40Count == 0) {
                    for (var q = 0; q < length; q++) {
                        hintLi[q].style.backgroundColor = '#fff';
                    }
                    focusLi = length - 1;
                    hintLi[focusLi].style.backgroundColor = '#EAEAEA';
                    content.value = hintLi[focusLi].innerHTML;
                } else {
                    if (focusLi - 1 >= 0 && focusLi - 1 < length - 1) {
                        for (var q = 0; q < length; q++) {
                            hintLi[q].style.backgroundColor = '#fff';
                        }
                        focusLi--;
                        hintLi[focusLi].style.backgroundColor = '#EAEAEA';
                        content.value = hintLi[focusLi].innerHTML;
                    } else if (focusLi - 1 < 0) {
                        for (var q = 0; q < length; q++) {
                            hintLi[q].style.backgroundColor = '#fff';
                        }
                        focusLi = length - 1;
                        hintLi[focusLi].style.backgroundColor = '#EAEAEA';
                        content.value = hintLi[focusLi].innerHTML;
                    }
                }
                key38Count++;
            }
            //按下键盘向下的键↓
            else if (event.keyCode == 40) {
                if (key40Count == 0 && key38Count == 0) {
                    for (var q = 0; q < length; q++) {
                        hintLi[q].style.backgroundColor = '#fff';
                    }
                    hintLi[focusLi].style.backgroundColor = '#EAEAEA';
                    content.value = hintLi[focusLi].innerHTML;
                } else {
                    if (focusLi >= 0 && focusLi < length - 1) {
                        for (var q = 0; q < length; q++) {
                            hintLi[q].style.backgroundColor = '#fff';
                        }
                        focusLi++;
                        hintLi[focusLi].style.backgroundColor = '#EAEAEA';
                        content.value = hintLi[focusLi].innerHTML;
                    } else if (focusLi >= length - 1) {
                        for (var q = 0; q < length; q++) {
                            hintLi[q].style.backgroundColor = '#fff';
                        }
                        focusLi = -1;
                        focusLi++;
                        hintLi[focusLi].style.backgroundColor = '#EAEAEA';
                        content.value = hintLi[focusLi].innerHTML;
                    }
                }
                key40Count++;
            }
            //按下回车键
            else if(event.keyCode == 13){
                content.onblur();
                content.onkeydown = null;
            }
        }
    }

    content.onblur = function () {
        hintUl.innerHTML = null;
        hintUl.style.display = 'none';
    }


})();