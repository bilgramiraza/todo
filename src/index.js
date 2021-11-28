import './CSS/reset.css';
import './CSS/style.css';
import {loadProjects} from './loadProjects';
import {basePageBuilder, buildProjects, displayTask} from "./SiteBuilder/display";
import { DirectoryForm, DirectoryDisplay } from './DOM/DOMDirectory';
import eventHandlers from './SiteBuilder/eventHandlers';
import {buildErrorDOM} from './ErrorHandling/errorHandling';

basePageBuilder();
buildErrorDOM();
let todoList = loadProjects();
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

    Add Error Handling Function             Done
        Unify Error Protocol                
        Smoother Error Display(No Alert Boxes)  
        Make sure 'Default' Project Cannot be deleted   

    Local Storage Setup     Done
        Check If Local Storage has items 
            if Yes
                load them into site
            else
                ask user if they want to load in Dummy Data And save them into Storage
                
    Sorting Tasks by Date       Paused(will Progress after UI improvements)
        Sorting Rule(Date->Priority->Done Status)

    Reorganize SRC File Structure   Done

    Finalize UI         Active
        ProjectList and taskGrid Live Update        Done
            Adding or Deleting Projects Repaints the appropriate Panels with new lists
        Priority Input setup        Done
        Display             Done
            day of Due Date
            No of Days to Due Date
        CSS Cleanup     Done
            Convert from outlines to borders
            Setup Spacing between elements    
            Finalize Form Layout and types
            Relocate Buttons
            Setup Pretty buttons
                Add Borders to buttons
                List Divs(Project List & Task List) change CSS when
                    Hovered on
                    Selected
                toggleDone Button needs to change color on Status
            Text Work
                Select Font     
                Set size        
            Form CSS Work
            Select Color Scheme
            Re-Organize CSS
            Warning Popup polish
        Expand Task Grid with more details          Done
            Task title:Days Remaining: Priority     
            Color Coded Status                      
            Add CSS for If task is complete
        Add Github Link             Done
        Add more details to Project Title div(Title | No of Tasks Active)     Done
            Set the two labels under same CSS Name
            Updates when tasks are modified
        On Page load        
            Should auto-select the first Project and First Task
        Switching between Projects should update the Display Tasks Panel

    Dark Mode Toggle    Done
    
    Setup Mobile View
        Hidden Menu Bar
        Single Column Based layout
    
    Bonus Credit 
        CheckLists to TodoLists
        Modify CheckLists
        Add Time input and Display

    Bugs:
    Can have Duplicate Projects and tasks. Need to Implement Duplicate check.   Squashed
    Priority selection in Edit tasks isn't working.         Squashed
*/