import React, {useState} from 'react';

import AssignTest from './AssignTest';
import NewPerson from './NewPersone';
import DeleteTest from '../Main/Tests/DeleteTest';

import 'reactjs-popup/dist/index.css';
import "./Users.css"
import DeletePerson from './DeletePerson';
import { useEffect } from 'react';

export default function Users(){
    useEffect(()=>{
        document.title = 'Список пользователей'
    }, [])

    const [isAdd, setIsAdd] = useState(false)
    const [deleteUsers, setDeleteUsers] = useState([])
    const [agree, setAgree] =useState(false)
   const [id, setId] = useState(0)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password:"",
        task:""
    })

   
   
    const [isOpen, setIsOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false)
    const [sort, setSort] = useState(true)
    const [task, setTask] = useState("")
    let delete_users = []
    const [a, setA] = useState([
        {
            id: 101, 
            name: "nciwe"
        },

    ])

    const people = [
    
        {
            id:0,
            name: "Горбунов Сергей Тимофеевич",
            email: "gorbunoff@gmail.com",
            list_test : "Тестировщик1, Тестирование, Тест",
        },
        {
            id:1,
            name: "Агорелова Елизавета Михайловна",
            email: "gorelovaa.lizavet@mail.ru",
            list_test : "Тестировщик1, Тест",
        },
        {
            id:2,
            name: "Зубов Антон Михайлович",
            email: "zzub_am@gmail.com",
            list_test : "Тест",
        },
        {
            id:3,
            name: "Иванов Артём Михайлович",
            email: "artemivanoff@yandex.ru",
            list_test : "-",
        },
        {
            id:4,
            name: "Кудряшова Василиса Артёмовна",
            email: "kudryash@ya.ru",
            list_test : "Тестировщик1",
        },
        {
            id:5,
            name: "Малов Павел Георгиевич",
            email: "malov.pavel@bk.ru",
            list_test : "Тест",
        },
        {
            id:6,
            name: "Бельникова Яна Тимофеевна",
            email: "yan_timofee@yandex.ru",
            list_test : "Тестировщик2, Тестирование",
        },
        {
            id:7,
            name: "Береханов Андрей Михайлович",
            email: "androohov@mail.ru",
            list_test : "Тестировщик1",
        },
        
       ]
       const [l, setL] = useState(people)

    const togglePopup = () => {
      setIsOpen(!isOpen);
     
        l.map((p)=>{
            return(
                (p?.isChecked === true? p.list_test+=task: null)
                
        )})
      setTask("")
    }

    const [m, setM]= useState([101, 112])
    const Delete = () =>{
       
        setIsDelete(!isDelete)
        let pers = []
        let temp = {}
        let d = [{
            id: 101,
            name: ""
        }]
            l.map((p)=>{
                return(
                     (p?.isChecked === true&& isDelete==="yes"? 
                    (temp = {
                        id: p.id,
                        name: p.name
                    },
                    setM(o=>[...o,temp.id ]),
                    d.push(temp)
                  
                    )
                     :  pers.push(p) )
                         
                     
               )})
               setL(pers)
              
      console.log(a)
     console.log("-----")
     console.log(d)
     console.log(m)
    }

     
   
   
    function Sort(){
        if(sort){
            const sortedTitle = people.sort((a, b)=> {
                if(a.name > b.name){
                    return 1;
                }

                if(a.name < b.name){
                    return -1;
                }

                return 0;

            })

            setSort(false)
            return setL([ ...sortedTitle]);
        }

        else{
            const sortedTitle = people.sort((a, b)=> {
    
            if(a.name < b.name){
                return 1;
            }
            if(a.name > b.name){
                return -1;
            }
            return 0;
    
            })

            setSort(true)
            return setL([ ...sortedTitle]);
        }
}

    const handleChange = (e)=>{
        const {name, checked} = e.target
        if(name==="allSelect"){
            let temp= l.map((p)=>{
                return{...p, isChecked:checked}} 
            )
            setL(temp)
        }

        else{
            let temp = l.map((p)=>{
                return(  p.name===name? {...p,isChecked:checked}: p)
            })
    
            setL(temp)
        }
    }
