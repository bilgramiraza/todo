class TodoItem{
    constructor(title, dueDate, priority, done, description){
        this._title = title;
        this._dueDate = new Date(dueDate);
        this._priority = priority;
        this._done = done;
        this._description = description;
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
       return [this._title, this._dueDate.toISOString().substring(0,10), this._priority, this._done, this._description];
    }
}

class ToDoList{
    constructor(){
        this.todoList = [];
    }
    newTodoProject(value){
        const duplicateCheck = this.todoList.findIndex(item => item.project === value);
        if(duplicateCheck > -1){
            alert(`'${value}' Already Exists. Cancelling Operation`);
            return;
        }
        const newProject = {"project": value,
                            "tasks": []};
        this.todoList.push(newProject);
    }
    newTodoItem(project, valueArray){
        const targetProject = this.todoList.find(item=> item.project === project);
        if(typeof(targetProject) === 'undefined'){
            alert(`${project} Doesn't Exist. Cancelling Operation`);
            return;
        }
        const duplicateCheck = targetProject.tasks.findIndex(item => item.title === valueArray[0]);
        if(duplicateCheck > -1){
            alert(`'${valueArray[0]}' Already Exists. Cancelling Operation`);
            return;
        }
        targetProject.tasks.push(new TodoItem(...valueArray));
    }
    getAllProjects(){
        return this.todoList;
    }
    removeItem(project, value){
        const targetProject = this.todoList.find(item=> item.project === project);
        if(typeof(targetProject) === 'undefined'){
            alert(`${project} Doesn't Exist. Cancelling Operation`);
            return;
        }
        const targetIndex = targetProject.tasks.findIndex(item => item.title === value);
        if(targetIndex === -1){
            alert('Title Not Found')
            return;
        }
        targetProject.tasks.splice(targetIndex,1);
    }
    removeProject(value){
        const targetProjectIndex = this.todoList.findIndex(item=> item.project === value);
        if(targetProjectIndex === -1){
            alert("Project Not Found")
            return;
        }
        else if(this.todoList[targetProjectIndex].tasks.length){
            const confirmation = confirm("Project Has Existing Tasks. Confirm Deletion of Project");
            if(!(confirmation))
                return;
        }    
        this.todoList.splice(targetProjectIndex,1);
    }
}

export default ToDoList;