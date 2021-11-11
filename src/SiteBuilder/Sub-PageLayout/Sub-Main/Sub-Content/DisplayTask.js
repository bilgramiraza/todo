import { addTaskBtn, editTaskBtn, removeTaskBtn, toggleDoneBtn } from "../Buttons";

const displayTaskTitle = {
  element: "div",
  className: ["displayTaskTitle"],
  textContent: "Mock Task",
};
const displayTaskHeader = {
  element: "div",
  className: ["displayTaskHeader"],
  childNodes:[addTaskBtn, displayTaskTitle, editTaskBtn, removeTaskBtn],
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
const displayDueDateLabel = {
  element: "div",
  className: ["displayDueDateLabel"],
  textContent: "Due Date:",
};
const displayDueDateItem = {
  element: "div",
  childNodes: [displayDueDateLabel, displayDueDate],
};

const displayDueDay = {
  element: "div",
  className: ["displayDueDay"],
  textContent: "Mock Task Due Day",
};
const displayDueDayLabel = {
  element: "div",
  className: ["displayDueDayLabel"],
  textContent: "Due Day:",
};
const displayDueDayItem = {
  element: "div",
  childNodes: [displayDueDayLabel, displayDueDay],
};
const displayDeadline = {
  element: "div",
  className: ["displayDeadline"],
  textContent: "Mock Task Time Remaining",
};
const displayDeadlineLabel = {
  element: "div",
  className: ["displayDeadlineLabel"],
  textContent: "Deadline:",
};
const displayDeadlineItem = {
  element: "div",
  childNodes: [displayDeadlineLabel, displayDeadline],
}
const displayPriority = {
  element: "div",
  className: ["displayPriority"],
  textContent: "Mock Task Priority",
};
const displayPriorityLabel = {
  element: "div",
  className: ["displayPriorityLabel"],
  textContent: "Priority:",
};
const displayPriorityItem = {
  element: "div",
  childNodes: [displayPriorityLabel, displayPriority],
}
const displayTaskStats = {
  element: "div",
  className: ["displayTaskStats"],
  childNodes: [displayDueDateItem, displayDueDayItem, displayDeadlineItem, displayPriorityItem],
};
const displayTaskDetails = {
  element: "div",
  className: ["displayTaskDetails"],
  childNodes: [displayTaskDescription, displayTaskStats],
};
const taskDisplay = {
  element: "div",
  className: ["taskDisplay"],
  childNodes:[displayTaskHeader, displayTaskDetails, toggleDoneBtn],
};

export default taskDisplay