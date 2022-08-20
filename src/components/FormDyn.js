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
    logout=()=>{
        
        localStorage.removeItem('Name')
    }
    handleSubmit=(event)=>{
      
      if (this.state.username=="Shivraj" && this.state.address=="123") {
            localStorage.setItem('Name',this.state.username)
            alert("Login SucessFull")
        } else {
            alert("You Are Not Authorized")
            event.preventDefault();
        }
        // this.setState({
        // nam:this.state.username,
        // add:this.state.address});
        //  alert(`${this.state.username} | ${this.state.address}`)
       
    }
     
      
    render(){
        // console.table(localStorage.getItem('Name'))
        return<>
         
            Dynamic Form With Event Handle
            <p>name:{localStorage.getItem('Name') } </p>
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
        <button onClick={this.logout}>logout</button>
        </>
    }
 }

export default FormDyn;