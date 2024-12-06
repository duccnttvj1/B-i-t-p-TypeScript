let arr2: number[][];
arr2 = [
    [1,2,1,24],
    [8,11,9,4],
    [7,0,7,27],
];

let arr3: string[]=[];

for(let i in arr2){
    let a:string = "";
    for(let j:number = 0; j < arr2[i].length; j++){
        a += String(arr2[i][j])+',';
    }
    arr3.push(a);
}

console.log(arr3);

for(let i in arr3){
    arr3[i] = arr3[i].slice(0,arr3[i].length-1);
    console.log(arr3[i]);
}