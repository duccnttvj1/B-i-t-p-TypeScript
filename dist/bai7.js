"use strict";
let num = String(prompt("Hãy nhập vào một mảng số nguyên"));
let target = Number(prompt("Hãy nhập vào 1 số nguyên"));
let n = num.split(",");
let nums = [];
for (let i in n) {
    nums.push(Number(n[i]));
}
let output = [];
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            output.push(i);
            output.push(j);
        }
    }
}
console.log(output);
