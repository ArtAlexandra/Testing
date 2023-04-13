import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import NaviBar from "./Main/Navibar";
import React, {useState} from 'react';
//import { Router } from "react-router-dom";

import DoTest2 from "./TakeTest/DoTest2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoTest from "./TakeTest/DoTest";


import './Result/Result';
import  './Users/Users';


import Users from './Users/Users';
import Result from "./Result/Result";
import Come from "./Main/Come";

import Main from "./Main/Main";
import LookResultTest from "./Main/LookResultTest";
//import Footer from './Footer';
//import NewPerson from './NewPerson';
import Form from "./TakeTest/Form";
import FormCreateTest from "./CreateTest/FormCreateTest";


export default function App() {
  
//  render(){

  return (
    <>
    {/*Чтобы запустить проект: npm start */}
    <NaviBar/> 
   
  
     <Router>
     <Routes>
      
      <Route path="/DoTest" element={<DoTest/>}/>
      <Route path="/DoTest2" element={<DoTest2/>}/>
      


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
//}
