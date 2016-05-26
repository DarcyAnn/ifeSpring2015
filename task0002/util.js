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
    for(x in obj){
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
    var re =/^\w+(\.\w+)*@\w+([\.]\w+)+$/;
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
