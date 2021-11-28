const pageTitle = {
    element: "h1",
    textContent: "TODO TRACKER",
};
const darkModeToggleInput = {
    element: "input",
    attributes: {
        type: "checkbox",
        id: "toggle",
    },
};
const darkModeToggleLabel = {
    element: "label",
    attributes: {
        for: "toggle",
    },
};
const darkModeBtnGroup = {
    element: "div",
    className: ["darkModeBtnGroup"],
    childNodes: [darkModeToggleInput, darkModeToggleLabel],
};
const header = {
    element: "header",
    childNodes: [pageTitle, darkModeBtnGroup],
};

export default header;