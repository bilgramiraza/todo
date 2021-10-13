import DOMBuilder from "./DOMElements";

function DomHandler() {
    const pageObject = [
        {
            "type" : "header",
            "childNodes" : [
                {
                    "type" : "button",
                    "textContent" : "Add Project",
                    "EventHandler" : {
                        "type" : "click",
                        "function" : function () {
                            console.log('Add Project');
                        },
                    },
                },
                {
                    "type" : "button",
                    "textContent" : "Display Project",
                    "EventHandler" : {
                        "type" : "click",
                        "function" : function () {
                            console.log('Display Project');
                        },
                    },
                },
            ],
        },
        {
            "type" : "main",
            "childNodes" : [
                {
                    "type" : "div",
                    "className" : ["menuBar"],
                    "childNodes" : [
                        {
                            "type" : "button",
                            "textContent" : "Add Task",
                            "EventHandler" : {
                                "type" : "click",
                                "function" : function () {
                                    console.log('Add Task');
                                },
                            },
                        },
                        {
                            "type" : "button",
                            "textContent" : "Display Tasks",
                            "EventHandler" : {
                                "type" : "click",
                                "function" : function () {
                                    console.log('Display Tasks');
                                },
                            },
                        },
                        {
                            "type" : "button",
                            "textContent" : "Remove Project",
                            "EventHandler" : {
                                "type" : "click",
                                "function" : function () {
                                    console.log("Remove Project");
                                },
                            },
                        },
                    ],
                },
                {
                    "type" : "div",
                    "className" : ["content"],
                    "childNodes" : [
                        {
                            "type" : "button",
                            "textContent" : "Toggle Done",
                            "EventHandler" : {
                                "type" : "click",
                                "function" : function () {
                                    console.log("Toggle Done");
                                },
                            },
                        },
                        {
                            "type" : "button",
                            "textContent" : "Change Priority",
                            "EventHandler" : {
                                "type" : "click",
                                "function" : function () {
                                    console.log("Change Priority");
                                },
                            },
                        },
                        {
                            "type" : "button",
                            "textContent" : "Change Discription",
                            "EventHandler" : {
                                "type" : "click",
                                "function" : function () {
                                    console.log("Change Discription");
                                },
                            },
                        },
                        {
                            "type" : "button",
                            "textContent" : "Remove Item",
                            "EventHandler" : {
                                "type" : "click",
                                "function" : function () {
                                    console.log("Remove Item");
                                },
                            },
                        },
                    ],
                }
            ],
        },
        // {
        //     "type" : "form",
        //     "className" : ["cover", "hide"],
        //     "childNodes" : [
        //         {
        //             "type" : "p",
        //             "className" : null,
        //             "textContent" : null,
        //             "childNodes" : [],
        //         },
        //         {
        //             "type" : "p",
        //             "className" : null,
        //             "textContent" : null,
        //             "childNodes" : [],
        //         },
        //         {
        //             "type" : "p",
        //             "className" : null,
        //             "textContent" : null,
        //             "childNodes" : [],
        //         },
        //         {
        //             "type" : "p",
        //             "className" : null,
        //             "textContent" : null,
        //             "childNodes" : [],
        //         },
        //         {
        //             "type" : "p",
        //             "className" : null,
        //             "textContent" : null,
        //             "parentNode" : "form",
        //             "childNodes" : [],
        //         },
        //         {
        //             "type" : "p",
        //             "className" : null,
        //             "textContent" : null,
        //             "childNodes" : [],
        //         },
        //         {
        //             "type" : "p",
        //             "className" : null,
        //             "textContent" : null,
        //             "childNodes" : [],
        //         },
        //     ],
        // },
        {
            "type":"footer",
            "childNodes":[
                {
                    "type":"p",
                    "textContent":"Made By S.M. Raza Hassan Bilgami",
                }
            ],
        },
    ];

    pageObject.forEach((obj)=>{
        DOMBuilder(obj);
    });
}

export default DomHandler;

