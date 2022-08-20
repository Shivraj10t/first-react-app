import React from "react";

const FunctionComponentsEvent=()=>{
    function changeEvent() {
       console.log("Hello Event Handling") 
    }
return <div>
    FunctionComponentsEvent
    <button className="button1" onClick={changeEvent}>Click Me</button>
</div>
}
 export default FunctionComponentsEvent;