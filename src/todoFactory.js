class TodoItem{
    constructor(project, title, dueDate, priority, done, description){
        this._project = project;
        this._title = title;
        this._dueDate = new Date(dueDate);
        this._priority = priority;
        this._done = done;
        this._description = description;
    }
    get project(){
        return this._project;
    }
    get title(){
        return this._title;
    }
    get dueDate(){
        return this._dueDate;
    }
    get priority(){
        return this._priority;
    }
    get done(){
        return this._done;
    }
    get description(){
        return this._description;
    }
    get display(){
       return [this._project, this._title, this._dueDate.toISOString().substring(0,10), this._priority, this._done, this._description];
    }
}

class ToDoList{
    constructor(){
        this.todoList = [];
    }
    newTodoItem(values){
        let item = new TodoItem(...values);
        this.todoList.push(item);
    }
    get allTodoItems(){
        return this.todoList;
    }
    getTodoItems(Project){
        let requestedItems = [];
        this.todoList.forEach((item)=>{
            if(item.project===Project)
                requestedItems.push(item);
        });
        return requestedItems;
    }
}

export default ToDoList;