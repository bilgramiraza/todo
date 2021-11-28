import {format, compareAsc, formatDistanceToNow} from 'date-fns';
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
       return [this._title,format(this._dueDate, "do MMMM uuuu"), this._priority, this._done, this._description];
    }
    taskData(){
        return [this._title,format(this._dueDate, "uuuu-MM-dd"), this._priority, this._done, this._description];
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
        this.#sortTasks();
        return newTask.display;
    }

    getAllProjectTitles(){
        const projectTitles = this.todoList.map(task => task.project);
        return projectTitles;
    }
    getAllTaskSummary(){
        if(this.currentProjectIndex === -1)
            return null;
        const projectTasks = this.todoList[this.currentProjectIndex];
        const projectTaskSummary = projectTasks.tasks.map(task => {
            const summary = {
                title: task.title,
                deadline: formatDistanceToNow(task.dueDate),
                priority: task.priority,
                done: task.done,
            };
            return summary;
        });
        return projectTaskSummary;
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
    getCurrentTaskData(){
        if(this.currentProjectIndex === -1 || this.currentTaskIndex === -1)
        return null;

        const targetProject = this.todoList[this.currentProjectIndex];
        const targetTask = targetProject.tasks[this.currentTaskIndex];
        return targetTask.taskData();
    }
    getTaskDueDay(){
        if(this.currentProjectIndex === -1 || this.currentTaskIndex === -1)
            return null;
        const targetProject = this.todoList[this.currentProjectIndex];
        const targetTask = targetProject.tasks[this.currentTaskIndex];
        return format(targetTask.dueDate, "eeee");
    }
    getTaskDeadline(){
        if(this.currentProjectIndex === -1 || this.currentTaskIndex === -1)
            return null;
        const targetProject = this.todoList[this.currentProjectIndex];
        const targetTask = targetProject.tasks[this.currentTaskIndex];
        return formatDistanceToNow(targetTask.dueDate);
    }
    getCurrentProjectActiveTasksCount(){
        if(this.currentProjectIndex === -1)
            return null;
        const targetProject = this.todoList[this.currentProjectIndex];
        if(!(targetProject.tasks.length))
            return 0;
        const activeTaskCount = targetProject.tasks.reduce((PV,CV) => CV.done?PV:PV+1,0);
        return activeTaskCount;
    }
    getCurrentProjectTasksCount(){
        if(this.currentProjectIndex === -1)
            return null;
        const targetProject = this.todoList[this.currentProjectIndex];
        return targetProject.tasks.length;
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
        this.#sortTasks();
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
        this.#sortTasks();
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
    #sortTasks(){
        this.todoList[this.currentProjectIndex].tasks.sort(this.#sorter);
    }
    #sorter(taskA, taskB){
        let check = compareAsc(taskA.dueDate, taskB.dueDate);
        if(check === 0){
            check = comparePriority(taskA.priority, taskB.priority);
            if(check === 0)
                if(taskA.done === taskB.done)
                    check = 0;
                else if(taskA.done)
                    check = -1;
                else 
                    check = 1;
        }
        return check;
    }
}

export default ToDoList;
function comparePriority(taskAPriority, taskBPriority){
    if(taskAPriority<taskBPriority)
        return 1;
    else if(taskAPriority>taskBPriority)
        return -1;
    else
        return 0;
}