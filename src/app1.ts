
// Bài 1 khởi tạo class
// -Tên class viết hoa

class Department{
    // properties
    //b2 liệt kê các thuộc tính (properties)
    // tính chất của đối tượng mô tả
    private id: string;
    private name: string;
    private _manager: string;
    // constrcuctor function
    // Phương thức khởi tạo = Constructor function
    //Phương thức dùng để khởi tạo giá trị dành cho các thuộc tính
    // của 1 đối tượng instance khi được khởi tạo từ 1 lớp (Class)
    constructor(id: string, name: string, manager: string){
        // từ khóa this dùng để tham chiếu (reference) tới chính lớp mà đang sử dụng
        this.id = id;
        this.name = name;
        this._manager = manager;
    }
    // methods
    // Mô phỏng các hành động có của đối tượng trong thực tế
    // Hàm ở trong trong lớp ---> Method(phương thức)

    // manager getter
    get manager(){
        // Cung cấp thêm các phương thức để validate(kiểm tra tính hợp lệ)
        // Của dữ liệu đầu vào
        //Bổ sung các đoạn logic validate dữ liệu 
        //Logic A
        //Logic B
        return this._manager;
    }
    set manager(manager: string){
        // Cung cấp thêm các phương thức để validate(kiểm tra tính hợp lệ)
        // Của dữ liệu đầu vào
        //Bổ sung các đoạn logic validate dữ liệu 
        //Logic A
        //Logic B
        this._manager = manager;
    }
    public describe(){
        console.log(`This is ${this.name} Department with id: ${this.id}`);
    }
}
let educationDepartment = new Department("1","Education","ANh");
console.log(educationDepartment);

//clone 
// Liên quan đến ngữ cảnh context sử dụng từ khóa 'this'
// Bàn về chủ đề này sau !!!
let accounting = {
    describe: educationDepartment.describe.bind({id: "2", name:"Acuonting"}),
};
accounting.describe();

educationDepartment.manager = "Bill Gates";
console.log("Manager: " + educationDepartment.manager);

