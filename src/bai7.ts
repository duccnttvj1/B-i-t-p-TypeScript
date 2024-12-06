let num = String(prompt("Hãy nhập vào một mảng số nguyên"));
let target: number = Number(prompt("Hãy nhập vào 1 số nguyên"));
let n:string[] = num.split(",");
let nums:number[] = [];
for(let i in n){
    nums.push(Number(n[i]));
}
let output: number[] = [];
for(let i:number =0; i<nums.length; i++){
    for(let j:number = i+1; j<nums.length; j++){
        if(nums[i]+nums[j] === target){
            output.push(i);
            output.push(j);
        }
    }
}

console.log(output);