import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import React from 'react';




import DoTest from "./TakeTest/DoTest";




import Users from './Users/Users';
import Result from "./Result/Result";
import Come from "../src/Main/Login/Come";

import Main from "./Main/Main";
import LookResultTest from "./Main/LookResultTest";

import Form from "./TakeTest/Form";
import FormCreateTest from "./CreateTest/FormCreateTest";
import Navibar from "./Main/Navibar";
import Footer from "./Main/Footer";
import FormPassedTest from "./Result/FormPassedTest";
import ErrorURL from "./ErrorURL";


const Layout = () => {
  return (
    <>
     <Navibar/>
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/result",
        element: <Result />
      },
      {
        path: "/Users",
        element: <Users />,
      },
      {
        path: "/LookResultTest",
        element: <LookResultTest/>
      },
      {
        path: "/passing",
         element: <Form/>
      },
      {
        path: "result/passingtest",
        element: <FormPassedTest/>
      },
      {
        path:"/DoTest",
        element:<DoTest/>
      },
     
      {
        path: "/createTest",
        element: <FormCreateTest/>
      },
     
    ],
  },
  {
    path: "*",
    element:<ErrorURL/>
  },
  {
    path: "/come",
    element: <Come />,
  },
]);

export default function App() {
  


  return (
    <>
   
     <div>
   
        <RouterProvider router={router} />
      </div>
   {/*
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
   
  */}

     </>
  );}
//}
