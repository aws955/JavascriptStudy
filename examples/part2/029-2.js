var typeTestObj = {
    address : 'Seoul',
    members: {
        master : {name: 'Hee', age: 30},
        teacher : {name: 'Ahn', age: 25}
    }
};

var address = typeTestObj.address;
console.log(address);
console.log(typeTestObj.address);
address = 'Busan';
console.log(address);
console.log(typeTestObj.address);

var members = typeTestObj.members;
console.log(members);
console.log(typeTestObj.members);
delete members.teacher;
console.log(members);
console.log(typeTestObj.members);
