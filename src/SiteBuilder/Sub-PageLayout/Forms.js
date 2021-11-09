import submitCancel from "./Sub-Forms/SubmitCancel";
import projectFormGroup from "./Sub-Forms/ProjectForm";
import taskFormGroup from "./Sub-Forms/TaskForm";

const taskModalTitle = {
    element: "legend",
};
const taskModalBox = {
    element: "fieldset",
    className: ["taskFormModal","modalBox","hide"],
    childNodes: [taskModalTitle, taskFormGroup, submitCancel],
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
    childNodes: [taskModalBox, projectModalBox],
};

export default formModal;