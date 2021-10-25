import ToDoList from "./todoFactory";

function loadProjects() {

    let todoList = new ToDoList();
    todoList.newTodoProject('Main');
    todoList.newTodoProject('First');
    todoList.newTodoProject('Second');
    todoList.newTodoProject('Third');
    todoList.newTodoItem("Main", ["One", "1997-01-07", 1, true, "Ipsum"]);
    todoList.newTodoItem("First", ["Two", "1997-10-27", 2, true, "Lorem"]);
    todoList.newTodoItem("Second", ["Three", "2020-08-20", 3, true, "Losum"]);
    todoList.newTodoItem("Third", ["Four", "2010-03-02", 4, true, "Iprem"]);
    todoList.newTodoItem("Main", ["First", "1997-01-07", 1, false, "Ipsum"]);
    todoList.newTodoItem("First", ["Fourth", "1997-10-27", 4, false, "Lorem"]);
    todoList.newTodoItem("Second", ["Second", "2020-08-20", 2, false, "Losum"]);
    todoList.newTodoItem("Third", ["Third", "2010-03-02", 3, false, "Iprem"]);
    return todoList;
}

export default loadProjects;