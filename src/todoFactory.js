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
    toggleDone(){
        this._done = !this.done; 
    }
    changePriority(value){
        this._priority = value;
    }
    changeDisc(value){
        this._description = value;
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
        const targetProject = this.#locateProject(project);
        if(targetProject === -1)
            return;
        
        const duplicateCheck = targetProject.tasks.findIndex(item => item.title === valueArray[0]);
        if(duplicateCheck > -1){
            alert(`'${valueArray[0]}' Already Exists. Cancelling Operation`);
            return;
        }
        targetProject.tasks.push(new TodoItem(...valueArray));
    }

    getAllProjects(){
        const projectTitles = this.todoList.map(item => item.project);
        return projectTitles;
    }

    getAllTaskTitles(project){
        const targetProject = this.#locateProject(project);
        if(targetProject === -1)
            return;
        
        const projectTaskTitles = targetProject.tasks.map(item => item.title);
        return projectTaskTitles;
    }

    getAllTasks(project){
        const targetProject = this.#locateProject(project);
        if(targetProject === -1)
            return;
        
        const projectTasks = targetProject.tasks.map(item => item.display);
        return projectTasks;
    }

    changeTaskDetails(project, taskTitle, targetProperty, value = null){
        const targetProject = this.#locateProject(project);
        if(targetProject === -1)
            return;
        const targetIndex = targetProject.tasks.findIndex(item => item.title === taskTitle);
        if(targetIndex === -1){
            alert('Title Not Found')
            return;
        }
        switch (targetProperty) {
            case "Done":
                targetProject.tasks[targetIndex].toggleDone();
                break;
            case "Priority":
                targetProject.tasks[targetIndex].changePriority(value);
                break;
            case "Discription":
                targetProject.tasks[targetIndex].changeDisc(value);
                break;
        }
    }

    removeItem(project, value){
        const targetProject = this.#locateProject(project);
        if(targetProject === -1)
            return;
        
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

    #locateProject(value){
        const targetProject = this.todoList.find(item=> item.project === value);
        if(typeof(targetProject) === 'undefined'){
            alert(`${value} Doesn't Exist. Cancelling Operation`);
            return -1;
        }
        return targetProject;
    }
}

export default ToDoList;