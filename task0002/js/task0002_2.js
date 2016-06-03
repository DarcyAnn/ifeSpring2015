/**
 * Created by Administrator on 2016-6-3.
 */
(function () {
    var targetDate = document.getElementById('target-date');
    var getDate = document.getElementById('get-date');
    var diffDate = document.getElementById('difference');
    var diffTime;

    function addEvent(element, event, listener) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        } else {
            element['on' + event] = listener;
        }
    }

    addEvent(getDate, 'click', function () {
        diffTime = setTimeout(getDiff, 1000)
    });

    function getDiff() {
        var targetDateArr = targetDate.value.split('-');
        var targetYear = targetDateArr[0],
            targetMonth = targetDateArr[1],
            targetDay = targetDateArr[2];
        var targetMSecond = Date.parse(new Date(targetYear, targetMonth - 1, targetDay, 0, 0, 0));
        var nowMSecond = Date.now();
        var diff = targetMSecond - nowMSecond;
        var diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
        var diffHour = Math.floor((diff - diffDay * 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var diffMinute = Math.floor((diff - diffDay * 1000 * 60 * 60 * 24 - diffHour * 1000 * 60 * 60) / (1000 * 60));
        var diffSecond = Math.floor((diff - diffDay * 1000 * 60 * 60 * 24 - diffHour * 1000 * 60 * 60 - diffMinute * 1000 * 60) / 1000);
        if (diffDay < 0 || diffHour < 0 || diffMinute < 0 || diffSecond < 0 || (diffDay == 0 && diffHour == 0 && diffMinute == 0 && diffSecond == 0)) {
            clearTimeout(diffTime);
            diffDate.innerHTML = '距离' + targetYear + '年' + targetMonth + '月' + targetDay + '日还有' + 0 + '天' + 0 + '小时' + 0 + '分' + 0 + '秒';
            console.log('距离' + targetYear + '年' + targetMonth + '月' + targetDay + '日还有' + 0 + '天' + 0 + '小时' + 0 + '分' + 0 + '秒');
        } else {
            diffDate.innerHTML = '距离' + targetYear + '年' + targetMonth + '月' + targetDay + '日还有' + diffDay + '天' + diffHour + '小时' + diffMinute + '分' + diffSecond + '秒';
            console.log('距离' + targetYear + '年' + targetMonth + '月' + targetDay + '日还有' + diffDay + '天' + diffHour + '小时' + diffMinute + '分' + diffSecond + '秒');
            diffTime = setTimeout(getDiff, 1000);
        }
    }
})();
