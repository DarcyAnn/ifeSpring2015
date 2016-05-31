/**
 * Created by Administrator on 2016-5-25.
 */

/*
 2. JavaScript数据类型及语言基础
 */
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    var result = typeof arr;
    if (result == 'object' && arr instanceof Array) {
        return true;
    } else {
        return false;
    }
}


// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    var result = typeof fn;
    if (result == 'function') {
        return true;
    } else {
        return false;
    }
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var tar = tar || {};
    for (var i in src) {
        if (typeof src[i] === 'object') {
            if (src[i] instanceof Array === true) {
                tar[i] = [];
            } else {
                tar[i] = {};
            }
            tar[i] = cloneObject(src[i]);
        } else {
            tar[i] = src[i];
        }
    }
    return tar;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);//2
console.log(abObj.b.b1[0]);//Hello

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
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

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    var isSpaceS = true;
    var isSpaceE = true;
    var i = 0;
    var j = 0;
    var newStr = '';
    if (str[0] === ' ') {
        for (i = 1; i < str.length; i++) {
            if (str[i] !== ' ') {
                isSpaceS = false;
                break;
            }
        }
        newStr = str.slice(i);
    }
    if (newStr[newStr.length - 1] === ' ') {
        for (j = newStr.length - 2; j > 0; j--) {
            if (newStr[j] !== ' ') {
                isSpaceE = false;
                break;
            }
        }
        newStr = newStr.slice(0, j + 1);
    }
    return newStr;
}

//test
var myString = '  lala  ';
console.log(myString);
console.log(simpleTrim(myString));//lala

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    var re = /[(^\s*),(\s*$)]/g;
    var newStr = str.replace(re, '');
    return newStr;
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'


// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output1(item) {
    console.log(item)
}
each(arr, output1);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output2(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output2);  // 0:java, 1:c, 2:php, 3:html


// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var count = 0;
    for (x in obj) {
        count++;
    }
    return count;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

//学习正则表达式，在util.js完成以下代码
// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
    var re = /^\w+(\.\w+)*@\w+([\.]\w+)+$/;
    return re.test(emailStr);
}
console.log(isEmail('abx123@qq123.com'));
console.log(isEmail('abx1@23@qq1.23.com'));

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    var re = /1[3,5,7,8,9](\d{9})/g;
    return re.test(phone);
}

console.log(isMobilePhone('18800000000'));
console.log(isMobilePhone('10000000000'));
console.log(isMobilePhone('188000'));


/*
 3. DOM
 */
//对元素中className的增删改查
var myEle = document.getElementById("number1");
var myEle2 = document.getElementById("number2");
var addSpan = document.getElementById("addSpan")

//查找element中是否有名为exitClassName的样式
//方法一、用正则表达式
function hasClass1(element, exitClassName) {
    var regexp = new RegExp('(\\s|^)' + exitClassName + '(\\s|$)');
    return regexp.test(element.className);
}

//方法二、用正则表达式
function hasClass2(element, exitClassName) {
    var regexp = new RegExp('( |)' + exitClassName);
    return regexp.test(element.className)
}

//方法三、用indexOf()
function hasClass3(element, exitClassName) {
    if (element.className.indexOf(exitClassName) === -1) {
        return false;
    } else {
        return true;
    }
}

console.log(myEle.className);
console.log('exit?' + hasClass2(myEle, 'abc'))//true;
console.log('exit?' + hasClass2(myEle, 'mn'))//false;

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    if (element.className) {
        element.className = element.className + " " + newClassName;
    } else {
        element.className = newClassName;
    }
}

addClass(myEle, "def");
addClass(myEle, "abc2");
console.log(myEle.className);

// 移除element中的样式oldClassName
function removeClass1(element, oldClassName) {
    // your implement
    var reg = new RegExp('\\s|^' + oldClassName + '\\s|$');
    element.className = element.className.replace(reg, ' ');
}

function removeClass2(element, oldClassName) {
    var reg = new RegExp('\\s|^' + oldClassName + '\\s|$');
    var arr = element.className.split(reg);
    element.className = arr.join(' ');
}

removeClass2(myEle, "abc");
console.log(myEle.className);

