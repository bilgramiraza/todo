import {buildProjects, buildTasks, displayTask} from './display';

function eventHandlers(todoList, DirForm, DirDisplay) {
    document.body.addEventListener("click",(event)=>{
        // console.log(event.currentTarget);
        switch (event.target.className) {
            case "editProjectBtn":
                toggleProjectForm(DirDisplay);
                DirDisplay.projectLegend.textContent = "Edit Project";
                buildEditProjectForm(DirForm);
                break;
            case "addProjectBtn":
                toggleProjectForm(DirDisplay);
                DirDisplay.projectLegend.textContent = "New Project";
                break;
            case "editTaskFormBtn":
                toggleTaskForm(DirDisplay);
                DirDisplay.taskLegend.textContent = "Edit Task";
                buildEditTaskForm(todoList, DirForm);
                break;
            case "addTaskBtn":
                toggleTaskForm(DirDisplay);
                DirDisplay.taskLegend.textContent = "New Task";
                break;
            case "displayProjectBtn":
                console.log(todoList.getAllProjectTitles());
                break;
            case "displayTaskBtn":
                console.log(todoList.getAllTaskTitles());
                break;
            case "toggleDoneBtn":
                console.log("toggleDoneBtn");
                break;
            case "project":
                DirForm.currentProject.textContent = event.target.textContent;
                todoList.updateCurrentProjectIndex(event.target.textContent);
                buildTasks(todoList);
                break;
            case "task":
                todoList.updateCurrentTaskIndex(event.target.textContent);
                displayTask(todoList);
                break;
            case "removeProjectBtn":
                todoList.removeCurrentProject();
                buildProjects(todoList);
                buildTasks(todoList);
                break;
            case "removeTaskBtn":
                todoList.removeCurrentTask();
                buildTasks(todoList);
                break;
            case "Submit":
                console.log(event.target.parentNode.parentNode.className);
                switch (event.target.parentNode.parentNode.className) {
                    case "projectFormModal modalBox":
                        if(DirDisplay.projectLegend.textContent === "Edit Project")
                            projectFormEdit(DirForm,todoList);
                        else
                            projectFormInput(DirForm,todoList);
                        resetProjectForm(DirForm);
                        break;
                
                    case "itemFormModal modalBox":
                        if(DirDisplay.taskLegend.textContent === "Edit Task")
                            taskFormEdit(DirForm,todoList);
                        else
                            taskFormInput(DirForm,todoList);
                        resetTaskForm(DirForm);
                        break;
                }
                clearFormModal(DirDisplay);
                buildProjects(todoList);
                buildTasks(todoList);
                break;                
            case "Cancel":
                DirDisplay.formModal.reset();
                resetProjectForm(DirForm);
                resetTaskForm(DirForm);
                clearFormModal(DirDisplay);
                break;
            // default:
            //     console.log(event.target);
            //     break;
        }
    });
}   

export default eventHandlers;

function clearFormModal(DirDisplay) {
    DirDisplay.formModal.classList.toggle("hide");
    DirDisplay.projectForm.classList.toggle("hide",true);
    DirDisplay.taskForm.classList.toggle("hide",true);
}
function toggleProjectForm(DirDisplay) {
    DirDisplay.formModal.classList.toggle("hide");
    DirDisplay.projectForm.classList.toggle("hide");
}
function toggleTaskForm(DirDisplay) {
    DirDisplay.formModal.classList.toggle("hide");
    DirDisplay.taskForm.classList.toggle("hide");
}
function projectFormInput(dirForm, todoList) {
    todoList.newTodoProject(dirForm.project.value);
}
function taskFormInput(dirForm, todoList) {
    let valueArray = [dirForm.taskTitle.value,
                      dirForm.taskDueDate.value,
                      dirForm.taskPriority.value,
                      dirForm.taskDone.checked,
                      dirForm.taskDiscription.value];
    todoList.newTodoTask( valueArray);
}

function buildEditProjectForm(DirForm){
    DirForm.project.setAttribute("value", DirForm.currentProject.textContent);
}
function buildEditTaskForm(todoList, DirForm){
    const task =todoList.getCurrentTask();
    DirForm.taskTitle.setAttribute("value", task[0]);
    DirForm.taskDueDate.setAttribute("value", task[1]);
    DirForm.taskPriority.setAttribute("value", task[2]);
    DirForm.taskDone.checked =task[3];
    DirForm.taskDiscription.value = task[4];
}
function resetProjectForm(DirForm){
    DirForm.project.removeAttribute("value");
}
function resetTaskForm(DirForm){
    DirForm.taskTitle.removeAttribute("value");
    DirForm.taskDueDate.removeAttribute("value");
    DirForm.taskPriority.removeAttribute("value");
    DirForm.taskDone.checked = false;
    DirForm.taskDiscription.value = "";
}
function projectFormEdit(DirForm,todoList){
    todoList.modifyCurrentProject(DirForm.project.value);
}
function taskFormEdit(dirForm,todoList){
    let valueArray = [dirForm.taskTitle.value,
                      dirForm.taskDueDate.value,
                      dirForm.taskPriority.value,
                      dirForm.taskDone.checked,
                      dirForm.taskDiscription.value];
    todoList.modifyCurrentTask(valueArray);
}