"use strict";
let arr = [];
let input = prompt("Hãy nhập vào một mảng số nguyên gồm 10 phần tử cách nhau bằng dấu cách");
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
console.log(arrNumber);
function Max(arr) {
    let max = arr[0];
    for (let i in arr) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function Min(arr) {
    let min = arr[0];
    for (let i in arr) {
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log("Max: " + Max(arrNumber));
console.log("Min: " + Min(arrNumber));
