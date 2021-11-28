import {buildProjects, buildTasks, displayTask, toggleDone} from './display';
import {ErrorDisplay} from '../ErrorHandling/errorHandling';
import {saveData} from '../loadProjects';

function eventHandlers(todoList, DirForm, DirDisplay) {
    document.body.addEventListener("click",(event)=>{
        let check = null;
        switch (event.target.className) {
            case "editProjectBtn":
                check = todoList.getCurrentProject();
                if(check === null){
                    ErrorDisplay("No Project Selected");
                    break;
                }
                toggleProjectForm(DirDisplay, "Edit Project");
                buildEditProjectForm(DirForm, todoList);
                break;
            case "addProjectBtn":
                toggleProjectForm(DirDisplay, "New Project");
                break;
            case "editTaskFormBtn":
                check = todoList.getCurrentTask();
                if(check === null){
                    ErrorDisplay("No Task Selected");
                    break;
                }
                toggleTaskForm(DirDisplay, "Edit Task");
                buildEditTaskForm(todoList, DirForm);
                break;
            case "addTaskBtn":
                toggleTaskForm(DirDisplay, "New Task");
                break;
            case "toggleDoneBtn":
                const result = todoList.toggleDoneCurrentTask();
                if(result === null)
                    ErrorDisplay("No Task Selected");
                else{
                    toggleDone(DirDisplay.taskDone, result);
                    buildTasks(DirDisplay, todoList);
                    saveData(todoList);
                }   
                break;
            case "project":
                todoList.updateCurrentProjectIndex(event.target.textContent);
                DirForm.currentProject.textContent = todoList.getCurrentProject();
                activeProject(event.target);
                buildTasks(DirDisplay, todoList);
                break;
            case "task":
                todoList.updateCurrentTaskIndex(event.target.firstChild.textContent);
                activeTask(event.target);
                displayTask(todoList);
                break;
            case "taskTitle":
                todoList.updateCurrentTaskIndex(event.target.textContent);
                activeTask(event.target.parentElement);
                displayTask(todoList);
                break;
            case "taskDeadline":
                todoList.updateCurrentTaskIndex(event.target.previousSibling.textContent);
                activeTask(event.target.parentElement);
                displayTask(todoList);
                break;
            case "taskPriority":
                todoList.updateCurrentTaskIndex(event.target.previousSibling.previousSibling.textContent);
                activeTask(event.target.parentElement);
                displayTask(todoList);
                break;
            case "removeProjectBtn":
                check = todoList.removeCurrentProject();
                if(check === undefined)
                    ErrorDisplay("Deletion Cancelled No Project Selected");
                else if(check === null)
                    ErrorDisplay("Deletion Cancelled");
                else if(check === false)
                    ErrorDisplay("Cannot Delete Home Project");
                else{
                    ErrorDisplay(`${check} Deleted`);                    
                    saveData(todoList);
                }
                buildProjects(todoList);
                buildTasks(DirDisplay, todoList);
                break;
            case "removeTaskBtn":
                check = todoList.removeCurrentTask();
                if(check === null)
                    ErrorDisplay("Deletion Cancelled");
                else{
                    buildTasks(DirDisplay, todoList);
                    saveData(todoList);
                }
                break;
            case "Submit":
                check = formBlank(DirForm, event.target.parentNode.parentNode.className);
                if(check)
                    ErrorDisplay("Empty Inputs. Fill Fields to continue");
                else
                    submitHandling(event.target.parentNode.parentNode.className, DirForm, DirDisplay, todoList);
                break;                
            case "Cancel":
                DirDisplay.formModal.reset();
                resetProjectForm(DirForm);
                resetTaskForm(DirForm);
                clearFormModal(DirDisplay);
                break;
        }
    });
    const darkMode = document.querySelector(".darkModeBtnGroup>input");
    darkMode.addEventListener("change",()=>{
        document.body.classList.toggle("dark-mode");
    });
}   

export default eventHandlers;

function clearFormModal(DirDisplay) {
    DirDisplay.formModal.classList.toggle("hide");
    DirDisplay.projectForm.classList.toggle("hide",true);
    DirDisplay.taskForm.classList.toggle("hide",true);
}

