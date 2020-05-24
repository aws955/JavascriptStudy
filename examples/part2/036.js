function sum() {
    var total = 0;
    console.log(arguments);
    console.log(Object.values(arguments));
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}
var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    // indexOf는 배열에만 사용이 가능하기 때문에 에러가 발생
    // console.log(arguments.indexOf('b'));
}

testArg('a', 'b');