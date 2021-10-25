import { ta } from "date-fns/locale";

const pageTitle = {
  element: "h1",
  textContent: "TODO TRACKING",
};
const header = {
  element: "header",
  childNodes: [pageTitle],
};

const addProjectBtn = {
  element: "button",
  className: ["addProjectBtn"],
  textContent: "Add Project",
};
const displayProjectBtn = {
  element: "button",
  className: ["displayProjectBtn"],
  textContent: "Display Project",
};
const addTaskBtn = {
  element: "button",
  className: ["addTaskBtn"],
  textContent: "Add Task",
};
const displayTaskBtn = {
  element: "button",
  className: ["displayTaskBtn"],
  textContent: "Display Tasks",
};
const removeProjectBtn = {
  element: "button",
  className: ["removeProjectBtn"],
  textContent: "Remove Project",
};
const menuBarBtns = {
  element: "div",
  className: ["menuBarBtns"],
  childNodes: [addProjectBtn, displayProjectBtn, addTaskBtn, displayTaskBtn, removeProjectBtn],
};
const dummyProject = {
  element: "div",
  className: ["project"],
  textContent: "Mock Project",
};
const menuItemsGroup ={
  element: "div",
  className: ["projectList"],
  childNodes: [dummyProject],
};
const menuBar = {
  element: "div",
  className: ["menuBar"],
  childNodes: [menuBarBtns, menuItemsGroup],
};

const toggleDoneBtn = {
  element: "button",
  className: ["toggleDoneBtn"],
  textContent: "Toggle Done",
};
const changePriorityBtn = {
  element: "button",
  className: ["changePriorityBtn"],
  textContent: "Change Priority",
};
const changeDiscriptionBtn = {
  element: "button",
  className: ["changeDiscBtn"],
  textContent: "Change Discription",
};
const removeItemBtn = {
  element: "button",
  className: ["removeTaskBtn"],
  textContent: "Remove Item",
};
// changePriorityBtn,
// changeDiscriptionBtn,
// removeItemBtn,
const projectTitleBar = {
  element: "div",
  className: ["projectTitleBar"],
  textContent: "Mock Project",
};
const dummyTask = {
  element: "div",
  className: ["task"],
  textContent: "Mock Task",
};
const taskGrid = {
  element: "div",
  className: ["taskGrid"],
  childNodes: [dummyTask],
};
const displayTaskTitle = {
  element: "div",
  className: ["displayTaskTitle"],
  textContent: "Mock Task",
};
const taskDescriptionBox = {
  element: "div",
  className: ["taskDescriptionBox"],
  textContent: "Mock Task Discription",
};
const taskDescriptionCheckbox = {
  element: "div",
  className: ["taskDescriptionCheckbox"],
  textContent: "Mock Task CheckBoxes",
}; 
const displayTaskDescription = {
  element: "div",
  className: ["displayTaskDescription"],
  childNodes: [taskDescriptionBox, taskDescriptionCheckbox],
};
const displayDueDate = {
  element: "div",
  className: ["displayDueDate"],
  textContent: "Mock Task Due Date",
};
const displayPriority = {
  element: "div",
  className: ["displayPriority"],
  textContent: "Mock Task Priority",
};
const displayTaskStats = {
  element: "div",
  className: ["displayTaskStats"],
  childNodes: [displayDueDate, displayPriority, removeItemBtn],
};
const displayTaskDetails = {
  element: "div",
  className: ["displayTaskDetails"],
  childNodes: [displayTaskDescription, displayTaskStats],
};
const taskDisplay = {
  element: "div",
  className: ["taskDisplay"],
  childNodes:[displayTaskTitle, displayTaskDetails, toggleDoneBtn],
};
const contentBody = {
  element: "div",
  className: ["content"],
  childNodes: [projectTitleBar, taskGrid, taskDisplay],
};
const main = {
  element: "main",
  childNodes: [menuBar, contentBody],
};

const submitBtn = {
  element: "button",
  className: ["Submit"],
  type: "button",
  textContent: "Submit",
};
const cancelBtn = {
  element: "button",
  className: ["Cancel"],
  type: "button",
  textContent: "Cancel",
};
const submitCancel = {
  element: "div",
  className: ["SubmitCancel"],
  childNodes: [submitBtn, cancelBtn],
};
const todoTitleLabel = {
  element: "label",
  for: ["title"],
  textContent: "Title",
};
const todoTitleInput = {
  element: "input",
  type: "text",
  id: "title",
  placeholder: "title",
};
const todoItemTitleItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoTitleLabel, todoTitleInput],
};
const todoDiscLabel = {
  element: "label",
  for: ["discription"],
  textContent: "Discription",
};
const todoDiscInput = {
  element: "textarea",
  id: "discription",
  rows: "3",
  placeholder: "Enter Details here",
};
const todoItemDiscItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoDiscLabel, todoDiscInput],
};
const todoDueDateLabel = {
  element: "label",
  for: ["due-date"],
  textContent: "Due Date",
};
const todoDueDateInput = {
  element: "input",
  type: "date",
  id: "due-date",
};
const todoItemDueDateItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoDueDateLabel, todoDueDateInput],
};
const todoPriorityLabel = {
  element: "label",
  for: ["priority"],
  textContent: "Priority",
};
const todoPriorityInput = {
  element: "input",
  type: "number",
  id: "priority",
  placeholder: "Priority",
};
const todoItemPriorityItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoPriorityLabel, todoPriorityInput],
};
const todoDoneLabel = {
  element: "label",
  for: ["done"],
  textContent: "Done",
};
const todoDoneCheckbox = {
    element: "input",
    type: "checkbox",
    id: "done",
  };
const todoItemDoneItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoDoneLabel, todoDoneCheckbox], 
};

const todoItemFormGroup = {
  element: "div",
  className: ["form-group"],
  childNodes: [
    todoItemTitleItem,
    todoItemDiscItem,
    todoItemDueDateItem,
    todoItemPriorityItem,
    todoItemDoneItem,
  ],
};
const itemModalTitle = {
  element: "legend",
  textContent: "New Todo Item",
};
const itemModalBox = {
  element: "fieldset",
  className: ["itemFormModal","modalBox","hide"],
  childNodes: [itemModalTitle, todoItemFormGroup, submitCancel],
};
const projectTitleLabel = {
  element: "label",
  for: ["project"],
  textContent: "Project Title",
};
const projectTitleInput = {
  element: "input",
  type: "text",
  id: "project",
  placeholder: "Project Title",
};
const projectFormItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [projectTitleLabel, projectTitleInput],
};
const projectFormGroup = {
  element: "div",
  className: ["form-group"],
  childNodes: [projectFormItem],
};
const projectModalTitle = {
  element: "legend",
  textContent: "New Project",
};
const projectModalBox = {
  element: "fieldset",
  className: ["projectFormModal", "modalBox", "hide"],
  childNodes: [projectModalTitle, projectFormGroup, submitCancel],
};
const formModal = {
  element: "form",
  className: ["cover", "hide"],
  childNodes: [itemModalBox, projectModalBox],
};

const footerText = {
  element: "p",
  textContent: "Made By S.M. Raza Hassan Bilgami",
};
const footer = {
  element: "footer",
  childNodes: [footerText],
};

const pageLayout = [header, main, formModal, footer];

export default pageLayout;
