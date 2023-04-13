import React, {useState} from 'react';

import "./Come.css";
import Password from './Password';

export default function Come(){
  const [isOpen, setIsOpen] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  function handleClose(){
    setIsOpen(!isOpen);
  }
   return(
        <div className='Come_come'>
        <div className='come_letter'>
        <img src="/Pict/letter.png" alt="come"/>
        <h2 className="Text_come">Система автоматического тестирования студентов</h2>
        <p className="Text_come">Съешь ещё этих мягких французских булок, да выпей же чаю</p>
        </div>
          <div  className='Come' >
          
          
            <h2 className='Text'>Добро пожаловать!</h2>
            <input className='InputCome' type="email" placeholder="Электронный адрес"/>
            <input className='InputCome' type="password" placeholder="Пароль"/>
             
           <p className='link_come' >Забыли пароль?</p>{/*onClick={(e)=>setIsOpen(true)}*/}
           
          <button className="ComeButton" >
              Войти
          </button>
          <div className="footer-main2">
          </div>
         
        </div>{
          isOpen? 
          <Password handleClose={handleClose} setErrorPassword={setErrorPassword} setIsOpen={setIsOpen}/> :null
        }
      </div>
    )
} 


/**
 
 <Form >
            <h2 className='Text'>Добро пожаловать!</h2>
            <Form.Group className="mb-3 Come3" controlId="formBasicEmail">
              <Form.Control className='InputCome' type="email" placeholder="Электронный адрес" />
            </Form.Group>
            <Form.Group className="mb-3 Come3" controlId="formBasicPassword">
              <Form.Control className='InputCome' type="password" placeholder="Пароль" />
            </Form.Group>
            <Nav.Item className='ComeLink'>
              <Nav.Link  href="/home">Забыли пароль?</Nav.Link>
            </Nav.Item>
          <button className="ComeButton" >
              Войти
          </button>
          <div className="footer-main2">
          </div>
          </Form>
 */