import React from 'react'
import "./SaveTest.css"
import CloseButton from 'react-bootstrap/CloseButton';

export default function SaveTest({setSave , nameTest, setNameTest, porog, setPorog, h, setH, min, setMin, handleClose}){
    return(
        <>
         <div className="popup-box-DeletePerson">
     
     <div className="box-DeletePerson">
         <div className='title-DeletePerson'>
     <h1>Сохранение</h1>
     <CloseButton onClick={()=>setSave(false)} className='CloseButton-DeletePerson'/>
    
     </div>
     
 <input className="nameTest" type="text" placeholder='Название теста' value={nameTest|| ""}onChange={(e)=>setNameTest(e.target.value)}/>
<div className='deteil'>
 <h3>Порог</h3> 
        <input className='input1' type="text" value={porog || ""} onChange={(e)=>setPorog(e.target.value)}/>
        <h3>%</h3>
        <input className='input1 input2' type="text" value={h||""}onChange={(e)=>setH(e.target.value)}/>
        <h3>ч</h3>
        <input className='input1' type="text" value={min||""}onChange={(e)=>setMin(e.target.value)}/>
        <h3>мин</h3>
        </div>
        <button className="saveTest" onClick={()=>setSave(false)}>Сохранить тест</button>
     </div>
    
   </div>
        </>
    )
}