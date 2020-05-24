var hometown = [
    {name: '남준', place: '일산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'}
];

/*
    hometown 이라는 배열에는 객체들이 담겨 있다.
    배열을 순차적으로 순환시킨다.
    객체가 정의되지 않거나(undefined 등) city 정보가 없는 경우 continue
    name 정보가 호석인 경우 정보를 출력하고 반복문 종료
*/
for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;

    console.log(i + ' 번째 실행입니다.');

    if (h.name === '호석') {
        console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.');
        break;
    }
}