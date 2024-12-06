"use strict";
let arr = [];
let input = prompt("Hãy nhập vào mảng số nguyên voi dau ','");
if (input) {
    arr = input.split(",");
}
else {
    console.log("Hay nhap lai");
}
let arrNumber = [];
for (let i in arr) {
    arrNumber.push(Number(arr[i]));
}
function SapXepGiamDan(arr) {
    let numbe = arr[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                numbe = arr[i];
                arr[i] = arr[j];
                arr[j] = numbe;
            }
        }
    }
    return arr;
}
console.log(SapXepGiamDan(arrNumber));
