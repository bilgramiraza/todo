/*
Expected structure of 'DOMObject'
const DOMObject =
     {
        "type":"*HTMLTag*",
        "class":[*Array of Strings*],
        "textContent": "*Text To be Displayed*",
        "childNodes": [{},{}],//Contains child elements in same format 
    };
*/
function DOMBuilder(DOMObject, parentNode=null) {
        const element = document.createElement(DOMObject.type);
        if(DOMObject.className)
            element.classList.add(...DOMObject.className);

        if(DOMObject.textContent)
            element.textContent = DOMObject.textContent;

        if(DOMObject.EventHandler)
            element.addEventListener(DOMObject.EventHandler.type, ()=>{
                DOMObject.EventHandler.function();
            }); 
        if(DOMObject.childNodes)
        DOMObject.childNodes.forEach((object)=>{
                DOMBuilder(object, element);
            });

        if(parentNode){
            parentNode.appendChild(element);
        }
        else
            document.body.appendChild(element);
}

export default DOMBuilder;