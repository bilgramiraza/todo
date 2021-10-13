import './reset.css';
import './style.css';
import ToDoList from './todoFactory';
import DomHandler from "./display.js";
console.log('START');

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

// const projectDisplayBtn = document.createElement('button');
// projectDisplayBtn.textContent = 'Display Projects';
// projectDisplayBtn.addEventListener('click',()=>{
//     console.table(todoList.getAllProjects());
// });

// const tasksDisplayBtn = document.createElement('button');
// tasksDisplayBtn.textContent = 'Display Tasks';
// tasksDisplayBtn.addEventListener('click',()=>{
//     const project = prompt('Enter Project Title');
//     console.table(todoList.getAllTasks(project));
// });

// const addProjectBtn = document.createElement('button');
// addProjectBtn.textContent = 'Add Project';
// addProjectBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     todoList.newTodoProject(project);
// });

// const addItemBtn = document.createElement('button');
// addItemBtn.textContent = 'Add Item';
// addItemBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const item = ["Test", new Date().toISOString(), 2, false, "Testing"];
//     todoList.newTodoItem(project,item);
// });

// const toggleDoneBtn = document.createElement('button');
// toggleDoneBtn.textContent = 'Toggle Done';
// toggleDoneBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     todoList.changeTaskDetails(project, targetTitle, "Done");
// });

// const changePriorityBtn = document.createElement('button');
// changePriorityBtn.textContent = 'Change Priority';
// changePriorityBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     const newPriority = Number(prompt('Enter the New Priority Number: '));
//     todoList.changeTaskDetails(project, targetTitle, "Priority", newPriority);
// });

// const changeDiscBtn = document.createElement('button');
// changeDiscBtn.textContent = 'Change Discription';
// changeDiscBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     const newDisc = prompt('Enter the New Description: ');
//     todoList.changeTaskDetails(project, targetTitle, "Discription", newDisc);
// });

// const removeItemBtn = document.createElement('button');
// removeItemBtn.textContent = 'Remove Item';
// removeItemBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     todoList.removeItem(project,targetTitle);
// });

// const removeProjectBtn = document.createElement('button');
// removeProjectBtn.textContent = 'Remove Project';
// removeProjectBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     todoList.removeProject(project);
// });

// const header = document.createElement('header');
// header.appendChild(addProjectBtn);
// header.appendChild(projectDisplayBtn);
// document.body.appendChild(header);


// const mainBody = document.createElement('main');
// document.body.appendChild(mainBody);

// const menuBar = document.createElement('div');
// menuBar.classList.add('menu');
// menuBar.appendChild(addItemBtn);
// menuBar.appendChild(tasksDisplayBtn);
// menuBar.appendChild(removeProjectBtn);
// mainBody.appendChild(menuBar);

// const contentBody = document.createElement('div');
// contentBody.classList.add('content');
// contentBody.appendChild(toggleDoneBtn);
// contentBody.appendChild(changePriorityBtn);
// contentBody.appendChild(changeDiscBtn);
// contentBody.appendChild(removeItemBtn);
// mainBody.appendChild(contentBody);

// const form = document.createElement('form');
// form.classList.add(...["cover","hide"]);
// document.body.appendChild(form);

// const footer = document.createElement('footer');
// footer.classList.add();
// document.body.appendChild(footer);

// const by = document.createElement('p');
// by.textContent = "Made By S.M. Raza Hassan Bilgami";
// footer.appendChild(by);

DomHandler();