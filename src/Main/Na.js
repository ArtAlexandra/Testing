import React from 'react'
import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';//, Container 
//import Button from 'react-bootstrap/Button';
import Users from '../Users/Users';
import Result from '../Result/Result';
import '../Result/Result';
import  '../Users/Users';
import "./Navibar.css";

import Come from './Come'
import {Component} from 'react';
import Main from './Main';
import LookResultTest from './LookResultTest';
//import Footer from './Footer';
//import NewPerson from './NewPerson';
import Form from '../TakeTest/Form';
import FormCreateTest from '../CreateTest/FormCreateTest';

export default class NaviBar extends Component {
 
  render(){

  return (
    
    <>
    <Router>
      <Navbar  className="Navibar">
       
        <Navbar.Brand  ><img src="/Pict/label.png" alt="label" className="pict-Navibar"/></Navbar.Brand>
       
        <Nav className="m-auto" >
        <Nav.Link    className={"NavibarItem"} href="/"><b>Тесты</b></Nav.Link>
          <Nav.Link  className={"NavibarItem"} href={"/Result"}><b>Результаты</b></Nav.Link>
          <Nav.Link className={"NavibarItem "}  href={"/Users"}><b>Пользователи</b></Nav.Link>
          <div className={"NavDropdown "}>
          <Nav.Link   href={"/Come"}><b>Имя Фамилия</b> <img src="/Pict/Exit.png" alt="exit"/></Nav.Link>
            </div>
         
        {/*}  <Button   className={"NavibarItem"} variant="light"href={"/NewPerson"}>Новый</Button>
         <Route path="/NewPerson" element={<NewPerson/>}/>
        */}
        </Nav>
      
    </Navbar>
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Users" element={<Users />} />
        
         
        <Route path="/Come" element={<Come />} />
        
 
  <Route path="/LookResultTest" element={<LookResultTest/>}/>
  <Route path="/passing" element={<Form/>}/>
  <Route path="/createTest" element={<FormCreateTest/>}/>

      </Routes>
      </Router>
      
      
      
    </>
  );}
}

