const addProjectBtn = {
  element: "button",
  textContent: "Add Project",
};
const displayProjectBtn = {
  element: "button",
  textContent: "Display Project",
};
const header = {
  element: "header",
  childNodes: [addProjectBtn, displayProjectBtn],
};

const addTaskBtn = {
  element: "button",
  textContent: "Add Task",
};
const displayTaskBtn = {
  element: "button",
  textContent: "Display Tasks",
};
const removeProjectBtn = {
  element: "button",
  textContent: "Remove Project",
};
const menuBar = {
  element: "div",
  className: ["menuBar"],
  childNodes: [addTaskBtn, displayTaskBtn, removeProjectBtn],
};

const toggleDoneBtn = {
  element: "button",
  textContent: "Toggle Done",
};
const changePriorityBtn = {
  element: "button",
  textContent: "Change Priority",
};
const changeDiscriptionBtn = {
  element: "button",
  textContent: "Change Discription",
};
const removeItemBtn = {
  element: "button",
  textContent: "Remove Item",
};
const contentBody = {
  element: "div",
  className: ["content"],
  childNodes: [
    toggleDoneBtn,
    changePriorityBtn,
    changeDiscriptionBtn,
    removeItemBtn,
  ],
};
const main = {
  element: "main",
  childNodes: [menuBar, contentBody],
};

const submitBtn = {
  element: "button",
  type: "button",
  class: ["submit"],
  textContent: "Submit",
};
const cancelBtn = {
  element: "button",
  type: "button",
  class: ["cancel"],
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
const todoDoneInput = {
  element: "input",
  type: "checkbox",
  id: "done",
};
const todoItemDoneItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoDoneLabel, todoDoneInput],
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
  element: "h2",
  className: ["modalTitle"],
  textContent: "New Todo Item",
};
const itemModalBox = {
  element: "fieldset",
  className: ["modalBox"],
  childNodes: [itemModalTitle, todoItemFormGroup, submitCancel],
};
const itemFormModal = {
  element: "form",
  className: ["cover", "hide"],
  childNodes: [itemModalBox],
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
  element: "h2",
  className: ["modalTitle"],
  textContent: "New Project",
};
const projectModalBox = {
  element: "fieldset",
  className: ["modalBox"],
  childNodes: [projectModalTitle, projectFormGroup, submitCancel],
};
const projectFormModal = {
  element: "form",
  className: ["cover", "hide"],
  childNodes: [projectModalBox],
};
const footerText = {
  element: "p",
  textContent: "Made By S.M. Raza Hassan Bilgami",
};
const footer = {
  element: "footer",
  childNodes: [footerText],
};

const pageLayout = [header, main, itemFormModal, projectFormModal, footer];

export default pageLayout;
