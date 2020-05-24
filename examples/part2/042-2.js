const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'}

/*
    const의 경우 선언시 값을 할당해야하고 재할당이 불가능하다.
    그러나 const로 선언된 객체나 배열에 새로운 값을 추가하거나 변경하는 것은 가능하다.
    즉, 새로운 객체로 할당을 못하고 내부의 상태만 변경할 수 있다.
*/