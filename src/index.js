import './reset.css';
import './style.css';
import ToDoList from './todoFactory';
console.log('START');

let todoList = new ToDoList();

todoList.newTodoProject('Main');
todoList.newTodoProject('First');
todoList.newTodoProject('Second');
todoList.newTodoProject('Third');
todoList.newTodoItem("Main", ["One", "1997-01-07", "1", true, "Ipsum"]);
todoList.newTodoItem("First", ["Two", "1997-10-27", "2", true, "Lorem"]);
todoList.newTodoItem("Second", ["Three", "2020-08-20", "3", true, "Losum"]);
todoList.newTodoItem("Third", ["Four", "2010-03-02", "4", true, "Iprem"]);
todoList.newTodoItem("Main", ["First", "1997-01-07", "1", false, "Ipsum"]);
todoList.newTodoItem("First", ["Fourth", "1997-10-27", "4", false, "Lorem"]);
todoList.newTodoItem("Second", ["Second", "2020-08-20", "2", false, "Losum"]);
todoList.newTodoItem("Third", ["Third", "2010-03-02", "3", false, "Iprem"]);

const testBtn = document.createElement('button');
testBtn.textContent = 'Click Me';
testBtn.addEventListener('click',()=>{
    console.table(todoList.getAllProjects());
});

const addProject = document.createElement('button');
addProject.textContent = 'Add Project';
addProject.addEventListener('click', ()=>{
    const project = prompt('Enter Project Title');
    todoList.newTodoProject(project);
});

const addItem = document.createElement('button');
addItem.textContent = 'Add Item';
addItem.addEventListener('click', ()=>{
    const project = prompt('Enter Project Title');
    const item = ["Test", new Date().toISOString(), "2", false, "Testing"];
    todoList.newTodoItem(project,item);
});

const removeItem = document.createElement('button');
removeItem.textContent = 'Remove Item';
removeItem.addEventListener('click', ()=>{
    const project = prompt('Enter Project Title');
    const targetTitle = prompt('Enter Title of item');
    todoList.removeItem(project,targetTitle);
});

const removeProject = document.createElement('button');
removeProject.textContent = 'Remove Project';
removeProject.addEventListener('click', ()=>{
    const project = prompt('Enter Project Title');
    todoList.removeProject(project);
});
document.body.appendChild(testBtn);
document.body.appendChild(addProject);
document.body.appendChild(addItem);
document.body.appendChild(removeItem);
document.body.appendChild(removeProject);