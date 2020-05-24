/*
    자바스크립트에서는 for문, if문과 같은 구문엔 유효 범위가 없다.
    오직 함수만이 유효 범위의 한 단위가 된다.

    스코프 체인이란 [[Scope]]프로퍼티를 이용해 각 함수 내에서
    유효 범위를 나타내는 스코프를 연결리스트 형식으로 관리하는 것이다.
    각각의 함수는 [[Scope]]프로퍼티를 이용하여 자신이 생성된 실행 컨텍스트의 스코프 체인을 참조한다.

    실행 컨텍스트는 함수가 실행되는 순간 만들어지고,
    실행된 함수의 [[Scope]] 프로퍼티를 기반으로 새로운 스코프 체인을 만든다.

    스코프 체인의 동작 과정 정리
    1) 전역 실행 컨텍스트 진행
    2) 함수 실행 시
        - 새로운 실행 컨텍스트 생성
        - 현재 실행되는 함수 객체의 [[Scope]] 프로퍼티 복사
        - 새롭게 생성된 변수 객체를 해당 체인의 제일 앞에 추가     
*/

// 참조
// https://programmer-seva.tistory.com/36

// 예제 1
var value = "value1";

function printFunc(func) {
    var value = "value2";

    function printValue() {
        return value;
    }

    console.log(printValue());
}

printFunc();

// 예제 2
var value = "value1";

function printValue() {
    return value;
}
function printFunc(func) {
    var value = "value2";
    console.log(func());
}
printFunc(printValue);