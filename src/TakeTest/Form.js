import React, {useState} from 'react'
import DoTest from './DoTest';

import "./Form.css"
import { useNavigate } from 'react-router-dom';
export default function Form(){


    const [Todos, SetTodos] = useState([]);
    const [number, setNumber] = useState(false)
    const [markers, setMarkers] = useState([])
    
    const navigate = useNavigate()
  
    function SeeNewTest(){
       
            return <DoTest Todos={Todos} SetTodos={SetTodos}  number={number} setNumber={setNumber} markers={markers} setMarkers={setMarkers}  />
        
    }
    const FinishTest = ()=>{
        console.log(Todos)
        navigate("/")
    }
    return(
       
       
       <div className='form'>
    <div className='footer-form'>
        <button onClick={FinishTest}>Завершить</button> 
        </div>  
        <div className='body-form'>
            {SeeNewTest()}
            

        </div>
       
       
        </div>
    )
}