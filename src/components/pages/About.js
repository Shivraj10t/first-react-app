import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import LifecycleA from "../LifecycleA";
import LifecycleB from "../LifecycleB";
import StyleSheet from "../StyleSheet";

const About=()=>{
    return (<React.Fragment> 
    <h1>About</h1>
    <StyleSheet isValid={true}/>
   <LifecycleA></LifecycleA>
  <LifecycleB/>
    </React.Fragment>)
}

export default About;