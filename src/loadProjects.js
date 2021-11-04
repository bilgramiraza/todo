import ToDoList from "./todoFactory";

function loadProjects() {
    let todoList = new ToDoList();

    if(storageAvailable('localStorage'))
    {
        if(localStorage.getItem('todoList') ===null)
            loadData(todoList);
        else                                
            downloadData(todoList)
    }
    else                                    
        loadDummyData(todoList);
    return todoList;
}
function saveData(todoList) {
    const todoLoader = dataConverter(todoList);
    localStorage.setItem('todoList',JSON.stringify(todoLoader));
}
export {loadProjects, saveData};

function downloadData(todoList) {
    const data = JSON.parse(localStorage.getItem('todoList'));
    const todoLoader=[...data];
    todoLoader.forEach(element => {
        if(element.project === "Home"){
            todoList.updateCurrentProjectIndex(element.project);
            element.tasks.forEach(element => {
                todoList.newTodoTask(element);
            });
        }
        else{
            todoList.newTodoProject(element.project);
            element.tasks.forEach(element => {
                todoList.newTodoTask(element);
            });
        }
    });
}
function loadData(todoList) {
    const ans = confirm("This is your First Visit, would you like to load some Dummy Data?");
    if(ans){
        loadDummyData(todoList);
        saveData(todoList);
    }
    else{
        const todoLoader = [{"project": "Home",
                             "tasks":[]}];
        localStorage.setItem('todoList',JSON.stringify(todoLoader));
    }

}
function dataConverter(todoList) {
    const todoLoader=[];
    todoList.todoList.forEach(element =>{
        let data  = {"project":element.project,
                     "tasks":[]};
        element.tasks.forEach((item)=>{
            data.tasks.push(item.taskData());
        })
        todoLoader.push(data);
    });
    return todoLoader;
}
function loadDummyData(todoList) {
    todoList.newTodoProject('Home');
    todoList.newTodoTask(["Birthday", "2021-12-09", 1, true, "Birthday of John"]);
    todoList.newTodoTask(["Get Grocery", "2021-12-09", 2, true, "Grocery List"]);
    todoList.newTodoTask(["Work Out", "2021-12-09", 2, false, "Grocery List"]);
    
    todoList.newTodoProject('Work');
    todoList.newTodoTask(["Interview Google", "2021-12-15", 3, false, "Interview with Google"]);
    todoList.newTodoTask(["Interview Apple", "2021-12-09", 3, false, "Interview with Apple"]);
    todoList.newTodoTask(["Briefing", "2021-12-09", 3, true, "Briefing meeting"]);

}

//Checks if the browser supports localStorage
// Credit:https://developer.mozilla.org Taken from:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];         //loads and removes random data into the localStorage
        let x = '__storage_test__';     //and checks for if an error is triggered
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}