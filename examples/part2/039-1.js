var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
// 선언되지 않았다고 한다.
// console.log(b);