import React  from "react";
import { BrowserRouter as Router,Routes, Route, Link  } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
let NavBAR=(props)=>{
    
return <>
 
    <Router>
<header>

        <h1 id="nav-title">DEV.TO</h1>
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
               
           
            </ul>
        </nav>
      
    </header>
  
    <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
    </Router>
    
    
   
</>

}
export default NavBAR;
