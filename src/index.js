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

    Add Time input and Display

    Finalize UI         Active
        ProjectList and taskGrid Live Update        Done
            Adding or Deleting Projects Repaints the appropriate Panels with new lists
        Priority Input setup        Done
        CSS Cleanup     Active
            Convert from outlines to borders    Done
            Setup Spacing between elements  Done    
            Finalize Form Layout and types  Done
            Relocate Buttons        Done
            Setup Pretty buttons    Done
                Add Borders to buttons      Done
                List Divs(Project List & Task List) change CSS when     Done
                    Hovered on      Done
                    Selected        Done
                toggleDone Button needs to change color on Status       Done
            Pick Fonts
            Select Color Scheme
        Add CSS for If task is complete
        Dark Mode Toggle
        Add Github Link

    
    Setup Mobile View
        Hidden Menu Bar
        Single Column Based layout
    
    Add Optional CheckLists to TodoLists(Bonus Credit)
        Modify CheckLists(when Added)

    Bugs:
    Can have Duplicate Projects and tasks. Need to Implement Duplicate check.
    
*/