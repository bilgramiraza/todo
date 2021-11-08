import { addProjectBtn, addTaskBtn, removeProjectBtn, editProjectBtn } from "./Buttons";

  const menuBarBtns = {
    element: "div",
    className: ["menuBarBtns"],
    childNodes: [addProjectBtn,
                 addTaskBtn,
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
  
export default menuBar;