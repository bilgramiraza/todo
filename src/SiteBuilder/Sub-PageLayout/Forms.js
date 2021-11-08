import submitCancel from "./Sub-Forms/SubmitCancel";
import projectFormGroup from "./Sub-Forms/ProjectForm";
import todoItemFormGroup from "./Sub-Forms/TaskForm";

const itemModalTitle = {
    element: "legend",
};
const itemModalBox = {
    element: "fieldset",
    className: ["itemFormModal","modalBox","hide"],
    childNodes: [itemModalTitle, todoItemFormGroup, submitCancel],
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

export default formModal;