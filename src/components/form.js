
import React from "react";


class InputForm extends React.Component{
 
    constructor(){
        super();
        this.state  ={
            msg:"This Is state"
        }
    }
    change(){
        this.setState({     
        msg:"Yes"          
        })
    }
    render(){
        return <>    
        <form className="container">
          
            <label>Today Task : &nbsp; <input id="task" type="text" placeholder="Enter Today Task" name="todaytask"/>
            </label>
            <br></br>
         <button onClick={()=>{
    alert(`Button ${'3'} Click`);
         }} >Save </button>
        </form>
        <label>{this.state.msg}</label><br></br>
        <button onClick={()=>{this.change()}}>Click Me</button>
        </>
    }
};

 

export default InputForm;