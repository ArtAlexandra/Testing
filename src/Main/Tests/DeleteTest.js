import React from 'react'
import "./DeleteTest.css"



export default function DeleteTest({setIsDelete, setAgree}){
   
       const deleteTest = (e)=>{
        setAgree(true)
        setIsDelete(false)
       }

  
    return(
        <>
        <div className="delete-test__popup-box">
      
            <div className="delete-test__box">
                <div className='delete-test__box__title'>
                    <h1>Вы уверены?</h1>
                </div>
        
                <button className='delete-test__box__cancel' onClick={(e)=> setIsDelete(false)}>Отмена</button>
                <button className='delete-test__box__delete' onClick={deleteTest}>Удалить</button>
            </div>
       
      </div>
      
</>
    )
}