function toggleProjectForm(DirDisplay, projectTitle) {
    DirDisplay.projectLegend.textContent = projectTitle;
    DirDisplay.formModal.classList.toggle("hide");
    DirDisplay.projectForm.classList.toggle("hide");
}
function buildEditProjectForm(DirForm, todoList){
    const check = todoList.getCurrentProject();
    DirForm.project.setAttribute("value", check);
}

function toggleTaskForm(DirDisplay, formTitle) {
    DirDisplay.taskLegend.textContent = formTitle;
    DirDisplay.formModal.classList.toggle("hide");
    DirDisplay.taskForm.classList.toggle("hide");
}
function buildEditTaskForm(todoList, DirForm){
    const task =todoList.getCurrentTaskData();
    DirForm.taskTitle.setAttribute("value", task[0]);
    DirForm.taskDueDate.setAttribute("value", task[1]);
    document.querySelector(`option[value="${task[2]}"]`).selected = true;   //Locates the Option that matches the selection 
    DirForm.taskDone.checked =task[3];                                      //and triggers the "selected" flag on it
    DirForm.taskDiscription.value = task[4];
}

function submitHandling(modalBoxClassName, DirForm, DirDisplay, todoList) {
    switch (modalBoxClassName) {
        case "projectFormModal modalBox":
            projectFormHandling(DirDisplay, DirForm, todoList);
            break;
    
        case "taskFormModal modalBox":
            taskFormHandling(DirDisplay, DirForm, todoList);
            displayTask(todoList);
            break;
    }
    clearFormModal(DirDisplay);
    buildProjects(todoList);
    buildTasks(DirDisplay, todoList);
    saveData(todoList);
}
function projectFormHandling(DirDisplay, DirForm, todoList) {
    if(DirDisplay.projectLegend.textContent === "Edit Project")
        projectFormEdit(DirForm,todoList);
    else
        projectFormInput(DirForm,todoList);
    resetProjectForm(DirForm);
}
function taskFormHandling(DirDisplay, DirForm, todoList) {
    if(DirDisplay.taskLegend.textContent === "Edit Task")
        taskFormEdit(DirForm,todoList);
    else
        taskFormInput(DirForm,todoList);
    resetTaskForm(DirForm);
}

function projectFormInput(dirForm, todoList) {
    const check = todoList.newTodoProject(dirForm.project.value);
    if(check === null)
        ErrorDisplay(`'${dirForm.project.value}' Already Exists. Cancelling Operation`);
}
function taskFormInput(dirForm, todoList) {
    let valueArray = [dirForm.taskTitle.value,
                      dirForm.taskDueDate.value,
                      dirForm.taskPriority.value,
                      dirForm.taskDone.checked,
                      dirForm.taskDiscription.value];
    const check = todoList.newTodoTask( valueArray);
    if(check === null)
        ErrorDisplay(`'${dirForm.taskTitle.value}' Already Exists. Cancelling Operation`);
}

function projectFormEdit(DirForm,todoList){
    const check = todoList.modifyCurrentProject(DirForm.project.value);
    if(check === undefined)
        ErrorDisplay("No Project Selected");
    else if(check === null)
        ErrorDisplay("Project Not Found");
    else if(check === false)
        ErrorDisplay("Home Project Title Cannot Be Edited");
    else
        DirForm.currentProject.textContent = check;
}
function taskFormEdit(dirForm,todoList){
    let valueArray = [dirForm.taskTitle.value,
                      dirForm.taskDueDate.value,
                      dirForm.taskPriority.value,
                      dirForm.taskDone.checked,
                      dirForm.taskDiscription.value];
    todoList.modifyCurrentTask(valueArray);
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

function formBlank(DirForm, modalBoxClassName) {
    switch (modalBoxClassName) {
        case "projectFormModal modalBox":
            if(DirForm.project.value === "")
                return true;
            break;
    
        case "itemFormModal modalBox":
            if(DirForm.taskTitle.value === "" ||
               DirForm.taskDueDate.value === "" ||
               DirForm.taskPriority.value === "0")
                return true;
            break;
    }
    return false;
}
function activeProject(targetElement) {
    const oldTarget = document.querySelector(".project.active");
    if(oldTarget)
        oldTarget.classList.remove("active");
    targetElement.classList.add("active");
}
function activeTask(targetElement) {
    const oldTarget = document.querySelector(".task.active");
    if(oldTarget)
        oldTarget.classList.remove("active");
    targetElement.classList.add("active");
}