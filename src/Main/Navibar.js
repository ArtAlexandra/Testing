import React from 'react'



import "./Navibar.css";

import {
  BrowserRouter as Router,
 //Routes,
 // Route,
  } from "react-router-dom";


import {  useMatch, useResolvedPath } from "react-router-dom"

import { Navbar,Nav} from 'react-bootstrap';//, Container 


export default function Navibar() {
  return (
    <nav className="nav-Navibar">
       
      <Router>
      
      <Navbar  >
      <img src="/Pict/label.png" alt="label" className="pict-Navibar"/>
      <Nav  >
        <ul>
        <CustomLink href="/" >Тесты</CustomLink>
        <CustomLink href="/Result" >Результаты</CustomLink>
        <CustomLink href="/Users" >Пользователи</CustomLink>
        <div className={"NavDropdown "}>
        <Nav.Link  href="/Come">Имя Фамилия <img src="/Pict/Exit.png" alt="exit"/></Nav.Link >
       
</div>
</ul>
</Nav>
      </Navbar>
      </Router>
    </nav>
  )
}

function CustomLink({ href, children, ...props }) {
  const resolvedPath = useResolvedPath(href)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    
    <li className={isActive ? "active" : ""}>
      <Nav.Link href={href} >
        {children}
      </Nav.Link>
    </li>
  
  )
}