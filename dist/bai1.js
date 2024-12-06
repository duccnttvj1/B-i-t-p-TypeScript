"use strict";
let arr = [];
let input = prompt("Hãy nhập vào 1 mảng số nguyên 10 phần tử cách nhau bằng dấu ','");
if (input) {
    arr = input.split(",");
}
else {
    console.log("Đây không phải là mảng số nguyên");
}
console.log(arr);
let arrNumber = [];
for (let i in arr) {
    arrNumber.push(Number(arr[i]));
}
console.log(arrNumber);
function findNumberBiggerThan10(arr) {
    let arr1 = [];
    for (let i in arr) {
        if (arr[i] >= 10) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(findNumberBiggerThan10(arrNumber));
