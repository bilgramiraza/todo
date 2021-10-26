import {buildTasks, displayTask} from './display';

function eventHandlers(todoList, DirForm, DirDisplay) {
    document.body.addEventListener("click",(event)=>{
        // console.log(event.currentTarget);
        switch (event.target.className) {
            case "addProjectBtn":
                DirDisplay.formModal.classList.toggle("hide");
                DirDisplay.projectForm.classList.toggle("hide");
                break;
            case "addTaskBtn":
                DirDisplay.formModal.classList.toggle("hide");
                DirDisplay.taskForm.classList.toggle("hide");
                break;
            case "displayProjectBtn":
                console.log(todoList.getAllProjects());
                break;
            case "displayTaskBtn":
                console.log(todoList.getAllTasks("Mock Project"));
                break;
            case "removeProjectBtn":
                console.log("removeProjectBtn");
                break;
            case "removeTaskBtn":
                console.log("removeTaskBtn");
                break;
            case "toggleDoneBtn":
                console.log("toggleDoneBtn");
                break;
            case "project":
                DirForm.currentProject.textContent = event.target.textContent;
                buildTasks(todoList, event.target.textContent);
                break;
            case "task":
                displayTask(todoList, DirForm.currentProject.textContent, event.target.textContent);
                break;
            case "Submit":
                console.log(event.target.parentNode.parentNode.className);
                switch (event.target.parentNode.parentNode.className) {
                    case "projectFormModal modalBox":    
                        projectFormInput(DirForm,todoList);
                        break;
                
                    case "itemFormModal modalBox":
                        taskFormInput(DirForm,todoList);
                        break;
                }
                clearFormModal(DirDisplay);
                break;                
            case "Cancel":
                DirDisplay.formModal.reset();
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

function projectFormInput(dirForm, todoList) {
    todoList.newTodoProject(dirForm.project.value);
}

function taskFormInput(dirForm, todoList) {
    let project = dirForm.currentProject.textContent;
    let valueArray = [dirForm.taskTitle.value,
                      dirForm.taskDueDate.value,
                      dirForm.taskPriority.value,
                      dirForm.taskDone.checked,
                      dirForm.taskDiscription.value];
    todoList.newTodoItem(project, valueArray);
}