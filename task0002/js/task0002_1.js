/**
 * Created by Administrator on 2016-6-2.
 */
(function(){
    var hobby = document.getElementById('hobby'),
        hobbyButton = document.getElementById('hobby-button');

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


    addEvent(hobbyButton,'click', function () {
        var hobbyValue = hobby.value;
        var hobbyArr = uniqArray(hobbyValue.split(','));
        console.log(hobbyArr);
        return hobbyArr;
    })
} )();