import React, {useState} from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import "./Password.css"
export default function Password2({handleClose,  setIsOpen}){
    const [errorPassword, setErrorPassword] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsOpen(false)
        console.log(errorPassword)
    }
    return(
        <>
            <div className="popup-box">
                <div className="box">
                    <div className='title-Password'>
                        <h1>Восстановление пароля</h1>
                        <CloseButton onClick={handleClose}  className='CloseButton-Password'/>
                    </div>
     
                    <input className='InputCome' type="email" placeholder="Электронный адрес" onChange={(e)=>setErrorPassword(e.target.value)}/>

                    <button className='OK-Password' onClick={handleSubmit }>Отправить</button>
                </div>
    
            </div>
        </>
    )
}
