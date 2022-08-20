import React from "react";
import '../css/style.css'
import InlineCss from "./Inline";

let StyleSheet=(props)=>{
    let CssClassName=props.isValid?'demo font-18':'demo1';
    return <>
    <h1 className={CssClassName}>Style Sheet </h1>
    {/* <InlineCss/> */}
    </>
}
export default StyleSheet;