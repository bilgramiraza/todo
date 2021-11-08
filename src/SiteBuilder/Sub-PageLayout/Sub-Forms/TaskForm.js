const todoTitleLabel = {
    element: "label",
    textContent: "Title",
    attributes: {
      for: ["title"],
    },
  };
  const todoTitleInput = {
    element: "input",
    type: "text",
    attributes: {
      id: "title",
      placeholder: "title",
    },
  };
  const todoItemTitleItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [todoTitleLabel, todoTitleInput],
  };
  const todoDiscLabel = {
    element: "label",
    textContent: "Discription",
    attributes: {
      for: ["discription"],
    },
  };
  const todoDiscInput = {
    element: "textarea",
    attributes: {
      id: "discription",
      rows: "3",
      placeholder: "Enter Details here",
    },
  };
  const todoItemDiscItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [todoDiscLabel, todoDiscInput],
  };
  const todoDueDateLabel = {
    element: "label",
    textContent: "Due Date",
    attributes: {
      for: ["due-date"],
    },
  };
  const todoDueDateInput = {
    element: "input",
    attributes: {
      type: "date",
      id: "due-date",
    },
  };
  const todoItemDueDateItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [todoDueDateLabel, todoDueDateInput],
  };
  const todoPriorityLabel = {
    element: "label",
    textContent: "Priority",
    attributes: {
      for: ["priority"],
    },
  };
  const todoPriorityOption0 = {
    element: "option",
    textContent: "Select A Priority",
    attributes: {
      value: "0",
      selected: "",
    },
  };
  const todoPriorityOption1 = {
    element: "option",
    textContent: "Normal",
    attributes: {
      value: "1",
    },
  };
  const todoPriorityOption2 = {
    element: "option",
    textContent: "High",
    attributes: {
      value: "2",
    },
  };
  const todoPriorityOption3 = {
    element: "option",
    textContent: "IMPORTANT",
    attributes: {
      value: "3",
    },
  };
  const todoPriorityInput = {
    element: "select",
    attributes: {
      id: "priority",
    },
    childNodes:[todoPriorityOption0, todoPriorityOption1, todoPriorityOption2, todoPriorityOption3],
  };
  const todoItemPriorityItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [todoPriorityLabel, todoPriorityInput],
  };
  const todoDoneLabel = {
    element: "label",
    textContent: "Done",
    attributes: {
      for: ["done"],
    },
  };
  const todoDoneCheckbox = {
    element: "input",
    attributes: {
      type: "checkbox",
      id: "done",
    },
  };
  const todoItemDoneItem = {
    element: "div",
    className: ["form-item"],
    childNodes: [todoDoneLabel, todoDoneCheckbox], 
  };
  const todoItemFormGroup = {
    element: "div",
    className: ["form-group"],
    childNodes: [
      todoItemTitleItem,
      todoItemDiscItem,
      todoItemDueDateItem,
      todoItemPriorityItem,
      todoItemDoneItem,
    ],
  };
export default todoItemFormGroup;