// 替换element中的样式oldClassName为newClassName
function replaceClass(element, oldClassName, newClassName) {
    if (hasClass1(element, oldClassName)) {
        removeClass1(element, oldClassName);
        addClass(element, newClassName);
    }
    else addClass(element, newClassName);
}

replaceClass(myEle, 'abc', 'hahaha');
console.log('replaceClass:' + myEle.className);


// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    if (element.parentNode == siblingNode.parentNode) {
        return true;
    } else {
        return false;
    }
}

console.log(isSiblingNode(myEle, myEle2));
console.log(isSiblingNode(myEle, addSpan));


// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var x = element.offsetLeft;
    var y = element.offsetTop;
    if (element.offsetParent) {
        x += getPosition(element.offsetParent).x;
        y += getPosition(element.offsetParent).y
    }
    var pos = {"x": x, "y": y}
    return pos;
}

console.log(getPosition(myEle));
console.log(getPosition(addSpan));

//接下来挑战一个mini $，它和之前的$是不兼容的，它应该是document.querySelector的功能子集，
// 在不直接使用document.querySelector的情况下，在你的util.js中完成以下任务：

// 实现一个简单的Query
//

function $(selector) {
    var element = document.body;
    var result1 = 0;
    var result2 = 0;

    function iterator(element, selector) {
        var eleChild = element.children;
        if (eleChild.length != 0) {
            if (selector.charAt(0) === '#' && selector.indexOf('.') == -1) {
                for (var i = 0; i < eleChild.length; i++) {
                    if (eleChild[i].children.length == 0) {
                        if (eleChild[i].id === selector.substr(1)) {
                            result1 = eleChild[i];
                            return result1;
                        }
                    } else {
                        if (eleChild[i].id === selector.substr(1)) {
                            result1 = eleChild[i]
                            return result1;
                        } else {
                            iterator(eleChild[i], selector);
                        }
                    }
                }
            }

            if (selector.charAt(0) === '.') {
                for (var i = 0; i < eleChild.length; i++) {
                    if (eleChild[i].children.length == 0) {
                        if (hasClass1(eleChild[i], selector.substr(1))) {
                            result1 = eleChild[i];
                            return result1;
                        }
                    } else {
                        if (hasClass1(eleChild[i], selector.substr(1))) {
                            result1 = eleChild[i];
                            return result1;
                        } else {
                            iterator(eleChild[i], selector);
                        }
                    }
                }
            }

            if (/\w/i.test(selector.charAt(0))) {
                for (var i = 0; i < eleChild.length; i++) {
                    if (eleChild[i].children.length == 0) {
                        if (eleChild[i].tagName === selector.toUpperCase()) {
                            result1 = eleChild[i]
                            return result1;
                        }
                    } else {
                        if (eleChild[i].tagName === selector.toUpperCase()) {
                            result1 = eleChild[i]
                            return result1;
                        } else {
                            iterator(eleChild[i], selector.toUpperCase());
                        }
                    }
                }
            }

            if (selector.indexOf(']') != -1 && selector.indexOf('=') == -1) {
                for (var i = 0; i < eleChild.length; i++) {
                    if (eleChild[i].children.length == 0) {
                        if (eleChild[i].getAttribute(selector.substr(1, selector.length - 2))) {
                            result1 = eleChild[i];
                            return result1;
                        }
                    } else {
                        if (eleChild[i].getAttribute(selector.substr(1, selector.length - 2))) {
                            result1 = eleChild[i];
                            return result1;
                        } else {
                            iterator(eleChild[i], selector);
                        }
                    }
                }
            }

            if (selector.indexOf(']') != -1 && /\=/.test(selector)) {
                var selectorOri = selector.substr(1, selector.length - 2);
                var selectorArr = selectorOri.split('=');
                var selectorName = selectorArr[0];
                var selectorValue = selectorArr[1];
                for (var i = 0; i < eleChild.length; i++) {
                    if (eleChild[i].children.length == 0) {
                        if (eleChild[i].getAttribute(selectorName)) {
                            if (eleChild[i].getAttribute(selectorName) === selectorValue) {
                                result1 = eleChild[i];
                                return result1;
                            }
                        }
                    } else {
                        if (eleChild[i].getAttribute(selectorName)) {
                            if (eleChild[i].getAttribute(selectorName) === selectorValue) {
                                result1 = eleChild[i];
                                return result1;
                            }
                        } else {
                            iterator(eleChild[i], selector);
                        }
                    }
                }
            }

            if (selector.charAt(0) === '#' && selector.indexOf('.') != -1) {
                var classIndex = selector.indexOf('.');
                for (var i = 0; i < eleChild.length; i++) {
                    if (eleChild[i].children.length == 0) {
                        if (eleChild[i].id === selector.substring(1, classIndex - 1)) {
                            result2 = eleChild[i];
                            iterator(result2, selector.substr(classIndex));
                        }
                    } else {
                        if (eleChild[i].id === selector.substring(1, classIndex - 1)) {
                            result2 = eleChild[i];
                            iterator(result2, selector.substr(classIndex));
                        } else {
                            iterator(eleChild[i], selector);
                        }
                    }
                }
            }

        }
    }

    iterator(element, selector)
    return result1;
    //if (selector.charAt(0) === '#'){
    //    return document.getElementById(selector.substr(1));
    //} else if(selector.charAt(0) === '.') {
    //    return document.getElementsByClassName(selector.substr(1)[0])
    //} else if(/\w/.test(selector.charAt(0))){
    //    return document.getElementsByTagName(selector)[0];
    //} else if (/^\[[^=]/.test(selector)) {
    //    //return document.getElementsByName()
    //}
}


