"use strict";
class Todo {
    constructor(id, content) {
        this._status = false;
        this.id = id;
        this.content = content;
    }
    set status(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
}
let index = 0;
class TodoListManager {
    constructor() {
        this.todos = [];
    }
    addTodo(content) {
        index++;
        let add = new Todo(index, content);
        this.todos.push(add);
    }
    removeTodo(index) {
        this.todos.splice(index, 1);
    }
    updateTodo(index, content) {
        this.todos[index].content = content;
    }
    sortTodo() {
        console.log("Sắp xếp danh sách theo bảng chữ cái");
        this.todos.sort((a, b) => a.content.localeCompare(b.content));
        for (let todo of this.todos) {
            console.log(todo);
        }
    }
    findTodo(content) {
        let check = false;
        for (let todo of this.todos) {
            if (todo.content === content) {
                console.log(todo);
                check = true;
                break;
            }
        }
        if (check === false) {
            console.log("Không tìm thấy");
        }
    }
    listTodo() {
        for (let todo of this.todos) {
            console.log(todo);
        }
    }
}
class Main {
    constructor() {
        this.todoListManager = new TodoListManager();
    }
    run() {
        // Bước 1: In ra menu
        console.log("===== MENU =====");
        // Bước 2: Nhập lựa chọn từ người dùng
        let input = String(prompt("Nhập vào 1 trong những ký tự này để chạy chương trình V|A|D|U|O|F|E"));
        // Bước 3: Xử lý lựa chọn với if-else
        do {
            if (input === "V") {
                this.todoListManager.listTodo();
            }
            else if (input === "A") {
                let content = String(prompt("Nhập nội dung việc cần thêm:"));
                this.todoListManager.addTodo(content);
            }
            else if (input === "D") {
                let index = Number(prompt("Hãy nhập vị trí muốn xóa trong danh sách todoList:"));
                this.todoListManager.removeTodo(index);
            }
            else if (input === "U") {
                let index = Number(prompt("Hãy nhập vị trí muốn update trong danh sách todoList:"));
                let content = String(prompt("Nhập nội dung việc cần update:"));
                this.todoListManager.updateTodo(index, content);
            }
            else if (input === "O") {
                this.todoListManager.sortTodo();
            }
            else if (input === "F") {
                let content = String(prompt("Nhập nội dung việc cần tìm:"));
                this.todoListManager.findTodo(content);
            }
            else if (input === "E") {
                console.log("===Cảm ơn bạn đã dùng hệ thống TodoListManager===");
                break;
            }
            input = String(prompt("Nhập vào 1 trong những ký tự này để chạy chương trình V|A|D|U|O|F|E"));
        } while (input !== null);
    }
}
// Tạo instance và chạy chương trình
const main = new Main();
main.run();
