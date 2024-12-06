// danh sách các sinh viên
let studentList: string[];

studentList = ["Nguyen Van A", "Tran Van B", "Ta Van C"];

//Hàm xây dựng sẵn 

//Read - lấy phần tử có ở trong mảng
// readone  - lấy 1 phần tử 
studentList[0]; //"Nguyen Van A"

//Read all lấy toàn bộ phần tử có trong mảng
//Duyệt qua toàn bộ phần tử có trong mảng
//C1 sử dụng for truyền thống
for(let i: number =0; i< studentList.length; i++ ){
    console.log(studentList[i]);
} 
// - C2: Sử dụng vòng lặp for...of 
// -> Lấy ra toàn bộ phần tử có trong mảng (Không quan tâm đến chỉ số
// của những phần tử có trong mảng)
for(let student of studentList){
    console.log(student);
}
// - C3: Sử dụng vòng lặp for...in
// -> Lấy ra toàn bộ phần tử có trong mảng (Làm việc được với toàn bộ
// chỉ số của các phần tử có trong mảng)
for(let index in studentList){
    console.log(index, studentList[index]);
}

//Create thêm mới
// Thêm phần tử vào đầu mảng (.unshift)
// thêm phần tử vào cuối mảng(.push)
studentList.push("le van D");
console.log(studentList);

studentList.unshift("Nguyen Van Peter");
console.log(studentList);

// Delete xóa
//Xóa đầu (.shift)
studentList.shift();
console.log(studentList);
//Xóa cuối(.pop)
//Xóa tại vị trí bất kỳ (.splice)

//Danh sách số điện thoại
let phoneList: Array<String>;

phoneList = ["0912381203","412308189","09129381283"];

let randomArr: any[];
randomArr = ["ádasd",3e12312,true];

//Object đối tượng
let person: {
    name: string;
    age: number;
    hobbies: String[];
    gender: boolean;
} = {
    name: "Nguyen van A",
    age: 18,
    hobbies: ["Going out", "Reading books"],
    gender: true,

}

//Danh sách những đối tượng
// Danh sách sinh viên (id, name, age)

let Students:{
    id: number;
    name: string;
    age: number;
} []  = [
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
]

console.log(Students);

//Tupel = MẢNGGGGGGGG cố định độ dài và kiểu dữ liệu của từng phần tử
let roles: [string, string, string];
roles = ["ADMIN","MODERATION","USER"];

console.log(roles[0]);

for(let role of roles){
    console.log(role);
}
// Tránh sử dụng các thao tác thêm, sửa, xóa

//Enum - kiểu dữ liệu gần giống đối tượng
enum Role{
    ADMIN = 10,
    MODERATOR,
    USER,
}
console.log(Role.ADMIN);
console.log(Role.MODERATOR);
console.log(Role.USER);
let role = {
    ADMIN: 0,
    MODERATOR: 1,
    USER: 2,
}

type RandomValue = String| number| boolean;

// Unio Type
// Biến randomValue -> nhận các giá trị là string, number,boolean
let randomValue: String| number| boolean

// alias 

type Person = {
    name: String;
    age: Number;
    hobbies: String[];
    gender: boolean;
}

//function type

function sum(number1: number, number2: number): number{
    return number1 + number2;
}

// JS + TS ---> Tính chất first class function
// Một function trong JS có thể nhận 1 function khác làm tham số

let numbers: number[] = [10,20,30,40,50];

let newArr: number[] = numbers.map(function(element, index){
    return element * element;
})

console.log(newArr);

function map(
    arr: number[], 
    fn: (element: number, index: number) =>  number
): number[]{
    let result: number[] = [];
    for(let i in arr){
        let mapElement: number = fn(arr[i],+i);
        result.push(mapElement);
    }
    return result;
}

let resultArr = map([3,5,6,7,8], function(element,index){
    return element*element;
});

console.log(resultArr);

let arr123: number[] = [1,2,3,4,5,6,7,8];
let result: number[] = arr123.slice(2,3);
console.log("rs: "+result);