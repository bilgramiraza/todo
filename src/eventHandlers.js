function eventHandlers(todoList, DirForm, DirDisplay) {
    document.body.addEventListener("click",(event)=>{
        console.log(event.target.className);
        console.log(DirForm);
        console.log(DirDisplay);
        switch (event.target.className) {
            case "addProjectBtn":
                openForm(event.target.className, DirDisplay);
                break;
            case "addTaskBtn":
                openForm(event.target.className, DirDisplay);
                break;
            case "displayProjectBtn":
                console.log(todoList.getAllProjects());
                break;
            case "displayTaskBtn":
                console.log(todoList.getAllTasks("Main"));
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
            case "Submit":
            case "Cancel":
                DirDisplay.formModal.classList.toggle("hide");
                DirDisplay.formModal.reset();
                DirDisplay.projectForm.classList.toggle("hide",true);
                DirDisplay.taskForm.classList.toggle("hide",true);
                break;
        }
    });
}   

export default eventHandlers;

function openForm(formName, DirDisplay) {
    DirDisplay.formModal.classList.toggle("hide");
    switch (formName) {
        case "addProjectBtn":
            DirDisplay.projectForm.classList.toggle("hide");
            break;
        case "addTaskBtn":
            DirDisplay.taskForm.classList.toggle("hide");
            break;
    }
}