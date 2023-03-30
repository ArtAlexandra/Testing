import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import "./NewPersone.css"
export default function NewPersone({setAddPersone, handleClose, setName, setEmail, setPassword, setTask}){
    
    return(
        <>
         <div className="popup-box-NewPersone">
     
     <div className="box-NewPersone">
         <div className='title-NewPersone'>
     <h1>Новый пользователь</h1>
     <CloseButton onClick={handleClose}  className='CloseButton-NewPersone'/>
     </div>
     <input className='InputCome' type="text" placeholder="Имя" onChange={(e)=>setName(e.target.value)}/>
     
     <input className='InputCome' type="email" placeholder="Электронный адрес" onChange={(e)=>setEmail(e.target.value)} />
     <input className='InputCome' type="password" placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)}/>
     <Form.Select  className='select-test-NewPersone' onChange={(e)=>setTask(e.target.value)}>
      <option>Выбрать тест</option>
      <option value=" Тестировщик1" >Тестировщик1</option>
      <option value=" Тестировщик2" >Тестировщик2</option>
      <option value=" Тест" >Тест</option>
    </Form.Select>

 <button className='OK-NewPersone' onClick={()=> setAddPersone(false)}>Добавить пользователя</button>
     </div>
    
   </div>
        </>
    )
}
