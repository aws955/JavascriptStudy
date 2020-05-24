var obj = {a: 1, b: 2, c: 30, d: 44, e:5};

var {a, c} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

/*
    obj에 있는 값을 기본적으로 할당하되
    undefined로 값이 없는 경우에는 기본값을 할당
*/
var {a:newA=10, f:newF=5} = obj;
console.log(`newA >>> ${newA}`)
console.log(`newF >>> ${newF}`);