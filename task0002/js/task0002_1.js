/**
 * Created by Administrator on 2016-6-2.
 */
(function () {
    var hobby = document.getElementById('hobby'),
        hobbyButton = document.getElementById('hobby-button'),
        showHobby = document.getElementById('show-hobby'),
        wrongHint = document.getElementById('wrong-hint');

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

    function uniqArray(arr) {
        // your implement
        var myArr = [];
        var isEqual = false;
        var mi = 0;
        arr.forEach(function (element, index, array) {
            myArr.forEach(function (ele, i, a) {
                if (ele === element) {
                    isEqual = true;
                }
            });
            if (isEqual === false) {
                myArr[mi] = arr[index];
                mi++;
            }
        });
        return myArr;
    }


    addEvent(hobbyButton, 'click', function () {
        //获取值的同时用replace函数正则匹配去除hobbyValue中空元素：eg  a, ,b,c
        var hobbyValue = hobby.value.replace(/[\n\s,，、;](\s)*[\n\s,，、;]/g, ',');
        if (!hobbyValue) {
            wrongHint.innerHTML = 'Can not be empty!';
            wrongHint.style.color = '#f00';
        } else {
            var hobbyArr = uniqArray(hobbyValue.split(/[\n\s,，、;]/));
            if (hobbyArr.length > 10) {
                wrongHint.innerHTML = 'Can not be more than 10 hobbies!';
                wrongHint.style.color = '#f00';
            } else {
                wrongHint.innerHTML = null;
                var hobbyLabel = [];
                var hobbyBox = [];
                for (var i = 0 ;i < hobbyArr.length ; i++){
                    hobbyLabel[i] = document.createElement('label');
                    hobbyLabel[i].innerHTML = hobbyArr[i]+':';
                    showHobby.appendChild(hobbyLabel[i]);
                    hobbyBox[i] = document.createElement('input');
                    hobbyBox[i].type = 'checkbox';
                    showHobby.appendChild(hobbyBox[i]);
                }
                return hobbyArr;
            }
        }
    })
})();