import React from "react";

 class FormDyn extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            address:'',
            nam:'',
            add:''
        }
    }
    handleUserName=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleAddress=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    handleSubmit=(event)=>{
        this.setState({
        nam:this.state.username,
        add:this.state.address});
         alert(`${this.state.username} | ${this.state.address}`)
         event.preventDefault();
    }
    render(){
        
        return<>
         
            Dynamic Form With Event Handle
       <hr/><br/> 
        <form  onSubmit={this.handleSubmit}>
            <div>
        <label>UserName:</label>
        <input type='text' value={this.state.username} name={this.state.username} onChange={this.handleUserName}></input>
        <label>Address:</label>
        <input type='text' value={this.state.address} name={this.state.address} onChange={this.handleAddress}></input>
     
        <button >Submit</button>
        </div>
        </form >
        {this.state.nam }
        {this.state.add }
        
        </>
    }
 }

export default FormDyn;