 
import React from "react";

class LifecycleB extends React.Component{

    constructor(){
        super();
        this.state={
            name:'Shivraj B'
        }
        console.log("LifeCycle B:----constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle B:----getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycle B:----componentDidMount")
    }
    render(){
        console.log("LifeCycle B:----render")
        return (<>
    
            <h1>LifecycleB</h1>
            </>)
    }
      
    
} 
export default LifecycleB;