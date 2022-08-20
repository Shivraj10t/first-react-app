import React from "react";
import ListKay19 from './Key19'


class ListData18 extends React.Component{
state={
    user:[
        {id:1,name:'Shivraj',class:'MCA',sub:['cpp1','php1']},
        {id:2,name:'Shiv',class:'MCA 1',sub:['cpp2','php2']},
        {id:3,name:'Raj',class:'MCA 2',sub:['cpp3','php3']},
        {id:4,name:'Shiva',class:'MCA 3',sub:['cpp','php']},
        {id:5,name:'Shivarj 18',class:'MCA 4',sub:['cpp','php']}

]
    
}
    render(){
         
        const data=this.state.user.map(d=>
           
        <>
        
            <li key={d.id}><span >{d.id}</span> | <span>{d.name}</span> | <span>{d.class}</span>  | {d.sub.map((q)=><li key={q}>{q}</li>)}</li>
           <hr></hr>
        </> 
       );
        return <React.Fragment>
            <h1>List Data 18</h1>
            <br>
            </br>
<ul>{data}</ul>
 

        </React.Fragment>
    }
}

export default ListData18;