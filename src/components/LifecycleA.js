 
import React from "react";

class LifecycleA extends React.Component{

    constructor(){
        super();
        this.state={
            name:'Shivraj A'
        }
        console.log("LifeCycle A:----constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle A:----getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycle A:----componentDidMount")
    }
    render(){
        console.log("LifeCycle A:----render")
        return (<>
    
            <h1>LifecycleA</h1>
            </>)
    }
      
    
} 
export default LifecycleA;