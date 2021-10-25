const DirectoryForm = ()=>{
    return {
        project: document.querySelector("#project"),
        currentProject: document.querySelector(".projectTitleBar"),
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
    };
};
export {DirectoryForm, DirectoryDisplay};
