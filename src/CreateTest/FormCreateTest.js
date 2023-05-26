import React, {useState, useEffect} from 'react'
import NewTest1 from './NewTest1';

import  '../TakeTest/Form.css';
import "./FormCreateTest.css";
import SaveTest from './SaveTest';
import { useLocation, useNavigate } from "react-router-dom";

export default function FormCreateTest(){
    const state= useLocation().state
    console.log(state)
    const [save, setSave] = useState(false)
    const [nameTest, setNameTest] = useState(state?.nameTest|| "")
   
    const [porog, setPorog] = useState(state?.porog || 0)
    const [h, setH] = useState(state?.h || 0)
    const [min, setMin] = useState(state?.min ||0)
    useEffect(() => {
        if(state?.nameTest) document.title = 'Редактирование теста'
        else document.title = 'Создание теста';
        document.img="/Pict/oggetto-logo-png.png";
      }, []);
 
    
    const [Data, SetData] = useState(state?.errorPoint||[]);
   
    const [numb, setNumb] = useState(state?.numb||false)


    const [selectedImage, setSelectedImage] = useState(null);
  const [mainText,setMainText] = useState(state?.mainText || "")
  const [errorPoint, setErrorPoint] = useState(state?.errorPoint || [])

/*
  const [Data2, SetData2] = useState([]);
   
  const [numb2, setNumb2] = useState(false)
  

  const [selectedImage2, setSelectedImage2] = useState(null);
const [mainText2,setMainText2] = useState("")
const [errorPoint2, setErrorPoint2] = useState([])
*/

 function SeeNewTest(){
  
      
        return <NewTest1  errorPoint={errorPoint} setErrorPoint={setErrorPoint} mainText={mainText} setMainText={setMainText} selectedImage={selectedImage} setSelectedImage={setSelectedImage} Data={Data} setData={SetData} numb={numb} setNumb={setNumb}/>
    
    /*
    if(page===1){
      
        return <NewTest2 errorPoint={errorPoint2} setErrorPoint={setErrorPoint2} mainText={mainText2} setMainText={setMainText2} selectedImage={selectedImage2} setSelectedImage={setSelectedImage2} Data={Data2} setData={SetData2} numb={numb2} setNumb={setNumb2}/>
    }*/
    
   
}
    return(
        <div className='form-create-test__main'>
       <div className='form-crete-test__title'>
        <div className='form-crete-test__name-test'>
            {state?.nameTest? <h1 >Редактирование: {nameTest}</h1>: nameTest? <h1>{nameTest}</h1>: <h1>Новый тест</h1>}
            </div>
             <button   onClick={()=>setSave(true)} className='form-crete-test__save'>Завершить <img src="/Pict/Vector.png" alt='save'/></button> 
        
       </div>
           

        <div className='body-form'>
            {SeeNewTest()}
            

        </div>
       
      
        
       
        
        
       
        {save? <>
        <SaveTest nameTest={nameTest} setSave={setSave} setNameTest={setNameTest} porog={ porog} setPorog={setPorog} h={h} setH={setH} min={min} setMin={ setMin}/>
        </>:null}
        </div>
    )
}