type products = {
    id:number;
    name: String;
    count: number;
}

let stores: products[] = [
    {id: 1, name: "Milk", count: 100},
    {id: 2, name: "yakult", count: 100},
    {id: 3, name: "Butter", count: 100},
]

let carts: string[] = [];
while(true){
let inputs = prompt("Hãy nhập vào 1 trong 5 chữ cái C/R/U/D/E để sử dụng Rikkei Stores");
let NameProduct: string|null;
let check: boolean = true;
if(inputs === 'C'){
    console.log("Chức năng thêm mới");
    NameProduct = prompt("Nhập vào tên sản phẩm muốn thêm vào Carts");
    for(let i in stores){
        if(NameProduct === stores[i].name){
            carts.push(NameProduct);
            stores[i].count --;
            check = true;
            break;
        }else{
            check = false;
        }
    }
    if(check === false){
        console.log("Không có sản phẩm này trong stores");
    }
    console.log(carts);
    console.log(stores);
}else if(inputs === 'R'){
    display();
}else if(inputs === 'U'){
    let ip:number = Number(prompt("Bạn muốn update vị trí nào trong carts ? Hãy nhập vào dưới đây"));
    if(ip < 0 && ip > carts.length){
        console.log("Không có vị trí này trong carts");
    }else{
        let ipsl: number = Number(prompt("Nhập vào số lượng muốn thay đổi"));
        for(let i in stores){
            if(carts[ip-1] === stores[i].name){
                stores[i].count = stores[i].count+ipsl;
            }
        }
        display();
    }
} else if(inputs === 'D'){
    let ips:number = Number(prompt("Bạn muốn delete vị trí nào trong carts ? Hãy nhập vào dưới đây"));
    carts.splice(ips-1,1);
    display();
    console.log(carts);
} else if(inputs === 'E'){
    console.log("Cảm ơn bạn đã đến với Rikkei Stores");
    break;
}
}

function display(){
    console.log("PRODUCTS IN STORE");
    for(let i in stores){
        console.log("ID: "+stores[i].id+" "+"Name: "+stores[i].name+" "+" Count: "+stores[i].count);
    }
    console.log("PRODUCTS IN CARS");
    for(let i in carts){
        console.log(carts[i]);
    }
}