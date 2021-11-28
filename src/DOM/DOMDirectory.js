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
        projectLegend: document.querySelector(".projectFormModal>legend"),
        taskLegend: document.querySelector(".taskFormModal>legend"),
        taskForm: document.querySelector(".taskFormModal"),
        projectForm: document.querySelector(".projectFormModal"),
        totalTasks: document.querySelectorAll(".projectStats")[0],
        taskTitle: document.querySelector(".displayTaskTitle"),
        activeTasks: document.querySelectorAll(".projectStats")[1],
        taskDiscription: document.querySelector(".taskDescriptionBox"),
        taskDueDate: document.querySelector(".displayDueDate"),
        taskDueDay: document.querySelector(".displayDueDay"),
        taskDeadline: document.querySelector(".displayDeadline"),
        taskPriority: document.querySelector(".displayPriority"),
        taskDone: document.querySelector(".toggleDoneBtn"),
    };
};
export {DirectoryForm, DirectoryDisplay};