// 可以通过id获取DOM对象，通过#标示，例如
console.log($("#adom1")); // 返回id为adom1的DOM对象
console.log($("#adom2")); // 返回id为adom2的DOM对象


// 可以通过样式名称获取DOM对象，例如
console.log($(".classa")); // 返回第一个样式定义包含classa的对象
console.log($(".classb")); // 返回第一个样式定义包含classb的对象

// 可以通过tagName获取DOM对象，例如
console.log($("a")); // 返回第一个<a>对象
console.log($("div")); // 返回第一个<div>对象

// 可以通过attribute匹配获取DOM对象，例如
console.log($("[data-log1]")); // 返回第一个包含属性data-log1的对象
console.log($("[data-log2]")); // 返回第一个包含属性data-log2的对象

console.log('————————————');

console.log($("[data-time=2015]")); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
console.log($("#hiahia .catch-me")); // 返回id为hiahia的DOM所包含的所有子节点中，第一个样式定义包含catch-me的对象

/*
 4. 事件
 */
// 给一个element绑定一个针对event事件的响应，响应函数为listener
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

// 例如：
function clicklistener(event) {
    event = event | window.event;
    alert(event.type);
}
addEvent($("#doma"), "click", clicklistener());

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if (element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    } else if (element.detachEvent) {
        element.detachEvent('on' + event, listener);
    } else {
        element['on' + event] = listener;
    }
}

//接下来我们实现一些方便的事件方法

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element, 'click', listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    if (this.keyCode == 13) { //？
        addEvent(element, 'keypress', listener);
    }
}

$.on = function (element, event, listener) {
    addEvent(element, event, listener);
};
$.un = function (element, event, listener) {
    removeEvent(element, event, listener);
};
$.click = function (element, listener) {
    addClickEvent(element, listener);
};
$.enter = function (element, listener) {
    addEnterEvent(element, listener);
};

//使用事件代理， 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    // your implement
    if (eventName == 'click') {
        $.click(element, listener);
    }
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应

function clickHandle(event){
    console.log('clickHandle'+event.target);
}

$.delegate($("#list"), "li", "click", clickHandle);

//估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么接下来把我们的事件函数做如下封装改变：



$.on=function(selector1, event, listener)
{
    // your implement
    addEvent($(selector1), event, listener);
}

$.click=function(selector1, listener)
{
    // your implement
    addClickEvent($(selector1), listener);
}

$.un=function(selector1, event, listener)
{
    // your implement
    removeEvent($(selector1), event, listener);
}

$.delegate=function(selector1, tag, event, listener)
{
    // your implement
    if (event == 'click') {
        $.click($(selector1), listener);
    }
}
function logListener(){

}
function liClicker(){

}
// 使用示例：
$.click("[data-log]", logListener);
$.delegate('#list', "li", "click", liClicker);
