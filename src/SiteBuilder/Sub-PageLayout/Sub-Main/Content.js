import taskDisplay from "./Sub-Content/DisplayTask";

const projectTitleBar = {
    element: "div",
    className: ["projectTitleBar"],
    textContent: "Mock Project",
};
const taskPanel = {
    element: "div",
    className: ["taskPanel"],
};
const contentBody = {
    element: "div",
    className: ["content"],
    childNodes: [projectTitleBar, taskPanel, taskDisplay],
};

export default contentBody;