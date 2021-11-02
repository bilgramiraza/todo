import DOMBuilder from "./DOMBuilder";
import pageLayout from "./pageLayout";
import { DirectoryDisplay } from './DOMDirectory';


const basePageBuilder = ()=> {
    pageLayout.forEach((obj)=>{
        DOMBuilder(obj);
    });

}
const buildProjects = (todoList)=>{
    const projectTitles = todoList.getAllProjectTitles();
    const projectList = document.querySelector(".projectList");
    if(projectList.children)
        clearPanel(projectList);
    
    if(projectTitles !== null && projectTitles.length>0)
        projectTitles.forEach((title)=>{
            const Project = {
                element: "div",
                className: ["project"],
                textContent: title,
            };
            DOMBuilder(Project, projectList);
        });
};

const buildTasks = (todoList)=>{
    const taskTitles = todoList.getAllTaskTitles();
    const taskList = document.querySelector(".taskGrid");    
    if(taskList.children)
        clearPanel(taskList);
    //TODO: Sorting tasks by priority before displaying
    if(taskTitles !== null && taskTitles.length>0)
        taskTitles.forEach((title)=>{
            const Task = {
                element: "div",
                className: ["task"],
                textContent: title,
            };
            DOMBuilder(Task, taskList);
        });
};

const displayTask = (todoList)=>{
    const DirDisplay = DirectoryDisplay();
    const task = todoList.getCurrentTask();
    if(task === null)
        task = ["Title", "Due Date", "Priority", "Task Discription", "Done Status"];
    DirDisplay.taskTitle.textContent = task[0];
    DirDisplay.taskDiscription.textContent = task[4];
    DirDisplay.taskDueDate.textContent = task[1];
    DirDisplay.taskPriority.textContent = task[2];
    DirDisplay.taskDone.textContent = task[3];
}
function clearPanel(parentNode) {
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.lastChild);
    }
}

export {basePageBuilder, buildProjects, buildTasks, displayTask};