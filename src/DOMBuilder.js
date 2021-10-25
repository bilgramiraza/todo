/*
Expected structure of 'DOMObject'
const DOMObject =
     {
        "element":"*HTMLTag*",
        "class":[*Array of Strings*],
        "textContent": "*Text To be Displayed*",
        *AttributeName*:"*Attribute value*"
        "childNodes": [{DOMObject},{DOMObject},...],//Contains child elements in same format 
    };
*/

function DOMBuilder(DOMObject, parentNode=null) {
        const element = document.createElement(DOMObject.element);
        if(DOMObject.className)
            element.classList.add(...DOMObject.className);
        if(DOMObject.textContent)
            element.textContent = DOMObject.textContent;
        if(DOMObject.for)
            element.setAttribute("for",DOMObject.for)
        if(DOMObject.id)
            element.setAttribute("id", DOMObject.id);
        if(DOMObject.placeholder)
            element.setAttribute("placeholder", DOMObject.placeholder);
        if(DOMObject.rows)
            element.setAttribute("rows", DOMObject.rows);
        if(DOMObject.type)
            element.setAttribute("type", DOMObject.type);
        
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