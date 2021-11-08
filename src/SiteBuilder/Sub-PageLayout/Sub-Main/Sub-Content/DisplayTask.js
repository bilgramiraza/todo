import { editTaskBtn, removeTaskBtn, toggleDoneBtn } from "../Buttons";

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
    childNodes: [editTaskBtn, displayDueDate, displayPriority, removeTaskBtn],
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

export default taskDisplay