import './reset.css';
import './style.css';
import loadProjects from './loadProjects';
import {basePageBuilder, buildProjects, displayTask} from "./display";
import { DirectoryForm, DirectoryDisplay } from './DOMDirectory';
import eventHandlers from './eventHandlers';


console.log('START');

basePageBuilder();

let todoList = loadProjects();
console.table(todoList);
const DirForm = DirectoryForm();
const DirDisplay = DirectoryDisplay();
eventHandlers(todoList,DirForm,DirDisplay);
buildProjects(todoList);
displayTask(todoList);

/*

TASKS:
    Add Task Modification Functions     Done
        Modify Due Date
        Modify Priority
        Modify Discription
        Modify TaskTitle
        Modify Discription

    Internal Restructuring of Todo Operations       Done
        Change Current Project/Task Tracking from external to Internal

    Add Error Handling Function             Active
        Unify Error Protocol 
        Smoother Error Display(No Alert Boxes)

    Local Storage Setup
        Check If Local Storage has items 
            if Yes
                load them into site
            else
                ask user if they want to load in Dummy Data
    
    Finalize UI
        ProjectList and taskGrid Live Update
            Adding or Deleting Projects Repaints the appropriate Windows with new lists
        Select Color Scheme
        Convert from outlines to borders
        Pick Fonts
        Setup Pretty buttons
        Finalize Form Layout and types(Priority Input setup)
        Add CSS for If task is complete
        Make sure 'Default' Project Cannot be deleted
        Dark Mode Toggle
        Add Github Link

    Sorting Tasks by Date(tie-breaker:Priority)
    
    Setup Mobile View
        Hidden Menu Bar
        Single Column Based layout
    
    Add Optional CheckLists to TodoLists(Bonus Credit)
        Modify CheckLists(when Added)

    Bugs:
    Can have Duplicate Projects and tasks. Need to Implement Duplicate check.
    
*/