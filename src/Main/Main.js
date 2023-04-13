
import "../TakeTest/DoTest.css";
//import FormList from "./FormList";
//import Picture from './Picture';

import React, {useState} from "react";

import "./LookResultTest"

import "../TakeTest/DoTest";
//import Form from "./Form";
import "../CreateTest/FormCreateTest"
import LookResultTest from "./LookResultTest";
import TestList from "./TestList";

//import NavBarUsers from "./NavBarUsers";
//import {SketchField, Tools} from 'react-sketch';


 const  Main = ({props})=>{
  const [admin, setAdmin] = useState(true)
 
  /*
  let state = {
    time: 0,
    count:0,
    status: 0,
  }*/
  
  //const [see, setSee] = useState(0)
  //const date = new Date()*/
//const hour  = date.getHours();



  return (
    <>
 

  <button onClick={(e)=>setAdmin(!admin)}>Поменять роль</button>
 {admin?<> 
  <p>Админ</p>
  <TestList/>

 
 </>:
 <>
{/*} <NavBarUsers/>*/}
 <p>Пользователь</p>
 <LookResultTest/>
 
 </>}
   {/*}
   <Form/>*/}
       
        
        
     
        {/*
        
    <div className="App_Answer">
    
     <FormList/> {/*Блок с написанием слов и тестом 
     <Picture/>Блок с картинкой 
   
   </div>*/}
  
   

  
    </>
  );
}

export default Main;

