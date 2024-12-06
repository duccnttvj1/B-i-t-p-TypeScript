"use strict";
let arr = [];
let input = prompt("Hãy nhập vào mảng số nguyên");
if (input) {
    arr = input.split(",");
}
else {
    console.log("Đây không phải là mảng số nguyên");
}
let arrNumber = [];
for (let i in arr) {
    arrNumber.push(Number(arr[i]));
}
function DaoNguoc(arr) {
    let numbe;
    let j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (i >= j) {
            break;
        }
        else {
            numbe = arr[i];
            arr[i] = arr[j];
            arr[j] = numbe;
            j--;
        }
    }
    return arr;
}
console.log(DaoNguoc(arrNumber));
