import taskDisplay from "./Sub-Content/DisplayTask";

const projectTitleBar = {
    element: "div",
    className: ["projectTitleBar"],
    textContent: "Mock Project",
};
const taskGrid = {
    element: "div",
    className: ["taskGrid"],
};
const contentBody = {
    element: "div",
    className: ["content"],
    childNodes: [projectTitleBar, taskGrid, taskDisplay],
};

export default contentBody;