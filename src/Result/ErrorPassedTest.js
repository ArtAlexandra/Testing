import React from 'react';
import "../TakeTest/DoTest.css";
import "./FormPassedTest.css"
export default function ErrorPassedTest({error}){
    return(
        <div className="Error">
            <div>
                <p>{error.text}</p>
                <div className='error-line'>
                    <div className="error-1">
                        <span>Тип ошибки: {error.t1}</span>
                    </div>
                    <div className="error-2">
                        <span>    Серьёзность: {error.t2} </span>
                    </div>
                    <div className="error-3">
                        <span>    Номер ошибки: {error.n}</span>
                    </div>
                    {error.done ? <img src="../Pict/true.png" alt="true" className='passed-test__answer passed-test__answer_true'/>
                     : <img src="../Pict/false.png" alt="false" className='passed-test__answer passed-test__answer_false'/>}
                    
                </div>
            </div>
   
        </div>

    )
}