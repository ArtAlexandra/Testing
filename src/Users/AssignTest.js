import React, {useState} from 'react'
import "./AssignTest.css"
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

export default function AssignTest({handleClose,setTask, setIsOpen}){
    const [answer, setAnswer] = useState("")
    
    const AddTask = (e)=>{
       
        setTask(answer)
        console.log(answer)
        setIsOpen(false)
    }
    return(
        <>
            <div className="assign-test__popup-box">
     
                <div className="assign-test__box">
                    <div className='assign-test__box__title'>
                        <h1>Назначить тест</h1>
                        <CloseButton onClick={handleClose} className='assign-test__box__close-button'/>
                    </div>
        
                    <Form.Select  className='assign-test__box__select' onChange={(e)=>setAnswer(e.target.value)}>
                        <option>Выбрать тест</option>
                        <option value=" Тестировщик1" >Тестировщик1</option>
                        <option value=" Тестировщик2" >Тестировщик2</option>
                        <option value=" Тест" >Тест</option>
                    </Form.Select>
   
                    <button className='assign-test__box__button' onClick={AddTask }>Подтвердить</button>
                </div>  
       
            </div>
      
        </>
    )
}