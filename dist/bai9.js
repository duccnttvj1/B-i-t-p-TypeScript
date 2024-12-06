"use strict";
let inputs = String(prompt("Hãy nhập vào cụm từ palindrome"));
let st = inputs.split("");
let resullt = "";
let npm;
let checks = true;
let j = st.length - 1;
for (let i = 0; i < st.length; i++) {
    if (i >= j) {
        checks = false;
        break;
    }
    else {
        ;
        npm = st[i];
        st[i] = st[j];
        st[j] = npm;
        j--;
    }
}
for (let i in st) {
    resullt += st[i];
}
if (resullt === inputs) {
    console.log("true");
}
else {
    console.log("false");
}
console.log(resullt);
