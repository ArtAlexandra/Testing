import React, {useState} from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import "./NewPersone.css"
export default function NewPersone({setAddPersone, handleClose,newUser, setNewUser}){
    const [empty1, setEmpty1] = useState(false)
    const [empty2, setEmpty2] = useState(false)
    const [empty3, setEmpty3] = useState(false)
    

    const list_test = [
        {
            id: 1,
            name: "Тестировщик1"

        },
        {
            id: 2,
            name: "Тестировщик2"

        },
        {
            id: 3,
            name: "Тест"

        },
        {
            id: 4,
            name: "Какое-то очень длинное название"

        },

    ]

    const InputNewUser = (e)=>{
        setNewUser(prev=>({...prev,[ e.target.name]: e.target.value}))
       
    }
    const AddUser = (e)=>{
        console.log(newUser)
        if(newUser.name==="") setEmpty1(true)
        if(newUser.email==="") setEmpty2(true)
        if(newUser.password==="") setEmpty3(true)

       if(newUser.name&&newUser.email&&newUser.password) setAddPersone(false)
    }
    
    return(
        <>
            <div className="new-persone__popup-box">
                <div className="new-persone__box">
                    <div className='new-persone__box__title'>
                       {newUser?.name ? <h1>Редактирование</h1>: <h1>Новый пользователь</h1>} 
                        <CloseButton onClick={handleClose}  className='new-persone__box__close-button'/>
                    </div>
                    <div className='new-person__box__error'>
                        {empty1 ||empty2||empty3 ? <p>Необходимо заполнить все поля</p>: null}
                    </div>
                    <input className={empty1? 'new-persone__input_error new-persone__box__input': 'new-persone__box__input'} type="text" placeholder="Имя" name="name" value={newUser?.name||""} onChange={InputNewUser}/>
     
                    <input className={empty2? 'new-persone__input_error new-persone__box__input': 'new-persone__box__input'} type="email"  placeholder="Электронный адрес" name="email" onChange={InputNewUser}/>
                    <input className={empty3? 'new-persone__input_error new-persone__box__input': 'new-persone__box__input'} type="password" placeholder="Пароль" name="password" onChange={InputNewUser}/>

                    <Form.Select  className='new-persone__box__select' name="task" onChange={InputNewUser}>
                        <option>Выбрать тест</option>
                        {
                            list_test.map((test)=>{
                                return(
                                    <option value={test.name} key={test.id}>{test.name}</option>
                                )
                            })
                        }
                    </Form.Select>

                    <button className='new-persone__box__button' onClick={AddUser}>Добавить пользователя</button>
                </div>
    
            </div>
        </>
    )
}
