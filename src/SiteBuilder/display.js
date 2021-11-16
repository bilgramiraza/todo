import DOMBuilder from "../DOM/DOMBuilder";
import pageLayout from "./pageLayout";
import { DirectoryDisplay } from '../DOM/DOMDirectory';


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
    const taskSummary = todoList.getAllTaskSummary();
    const taskList = document.querySelector(".taskPanel");
    if(taskList.children)
        clearPanel(taskList);
    if(taskSummary !== null && taskSummary.length>0)
        taskSummary.forEach((taskSummary)=>{
            const taskDom = taskDOMFactory(taskSummary)
            DOMBuilder(taskDom, taskList);
        });
};

const displayTask = (todoList)=>{
    const DirDisplay = DirectoryDisplay();
    let task = todoList.getCurrentTask();
    let taskDueDay = todoList.getTaskDueDay();
    let taskDeadline =  todoList.getTaskDeadline();
    if(task === null)
        task = ["Title", "Due Date", "Priority", "Task Discription", "Done Status"];

    if(taskDueDay === null)
        task.push(["Due Day"]);
    else
        task.push([taskDueDay]);

    if(taskDeadline === null)
        task.push(["Days left"]);
    else
        task.push([taskDeadline]);

    DirDisplay.taskTitle.textContent = task[0];
    DirDisplay.taskDiscription.textContent = task[4];
    DirDisplay.taskDueDate.textContent = task[1];
    toggleDone(DirDisplay.taskDone, task[3]);
    DirDisplay.taskDueDay.textContent = task[5];
    DirDisplay.taskDeadline.textContent = task[6];
    switch (task[2]) {
        case 1:
        case "1":
            DirDisplay.taskPriority.textContent = "Normal"; 
            break;
        case 2:
        case "2":
            DirDisplay.taskPriority.textContent = "High"; 
            break;
        case 3:
        case "3":
            DirDisplay.taskPriority.textContent = "IMPORTANT"; 
            break;
        default:
            DirDisplay.taskPriority.textContent = "Invalid"; 
            break;
    }
}
function clearPanel(parentNode) {
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.lastChild);
    }
}
function toggleDone(doneBtnElement, result) {
        if(result)
            doneBtnElement.textContent = "Completed";
        else
            doneBtnElement.textContent = "Active";
        doneBtnElement.dataset.status = result;
}
export {basePageBuilder, buildProjects, buildTasks, displayTask, toggleDone};

function taskDOMFactory(Summary) {
    let priority;
    switch (Summary.priority) {
        case 1:
        case "1":
            priority = "Normal"; 
            break;
        case 2:
        case "2":
            priority = "High"; 
            break;
        case 3:
        case "3":
            priority = "IMPORTANT"; 
            break;
        default:
            priority = "Invalid"; 
            break;
    }
    const TaskDOMObject = {
        element: "div",
        className: ["task"],
        attributes:{
            "data-done":Summary.done,
        },
        childNodes: [
            {
                element: "div",
                className: ["taskTitle"],
                textContent: Summary.title,
            },
            {
                element: "div",
                className: ["taskDeadline"],
                textContent: Summary.deadline,
            },
            {
                element: "div",
                className: ["taskPriority"],
                textContent: priority,
            },
        ],
    };
    return TaskDOMObject;
}