import React from "react";

class EventHandle extends React.Component {
    course=0;
    constructor(){
        super();      
        this.state=
           { course:0}        
    }
  
    changeEvent=()=> {
        this.setState({
            course:20
        })
      
     }
      
    
    render(){        
        return <>
        <div>
            <p id="n"> {this.state.course}</p>
Class ComponentsEvent
    <button className="button1" onClick={this.changeEvent}>Hit Me</button>
    <ul> 
   {this.props.number.map((a)=> <li>{a}</li>)}
    </ul>
        </div>
        </>
    }
}
export default EventHandle;

