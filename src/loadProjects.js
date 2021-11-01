import ToDoList from "./todoFactory";

function loadProjects() {

    let todoList = new ToDoList();
    todoList.newTodoProject('Main');
    todoList.newTodoTask(["One", "1997-01-07", 1, true, "Ipsum"]);
    todoList.newTodoTask(["First", "1997-01-07", 1, false, "Ipsum"]);
    
    todoList.newTodoProject('First');
    todoList.newTodoTask(["Two", "1997-10-27", 2, true, "Lorem"]);
    todoList.newTodoTask(["Fourth", "1997-10-27", 4, false, "Lorem"]);
    
    todoList.newTodoProject('Second');
    todoList.newTodoTask(["Three", "2020-08-20", 3, true, "Losum"]);
    todoList.newTodoTask(["Second", "2020-08-20", 2, false, "Losum"]);
    
    todoList.newTodoProject('Third');
    todoList.newTodoTask(["Four", "2010-03-02", 4, true, "Iprem"]);
    todoList.newTodoTask(["Third", "2010-03-02", 3, false, "Iprem"]);

    return todoList;
}

export default loadProjects;