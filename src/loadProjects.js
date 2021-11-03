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
            data.tasks.push(item.display);
        })
        todoLoader.push(data);
    });
    return todoLoader;
}
function loadDummyData(todoList) {
    todoList.newTodoProject('Main');
    todoList.newTodoTask(["One", "1997-01-07", 1, true, "Ipsum"]);
    todoList.newTodoTask(["First", "1997-01-07", 1, false, "Ipsum"]);
    
    todoList.newTodoProject('First');
    todoList.newTodoTask(["Two", "1997-10-27", 2, true, "Lorem"]);
    todoList.newTodoTask(["Fourth", "1997-10-27", 4, false, "Lorem"]);
    
    todoList.newTodoProject('Second');
    todoList.newTodoTask(["Three", "2020-08-20", 3, true, "Losum"]);
    todoList.newTodoTask(["Second", "2020-08-20", 2, false, "Losum"]);
    
    todoList.newTodoProject('Third');
    todoList.newTodoTask(["Four", "2010-03-02", 4, true, "Iprem"]);
    todoList.newTodoTask(["Third", "2010-03-02", 3, false, "Iprem"]);
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