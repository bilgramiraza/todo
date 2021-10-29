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
        this.todoList = [];
        this.currentTaskIndex = -1;
        this.currentProjectIndex = -1;
    }

    #locateProject(value){
        if(this.todoList.length === 0)
            return -1;
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
        return newTask;
    }

    getAllProjectTitles(){
        const projectTitles = this.todoList.map(task => task.project);
        return projectTitles;
    }
    getAllTaskTitles(){
        const projectTasks = this.todoList[this.currentProjectIndex];
        const projectTaskTitles = projectTasks.tasks.map(task => task.title);
        return projectTaskTitles;
    }
    getCurrentTask(){
        const targetProject = this.todoList[this.currentProjectIndex];
        const targetTask = targetProject.tasks[this.currentTaskIndex];
        return targetTask.display;
    }

    removeCurrentTask(){
        const targetProject = this.todoList[this.currentProjectIndex];
        const removedTask = targetProject.tasks.splice(this.currentTaskIndex,1);
        this.updateCurrentTaskIndex(taskProject.tasks[0].title);
        return removedTask;
    }
    removeCurrentProject(){
        const targetProject = this.todoList[this.currentProjectIndex];
        if(targetProject.tasks.length){
            const confirmation = confirm("Project Has Existing Tasks. Confirm Deletion of Project");
            if(!(confirmation))
                return null;
        }    
        const removedProject = this.todoList.splice(this.currentProjectIndex,1);
        this.updateCurrentProjectIndex(this.todoList[0].project);
        return removedProject.project;
    }

    modifyCurrentProject(value){
        const targetProject = this.todoList[this.currentProjectIndex];
        if(this.#locateProject(value) === -1)
            return null;
        else{
            targetProject.project = value;
            return targetProject.project;
        }
    }
    modifyCurrentTask(valueArray){
        this.removeCurrentTask();
        this.newTodoTask(valueArray);
        this.updateCurrentTaskIndex(valueArray[0]);
    }
    toggleDoneCurrentTask(){
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