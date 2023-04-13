import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import DeleteTest from './DeleteTest';
import "./TestList.css"
export default function TestList({props}){
    const listTest=[
        
        {
            id: 0,
            name: "Тестик1",
            numb_task: 6, 
            numb_people: 4, 
            time: "45 мин"
        },
        {
            id: 1,
            name: "Тестик2",
            numb_task: 8, 
            numb_people: 1, 
            time: "1 час"
        },
        {
            id: 2,
            name: "Тест",
            numb_task: 10, 
            numb_people: 2, 
            time: "1 час 10 мин"
        },
        {
            id: 3,
            name: "Тестирование",
            numb_task: 12, 
            numb_people: 0, 
            time: "40 мин"
        },
        
    ]

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
const [isDelete, setIsDelete] = useState(false)
const navigate = useNavigate(); 
const [l, setL] = useState(listTest)
const [sort, setSort] = useState(true)
    
function Sort(){
    if(sort){
     const sortedTitle = listTest.sort((a, b)=> {
     
     if(a.name > b.name){
         return 1;
     }
     if(a.name < b.name){
         return -1;
     }
     return 0;
 
 })
 setSort(false)
 return setL([ ...sortedTitle])}
 else{
     const sortedTitle = listTest.sort((a, b)=> {
     
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
                        <td>{p.numb_task}</td>
                        <td>{p.numb_people}</td>
                        <td>{p.time}</td>
                        <td><img src="/Pict/Edit.png" alt="посмотреть детали"/></td>
                    </tr>
                )
            })
        )
    
        }


        const Delete = () =>{
            setIsDelete(!isDelete)
        let pers = []
            l.map((p)=>{
                return(
                     (p?.isChecked === true&& isDelete==="yes"? null:  pers.push(p) )
                         
                     
               )})
               setL(pers)
         
              
         }

         
    return(
        <div>
        

        {listTest.length === 0 ? <div className='list_test_null-LookResultTest'>
            <img src="/Pict/Clip path group.png" alt="пока нет тестов"/> 
           
            <div className='text-LookResultTest'>
            <h2>Тестов пока нет</h2>
            <div className='add_test-LookResultTest' onClick={()=>navigate("/createTest")}>
            <button >Создать новый </button>
            <img src="/Pict/Add.png" alt="+"/> 
            </div>
    </div>
    </div> : <>
        
        
    <div className='nav-TestList'>
            <div className='find-users-Users'>
                <img src="/Pict/Search.png" alt='поиск'/>
                <input type='text' placeholder='Найти'/>

            </div>
            
          
            <div className="Button-TestList">
            <div className='add-TestList'  onClick={()=>navigate("/createTest")} >
                <p>Создать новый</p>
                <img src="/Pict/plus.png" alt='назначить тест'/>
            </div>
            <div className='delete-TestList' onClick={Delete}>
                <p>Удалить</p>
                <img src="/Pict/DeletePers.png" alt='удалить пользователя'/>
            </div>
        </div>
        </div>
         <div className='table-TestList'>
            <table className='table-Users'>
            <thead >
		<tr>
        <th><input type="checkbox"   name="allSelect"
      checked={l.filter((p)=>p?.isChecked !== true).length<1}
      onChange={handleChange} /></th>
			<th>Название <img src="/Pict/up.jpg" onClick={()=>Sort()}  alt="sort" className='sort'/></th>
           {/**onClick={()=>Sort()} */}
			<th>Задания</th>
			<th>Участники</th>
			<th>Время</th>

			<th> </th>
		</tr>
	</thead>


                <tbody className='head-table'>
               
                    {Table()}
                </tbody>
            </table>
        </div>
      {isDelete? <DeleteTest handleClose={Delete} setTask={setIsDelete} />:null}

       </>}


        </div>
    )
}