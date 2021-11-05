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
const editProjectBtn = {
  element: "button",
  className: ["editProjectBtn"],
  textContent: "Edit Project",
};
const menuBarBtns = {
  element: "div",
  className: ["menuBarBtns"],
  childNodes: [addProjectBtn,
               displayProjectBtn,
               addTaskBtn,
               displayTaskBtn,
               removeProjectBtn,
               editProjectBtn],
};
const menuItemsGroup ={
  element: "div",
  className: ["projectList"],
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
const removeItemBtn = {
  element: "button",
  className: ["removeTaskBtn"],
  textContent: "Remove Task",
};
const projectTitleBar = {
  element: "div",
  className: ["projectTitleBar"],
  textContent: "Mock Project",
};
const taskGrid = {
  element: "div",
  className: ["taskGrid"],
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
const editTaskBtn = {
  element: "button",
  className: ["editTaskFormBtn"],
  textContent: "Edit Task",
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
  childNodes: [editTaskBtn, displayDueDate, displayPriority, removeItemBtn],
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
  textContent: "Submit",
  attributes: {
    type: "button",
  },
};
const cancelBtn = {
  element: "button",
  className: ["Cancel"],
  textContent: "Cancel",
  attributes: {
    type: "button",
  },
};
const submitCancel = {
  element: "div",
  className: ["SubmitCancel"],
  childNodes: [submitBtn, cancelBtn],
};
const todoTitleLabel = {
  element: "label",
  textContent: "Title",
  attributes: {
    for: ["title"],
  },
};
const todoTitleInput = {
  element: "input",
  type: "text",
  attributes: {
    id: "title",
    placeholder: "title",
  },
};
const todoItemTitleItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoTitleLabel, todoTitleInput],
};
const todoDiscLabel = {
  element: "label",
  textContent: "Discription",
  attributes: {
    for: ["discription"],
  },
};
const todoDiscInput = {
  element: "textarea",
  attributes: {
    id: "discription",
    rows: "3",
    placeholder: "Enter Details here",
  },
};
const todoItemDiscItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoDiscLabel, todoDiscInput],
};
const todoDueDateLabel = {
  element: "label",
  textContent: "Due Date",
  attributes: {
    for: ["due-date"],
  },
};
const todoDueDateInput = {
  element: "input",
  attributes: {
    type: "date",
    id: "due-date",
  },
};
const todoItemDueDateItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoDueDateLabel, todoDueDateInput],
};
const todoPriorityLabel = {
  element: "label",
  textContent: "Priority",
  attributes: {
    for: ["priority"],
  },
};
const todoPriorityInput = {
  element: "input",
  attributes: {
    type: "number",
    id: "priority",
    placeholder: "Priority",
  },
};
const todoItemPriorityItem = {
  element: "div",
  className: ["form-item"],
  childNodes: [todoPriorityLabel, todoPriorityInput],
};
const todoDoneLabel = {
  element: "label",
  textContent: "Done",
  attributes: {
    for: ["done"],
  },
};
const todoDoneCheckbox = {
  element: "input",
  attributes: {
    type: "checkbox",
    id: "done",
  },
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
};
const itemModalBox = {
  element: "fieldset",
  className: ["itemFormModal","modalBox","hide"],
  childNodes: [itemModalTitle, todoItemFormGroup, submitCancel],
};
const projectTitleLabel = {
  element: "label",
  textContent: "Project Title",
  attributes: {
    for: ["project"],
  },
};
const projectTitleInput = {
  element: "input",
  attributes: {
    type: "text",
    id: "project",
    placeholder: "Project Title",
  },
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
