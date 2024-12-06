"use strict";
let studentList;
studentList = ["Nguyen Van A", "Tran Van B", "Ta Van C"];
studentList[0];
for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}
for (let student of studentList) {
    console.log(student);
}
for (let index in studentList) {
    console.log(index, studentList[index]);
}
studentList.push("le van D");
console.log(studentList);
studentList.unshift("Nguyen Van Peter");
console.log(studentList);
studentList.shift();
console.log(studentList);
let phoneList;
phoneList = ["0912381203", "412308189", "09129381283"];
let randomArr;
randomArr = ["ádasd", 3e12312, true];
let person = {
    name: "Nguyen van A",
    age: 18,
    hobbies: ["Going out", "Reading books"],
    gender: true,
};
let Students = [
    {
        id: 1,
        name: "Nguyen van A",
        age: 16,
    },
    {
        id: 2,
        name: "Nguyen van B",
        age: 16,
    },
    {
        id: 3,
        name: "Nguyen van C",
        age: 16,
    }
];
console.log(Students);
let roles;
roles = ["ADMIN", "MODERATION", "USER"];
console.log(roles[0]);
for (let role of roles) {
    console.log(role);
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["MODERATOR"] = 11] = "MODERATOR";
    Role[Role["USER"] = 12] = "USER";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.MODERATOR);
console.log(Role.USER);
let role = {
    ADMIN: 0,
    MODERATOR: 1,
    USER: 2,
};
let randomValue;
function sum(number1, number2) {
    return number1 + number2;
}
let numbers = [10, 20, 30, 40, 50];
let newArr = numbers.map(function (element, index) {
    return element * element;
});
console.log(newArr);
function map(arr, fn) {
    let result = [];
    for (let i in arr) {
        let mapElement = fn(arr[i], +i);
        result.push(mapElement);
    }
    return result;
}
let resultArr = map([3, 5, 6, 7, 8], function (element, index) {
    return element * element;
});
console.log(resultArr);
let arr123 = [1, 2, 3, 4, 5, 6, 7, 8];
let result = arr123.slice(2, 3);
console.log("rs: " + result);
