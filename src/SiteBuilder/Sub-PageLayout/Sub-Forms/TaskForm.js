const taskTitleLabel = {
    element: "label",
    textContent: "Title",
    attributes: {
      for: ["title"],
    },
  };
  const taskTitleInput = {
    element: "input",
    type: "text",
    attributes: {
      id: "title",
      placeholder: "title",
    },
  };
  const taskTitleItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [taskTitleLabel, taskTitleInput],
  };
  const taskDiscLabel = {
    element: "label",
    textContent: "Discription",
    attributes: {
      for: ["discription"],
    },
  };
  const taskDiscInput = {
    element: "textarea",
    attributes: {
      id: "discription",
      rows: "3",
      placeholder: "Enter Details here",
    },
  };
  const taskDiscItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [taskDiscLabel, taskDiscInput],
  };
  const taskDueDateLabel = {
    element: "label",
    textContent: "Due Date",
    attributes: {
      for: ["due-date"],
    },
  };
  const taskDueDateInput = {
    element: "input",
    attributes: {
      type: "date",
      id: "due-date",
    },
  };
  const taskDueDateItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [taskDueDateLabel, taskDueDateInput],
  };
  const taskPriorityLabel = {
    element: "label",
    textContent: "Priority",
    attributes: {
      for: ["priority"],
    },
  };
  const taskPriorityOption0 = {
    element: "option",
    textContent: "Select A Priority",
    attributes: {
      value: "0",
      selected: "",
    },
  };
  const taskPriorityOption1 = {
    element: "option",
    textContent: "Normal",
    attributes: {
      value: "1",
    },
  };
  const taskPriorityOption2 = {
    element: "option",
    textContent: "High",
    attributes: {
      value: "2",
    },
  };
  const taskPriorityOption3 = {
    element: "option",
    textContent: "IMPORTANT",
    attributes: {
      value: "3",
    },
  };
  const taskPriorityInput = {
    element: "select",
    attributes: {
      id: "priority",
    },
    childNodes:[taskPriorityOption0, taskPriorityOption1, taskPriorityOption2, taskPriorityOption3],
  };
  const taskPriorityItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [taskPriorityLabel, taskPriorityInput],
  };
  const taskDoneLabel = {
    element: "label",
    textContent: "Done",
    attributes: {
      for: ["done"],
    },
  };
  const taskDoneCheckbox = {
    element: "input",
    attributes: {
      type: "checkbox",
      id: "done",
    },
  };
  const taskDoneItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [taskDoneLabel, taskDoneCheckbox], 
  };
  const taskFormGroup = {
    element: "div",
    className: ["form-group"],
    childNodes: [
      taskTitleItem,
      taskDiscItem,
      taskDueDateItem,
      taskPriorityItem,
      taskDoneItem,
    ],
  };
export default taskFormGroup;