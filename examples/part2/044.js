// 클로저란 함수가 정의될 때의 렉시컬 환경을 기억하는 함수
// 대체로 실행 컨텍스트는 컨텍스트 스택에서 제거되면 해당 환경은 사라지는데
// 클로저가 만들어지면 해당 환경이 사라지지 않는다(참조가 되기 때문)

// 함수를 찍어내는 공장의 역활 (함수의 객체화)

function createCounterClosure() {
    let count = 0;
    return {
        increase: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

console.log(counter1);

counter1.increase();
counter1.increase();
console.log(`counter1의 값 : ${counter1.getCount()}`);
counter2.increase();
console.log(`counter2의 값 : ${counter2.getCount()}`)