import './reset.css';
import './style.css';
import loadProjects from './loadProjects';
import {basePageBuilder, buildProjects} from "./display";
import { DirectoryForm, DirectoryDisplay } from './DOMDirectory';
import eventHandlers from './eventHandlers';


console.log('START');

basePageBuilder();

let todoList = loadProjects();
// console.table(todoList);
const DirForm = DirectoryForm();
const DirDisplay = DirectoryDisplay();
eventHandlers(todoList,DirForm,DirDisplay);
buildProjects(todoList);

/*
1)Build the Page
    1)generate the page
    2)append it to body
    3)assign eventHandlers to appropriate Items
*/