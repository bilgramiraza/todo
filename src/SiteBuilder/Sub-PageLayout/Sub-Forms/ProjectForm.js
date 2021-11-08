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
export default projectFormGroup;