class TodoTask{
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
}

class ToDoList{
    constructor(){
        let home = {"project": "Home",
                "tasks": []};
        this.todoList = [home];
        this.currentTaskIndex = -1;
        this.currentProjectIndex = 0;
    }

    #locateProject(value){
        // if(this.todoList.length === 0)
        //     return -1;
        const targetProject = this.todoList.findIndex(item=> item.project === value);
        return targetProject;
    }
    #locateTask(value){
        if(this.todoList[this.currentProjectIndex].tasks.length === 0)
            return -1;
        const targetTask = this.todoList[this.currentProjectIndex];
        const targetTaskIndex = targetTask.tasks.findIndex((task)=> task.title === value);
        return targetTaskIndex;
    }

    newTodoProject(value){
        if(this.#locateProject(value) !== -1)
            return null;

        const newProject = {"project": value,
                            "tasks": []};
        this.todoList.push(newProject);
        this.updateCurrentProjectIndex(newProject.project);
        return newProject;
    }
    newTodoTask(valueArray){        
        if(this.#locateTask(valueArray[0]) !== -1)
            return null;

        const newTask = new TodoTask(...valueArray);

        this.todoList[this.currentProjectIndex].tasks.push(newTask);
        this.updateCurrentTaskIndex(newTask.title);
        return newTask.display;
    }

    getAllProjectTitles(){
        const projectTitles = this.todoList.map(task => task.project);
        return projectTitles;
    }
    getAllTaskTitles(){
        if(this.currentProjectIndex === -1)
            return null;
        const projectTasks = this.todoList[this.currentProjectIndex];
        const projectTaskTitles = projectTasks.tasks.map(task => task.title);
        return projectTaskTitles;
    }
    getCurrentProject(){
        if(this.currentProjectIndex === -1)
            return null;
        return this.todoList[this.currentProjectIndex].project;
    }
    getCurrentTask(){
        if(this.currentProjectIndex === -1 || this.currentTaskIndex === -1)
            return null;

        const targetProject = this.todoList[this.currentProjectIndex];
        const targetTask = targetProject.tasks[this.currentTaskIndex];
        return targetTask.display;
    }

    removeCurrentTask(){
        if(this.currentProjectIndex === -1 || this.currentTaskIndex === -1)
            return null;

        const targetProject = this.todoList[this.currentProjectIndex];
        const removedTask = targetProject.tasks.splice(this.currentTaskIndex,1);
        if(targetProject.tasks.length>0)
            this.updateCurrentTaskIndex(targetProject.tasks[0].title);
        else
            this.updateCurrentTaskIndex("");
        return removedTask[0].display;
    }
    removeCurrentProject(){
        if(this.currentProjectIndex === -1)
            return undefined;
        if(this.todoList[this.currentProjectIndex].project === "Home")
            return false;
        const targetProject = this.todoList[this.currentProjectIndex];
        if(targetProject.tasks.length){
            const confirmation = confirm("Project Has Existing Tasks. Confirm Deletion of Project");
            if(!(confirmation))
                return null;
        }    
        const removedProject = this.todoList.splice(this.currentProjectIndex,1);
        if(targetProject.length>0)
            this.updateCurrentProjectIndex(this.todoList[0].project);
        else
            this.updateCurrentProjectIndex("");
        return removedProject[0].project;
    }

    modifyCurrentProject(value){
        if(this.currentProjectIndex === -1)
            return undefined;
        else if(this.#locateProject(value) !== -1)
            return null;
        else if(this.todoList[this.currentProjectIndex].project === "Home")
            return false;
        const targetProject = this.todoList[this.currentProjectIndex];
        targetProject.project = value;
        return targetProject.project;
    }
    modifyCurrentTask(valueArray){
        if(this.currentProjectIndex === -1 || this.currentTaskIndex === -1)
            return null;
        this.removeCurrentTask();
        this.newTodoTask(valueArray);
        this.updateCurrentTaskIndex(valueArray[0]);
    }
    toggleDoneCurrentTask(){
        if(this.currentProjectIndex === -1 || this.currentTaskIndex === -1)
            return null;
        const targetProject = this.todoList[this.currentProjectIndex];
        const targetTask = targetProject.tasks[this.currentTaskIndex];
        targetTask.toggleDone();
        return targetTask.done;
    }

    updateCurrentProjectIndex(newProject){
        this.currentProjectIndex = this.#locateProject(newProject);
    }
    updateCurrentTaskIndex(newTask){
        this.currentTaskIndex = this.#locateTask(newTask);
    }
}

export default ToDoList;