const EditPerson = ()=>{
    setIsAdd(true)
}

    function Table(){
        return(
            l.map((p)=>{
                return(
              
                    <tr key={p.id + p.name}>
                   
                        <td > <input type="checkbox" 
                        onChange={handleChange}
                        checked={p?.isChecked || false}
                        value={p.name}
                        name={p.name}
                        /></td>
                        <td>{p.name}</td>
                        <td>{p.email}</td>
                        <td>{p.list_test}</td>
                        <td><img src="/Pict/Edit.png" alt="посмотреть детали" onClick={(e)=>{ setNewUser(prev=>({...prev,name: p.name})); setIsAdd(true)}}/></td>
                    </tr>
                )
            })
        )
    }


    function FunctAddPersone(){
        console.log(newUser)
        setIsAdd(!isAdd)
    }


    return(
        <div className='users-Users'>
            {people.length ===0 ?
                <div className="list_people_null-Users">
                    <img src="/Pict/no_users.png" alt="пока нет пользователей"/> 
                    <h2>Пользователей пока нет</h2>
                    <div className='add_persone-Users' onClick={(e)=>setIsAdd(true)}>
                        <button > Добавить</button>
                        <img src="/Pict/PersonAdd.png" alt="+"/> 
                    </div>
                    {isAdd? <NewPerson setAddPersone={setIsAdd} handleClose={FunctAddPersone} newUser={newUser} setNewUser={setNewUser}/>:null}

                </div> : 
                <>
                <div className='users__container'>
                  <p className='result__title'>Список пользователей</p>
                    <div className='users__navbar'>
                    
                        <div className='test-list__navbar__find'>
                            <img src="/Pict/Search.png" alt='поиск'/>
                            <input type='text' placeholder='Найти'/>

                        </div>
                        <div className='users__navbar__items'>
                        <div className='users__navbar__add-test'  onClick={togglePopup} >
                            <p>Назначить тест <img src="/Pict/LibraryAdd.png" alt='назначить тест'/></p>
                            
                        </div>
          
            
                        <div className='users__navbar__button users__navbar__add' onClick={(e)=>setIsAdd(true)}>
                            <p>Добавить<img src="/Pict/PersonAdd.png" alt='назначить тест'/></p>
                            
                        </div>
                        <div className='users__navbar__button users__navbar__delete' onClick={Delete}>
                           
                            <p>Удалить  <img src="/Pict/DeletePers.png" alt='удалить пользователя'/></p>
                        </div>
                        </div>
                    </div>

                    <div className='result__table-users'>
                        <table className='result__table'>
                            <thead>
		                        <tr>
                                    <th><input type="checkbox"   name="allSelect"
                                        checked={l.filter((p)=>p?.isChecked !== true).length<1}
                                        onChange={handleChange} /></th>
			                        <th>Имя <img src="/Pict/up.jpg" onClick={()=>Sort()} alt="sort" className='sort'/></th>
           
			                        <th>Электронный адрес</th>
			                        <th>Назначенные тесты</th>
			                        <th> </th>
		                        </tr>
	                        </thead>


                            <tbody className='result__table__body'>
                                {Table()}
                            </tbody>
                        </table>
                    </div>
      
                    {isOpen? <AssignTest handleClose={togglePopup} setTask={setTask} setIsOpen={setIsOpen}/>:null}
                    {isDelete?<DeletePerson setIsDelete={setIsDelete} setAgree={setAgree}/>:null}
                    {/*  <DeleteTest setIsDelete={setIsDelete} handleClose={Delete} setTask={setIsDelete} />*/}
                    {isAdd? <NewPerson setAddPersone={setIsAdd} handleClose={FunctAddPersone} newUser={newUser} setNewUser={setNewUser}/>:null}
                   
                    </div>
                </>
            }
        </div>
    )
}