import React, {useState, useEffect, useContext} from 'react'
import NewTest from './NewTest';

import  '../TakeTest/Form.css';
import "./FormCreateTest.css";
import SaveTest from './SaveTest';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';

export default function FormCreateTest(){
    const { currentUser} = useContext(AuthContext);

    console.log(currentUser)
    const state= useLocation().state
    const [save, setSave] = useState(false)
    const [nameTest, setNameTest] = useState(state?.nameTest|| "")
   
    const [porog, setPorog] = useState(state?.porog || 0)
    const [h, setH] = useState(state?.h || 0)
    const [min, setMin] = useState(state?.min ||0)
    useEffect(() => {
        if(state?.nameTest) document.title = 'Редактирование теста'
        else document.title = 'Создание теста';
      }, []);
 
    
    const [Data, SetData] = useState(state?.errorPoint||[]);
   
    const [numb, setNumb] = useState(state?.numb||false)
    var reader = new FileReader();
 
    const [selectedImage, setSelectedImage] = useState(null)
          
           reader.readAsDataURL(new Blob([new Uint8Array(currentUser?.image.data)]));
           reader.onloadend = function () {
            var base64String = reader.result;
        
        //   setSelectedImage(base64String)
            }
          


  const [mainText,setMainText] = useState(state?.mainText || "")
  const [errorPoint, setErrorPoint] = useState(state?.errorPoint || [])


 function SeeNewTest(){
  
      
        return <NewTest  errorPoint={errorPoint} setErrorPoint={setErrorPoint} mainText={mainText} setMainText={setMainText} selectedImage={selectedImage} setSelectedImage={setSelectedImage} Data={Data} setData={SetData} numb={numb} setNumb={setNumb}/>
 
}


    return(
        <div className='form-create-test__main'>
       <div className='form-crete-test__title'>
        <div className='form-crete-test__name-test'>
            {state?.nameTest? <p >Редактирование: {nameTest}</p>: nameTest? <p>{nameTest}</p>: <p>Новый тест</p>}
            </div>
             <button   onClick={()=>setSave(true)} className='form-crete-test__save'>Завершить </button> 
             {/* <img src="/Pict/Vector.png" alt='save'/> */}
        
       </div>
   

        <div className='body-form'>
            {SeeNewTest()}
            

        </div>
       
      
        
       
        
        
       
        {save? <>
        <SaveTest mainText={mainText} selectedImage={ selectedImage} Data={Data} nameTest={nameTest} setSave={setSave} setNameTest={setNameTest} porog={ porog} setPorog={setPorog} h={h} setH={setH} min={min} setMin={ setMin}/>
        </>:null}
        </div>
    )
}