import React from 'react'
import "./DeleteTest.css"

import CloseButton from 'react-bootstrap/CloseButton';

export default function DeleteTest({handleClose,setTask}){
  
    return(
        <>
        <div className="popup-box-DeleteTest">
      
        <div className="box-DeleteTest">
            <div className='title-DeleteTest'>
        <h1>Вы уверены?</h1>
        <CloseButton onClick={handleClose} className='CloseButton-DeleteTest'/> 
       
        </div>
        
    <button className='OK2-DeleteTest' onClick={handleClose}>Отмена</button>
    <button className='OK-DeleteTest' onClick={()=> setTask("yes")}>Удалить</button>
        </div>
       
      </div>
      
</>
    )
}