import React from 'react'
import "./Navibar.css";
import {
    BrowserRouter as Router,
   //Routes,
   // Route,
    } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';//, Container 
  
  
export default function NavBarUsers(){
    return(
        <>
         <nav className="nav-Navibar">
       
       <Router>
       
       <Navbar  >
       <img src="/Pict/label.png" alt="label" className="pict-Navibar"/>
       <Nav  >
         <ul>
         
         <div className={"NavDropdown "}>
         <Nav.Link  href="/Come">Name Surname<img src="/Pict/Exit.png" alt="exit"/></Nav.Link >
        
 </div>
 </ul>
 </Nav>
       </Navbar>
       </Router>
     </nav>
        
        </>
    )
}