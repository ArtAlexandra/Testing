import React from 'react'
import "./DeletePerson.css"


export default function DeletePerson({setIsDelete, setAgree}){
 
    const  delete_persone =()=>{
        setAgree(true)
        setIsDelete(false)
    }
    return(
        <>
        <div className="delete-person__popur-box">
     
            <div className="delete-person__box">
                <div className='delete-person__box__title'>
                    <h1>Вы уверены?</h1>
                  
                </div>
        
                <button className='delete-person__box__cancel' onClick={(e)=>setIsDelete(false)}>Отмена</button>
                <button  className='delete-person__box__delete' onClick={delete_persone}>Удалить</button>
            </div>
       
        </div>

       
        </>
    )
}