let inputs: string = String(prompt("Hãy nhập vào cụm từ palindrome"));
let st: string[] = inputs.split("");
let resullt: string = "";
let npm: string;
let checks: boolean = true;
let j: number = st.length-1;
for(let i:number = 0; i < st.length; i++){
    if(i >= j){
        checks = false;
        break;
    }else{;
        npm = st[i];
        st[i] = st[j];
        st[j] = npm;
        j--;
    }
}
for(let i in st){
    resullt += st[i];
}
if(resullt === inputs){
    console.log("true");
}else{
    console.log("false");
}
console.log(resullt);