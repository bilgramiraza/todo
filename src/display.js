import DOMBuilder from "./DOMElements";
import pageLayout from "./pageLayout";

function basePageBuilder() {
    pageLayout.forEach((obj)=>{
        DOMBuilder(obj);
    });
}

export default basePageBuilder;