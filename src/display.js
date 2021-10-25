import DOMBuilder from "./DOMBuilder";
import pageLayout from "./pageLayout";


function basePageBuilder() {
    pageLayout.forEach((obj)=>{
        DOMBuilder(obj);
    });

}

// Directory.displayProjects.addEventListener('click',()=>{
//     console.log("display Projects");
//     // console.table(todoList.getAllProjects());
// });


// tasksDisplayBtn.addEventListener('click',()=>{
//     const project = prompt('Enter Project Title');
//     console.table(todoList.getAllTasks(project));
// });


// addProjectBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     todoList.newTodoProject(project);
// });


// addItemBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const item = ["Test", new Date().toISOString(), 2, false, "Testing"];
//     todoList.newTodoItem(project,item);
// });


// toggleDoneBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     todoList.changeTaskDetails(project, targetTitle, "Done");
// });


// changePriorityBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     const newPriority = Number(prompt('Enter the New Priority Number: '));
//     todoList.changeTaskDetails(project, targetTitle, "Priority", newPriority);
// });


// changeDiscBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     const newDisc = prompt('Enter the New Description: ');
//     todoList.changeTaskDetails(project, targetTitle, "Discription", newDisc);
// });


// removeItemBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     const targetTitle = prompt('Enter Title of item');
//     todoList.removeItem(project,targetTitle);
// });


// removeProjectBtn.addEventListener('click', ()=>{
//     const project = prompt('Enter Project Title');
//     todoList.removeProject(project);
// });




export default basePageBuilder;