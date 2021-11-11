import { addProjectBtn, removeProjectBtn, editProjectBtn } from "./Buttons";

const projectBtnsTitle = {
  element: "div",
  className: ["projectBtnsTitle"],
  textContent: "Project Menu",
};
  const projectBtns = {
    element: "div",
    className: ["menuBarBtns"],
    childNodes: [addProjectBtn,
                 removeProjectBtn,
                 editProjectBtn],
  };
  const projectMenuGroup = {
    element: "div",
    childNodes: [projectBtnsTitle, projectBtns],
  };
  const projectListTitle = {
    element: "div",
    className: ["projectListTitle"],
    textContent: "Project List",
  };
  const projectList ={
    element: "div",
    className: ["projectList"],
  };
  const projectListGroup = {
    element: "div",
    childNodes: [projectListTitle, projectList],
  };
  const menuBar = {
    element: "div",
    className: ["menuBar"],
    childNodes: [projectMenuGroup, projectListGroup],
  };
  
export default menuBar;