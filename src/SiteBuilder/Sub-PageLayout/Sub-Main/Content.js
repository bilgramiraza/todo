import taskDisplay from "./Sub-Content/DisplayTask";

const projectTitleBar = {
    element: "div",
    className: ["projectTitleBar"],
};

const projectTotalTasksLabel = {
    element: "div",
    className: ["projectStatsLabel"],
    textContent: "Total Tasks",
};
const projectTotalTasks = {
    element: "div",
    className: ["projectStats"],
};
const projectTotalTasksGroup = {
    element: "div",
    className: ["projectStatsGroup"],
    childNodes: [projectTotalTasksLabel, projectTotalTasks],
};

const projectActiveTasksLabel = {
    element: "div",
    className: ["projectStatsLabel"],
    textContent: "Active Tasks",
};
const projectActiveTasks = {
    element: "div",
    className: ["projectStats"],
};
const projectActiveTasksGroup = {
    element: "div",
    className: ["projectStatsGroup"],
    childNodes: [projectActiveTasksLabel, projectActiveTasks],
};

const projectTitleGroup = {
    element: "div",
    className: ["projectTitleGroup"],
    childNodes: [projectTotalTasksGroup ,projectTitleBar ,projectActiveTasksGroup],
};

const taskPanel = {
    element: "div",
    className: ["taskPanel"],
};
const contentBody = {
    element: "div",
    className: ["content"],
    childNodes: [projectTitleGroup, taskPanel, taskDisplay],
};

export default contentBody;