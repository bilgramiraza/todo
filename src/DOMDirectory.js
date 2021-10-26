const DirectoryForm = ()=>{
    return {
        project: document.querySelector("#project"),
        currentProject: document.querySelector(".projectTitleBar"),
        currentTask: document.querySelector(".displayTaskTitle"),
        taskTitle: document.querySelector("#title"),
        taskDiscription: document.querySelector("#discription"),
        taskDueDate: document.querySelector("#due-date"),
        taskPriority: document.querySelector("#priority"),
        taskDone: document.querySelector("#done"),
    };
};
const DirectoryDisplay = ()=>{
    return {
        formModal: document.querySelector("form"),
        taskForm: document.querySelector(".itemFormModal"),
        projectForm: document.querySelector(".projectFormModal"),
        taskTitle: document.querySelector(".displayTaskTitle"),
        taskDiscription: document.querySelector(".taskDescriptionBox"),
        taskDueDate: document.querySelector(".displayDueDate"),
        taskPriority: document.querySelector(".displayPriority"),
        taskDone: document.querySelector(".toggleDoneBtn"),
    };
};
export {DirectoryForm, DirectoryDisplay};
