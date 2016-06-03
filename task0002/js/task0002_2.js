/**
 * Created by Administrator on 2016-6-3.
 */
(function () {
    var now = new Date(),
        targetDate = document.getElementById('target-date');

    var currentYear = now.getFullYear(),
        currentMonth = now.getMonth(),
        currentDay = now.getDate();
    var getDate = document.getElementById('get-date');

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

    addEvent(getDate,'click',function(){
        var targetDateArr = targetDate.value.split('-');
        var targetYear = targetDateArr[0],
            targetMonth = targetDateArr[1],
            targetDay = targetDateArr[2];

        console.log(targetYear+'-'+targetMonth+'-'+targetDay+'now:'+currentYear+'-'+currentMonth+'-'+currentDay);
    });
})();
