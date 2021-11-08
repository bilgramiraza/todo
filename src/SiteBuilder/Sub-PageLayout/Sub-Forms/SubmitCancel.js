const submitBtn = {
    element: "button",
    className: ["Submit"],
    textContent: "Submit",
    attributes: {
      type: "button",
    },
};
const cancelBtn = {
    element: "button",
    className: ["Cancel"],
    textContent: "Cancel",
    attributes: {
      type: "button",
    },
};
const submitCancel = {
    element: "div",
    className: ["SubmitCancel"],
    childNodes: [submitBtn, cancelBtn],
};

export default submitCancel;