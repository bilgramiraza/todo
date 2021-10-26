import DOMBuilder from "./DOMBuilder";
import pageLayout from "./pageLayout";
import { DirectoryDisplay } from './DOMDirectory';


const basePageBuilder = ()=> {
    pageLayout.forEach((obj)=>{
        DOMBuilder(obj);
    });

}
const buildProjects = (todoList)=>{
    const projectTitles = todoList.getAllProjects();
    const projectList = document.querySelector(".projectList");
    projectTitles.forEach((title)=>{
        const Project = {
            element: "div",
            className: ["project"],
            textContent: title,
          };
        DOMBuilder(Project, projectList);
    });
};

const buildTasks = (todoList, projectTitle)=>{
    const taskTitles = todoList.getAllTaskTitles(projectTitle);
    const taskList = document.querySelector(".taskGrid");
    //TODO: Error Handling
    //TODO: Sorting tasks by priority before displaying
    taskTitles.forEach((title)=>{
        const Task = {
            element: "div",
            className: ["task"],
            textContent: title,
          };
        DOMBuilder(Task, taskList);
    });
};

const displayTask = (todoList, projectTitle, taskTitle)=>{
    const DirDisplay = DirectoryDisplay();
    const task = todoList.getTask(projectTitle, taskTitle);
    DirDisplay.taskTitle.textContent = task[0];
    DirDisplay.taskDiscription.textContent = task[4];
    DirDisplay.taskDueDate.textContent = task[1];
    DirDisplay.taskPriority.textContent = task[2];
    DirDisplay.taskDone.textContent = task[3];
}

export {basePageBuilder, buildProjects, buildTasks, displayTask};

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



