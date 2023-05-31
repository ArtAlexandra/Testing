import React, { useEffect, useRef, useState } from 'react'
import './NewTest.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Error from '../TakeTest/Error';

import Img from './Img';

import { Stage, Layer, Text, Group, Rect, Transformer} from 'react-konva';
import { Image } from 'konva/lib/shapes/Image';

import useImage from 'use-image';
const TestImage = ({selectedImage}) => {
 
 
  //  var blobObj = new Blob([selectedImage], { type: "image/png" });
   //var url = window.URL.createObjectURL(blobObj);
  
  //const [image] = useImage(selectedImage);//"/Pict/p_1.png"
 // <Img src={selectedImage} width={900} height={657} space="fill"/>

//const [image] = useImage(selectedImage);//"/Pict/p_1.png"

  return (
    <Img src={selectedImage}  width={900} height={657} space="fill"/>

  );
};


function Rectangles({rectangles,setRectangles, selectedImage, selectedId, selectShape}){

  

  var blobObj = new Blob([selectedImage], { type: "image/png" });
  var  url = window.URL.createObjectURL(blobObj);
  


  
 return(
  <Layer>
    <TestImage selectedImage={url}/>
   
  {rectangles.map((rect, i) => {
    return (
      <Group
      key={i}
      id={rect.id}
      shapeProps={rect}
      isSelected={rect.id === selectedId}
      >
      <Rect_
        key={i}
      
        shapeProps={rect}
        isSelected={rect.id === selectedId}
        onSelect={() => {
          selectShape(rect.id);
        }}
        
        onChange={newAttrs => {
          const circs = rectangles.slice();
          circs[i] = newAttrs;
          setRectangles(circs);
        }}
       
      />
       <Text
             x={rect.x}
            y={rect.y}
            fontSize={15}
            text={rect.id}
            fill="white"
            strokeWidth={1}
            align="centre"
            padding={5}
           />
       </Group>
    );
  })}
 
</Layer>
        
 )
}


const Rect_ = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
     
      <Rect
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: node.width() *  scaleX,
            height: node.height() *  scaleY
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
     
    </React.Fragment>
  );
};

export default function NewTest({ errorPoint, setErrorPoint, mainText, setMainText, selectedImage, setSelectedImage,Data, setData, numb, setNumb }){
    

    const [text12, setText12] = useState("")
    const [text22, setText22] = useState("")
    const [moreText2, setMoreText2] = useState("")
    const [n2, setN2] = useState("")


    const  removeError2=(id)=>{
      setData([...Data.filter((todo)=>todo.id!==id)])
    }
 
    const AddError=(e)=>{
      e.preventDefault()

      setNumb(true)
      const newItem2 = {
        id: Math.random().toString(36).substr(2, 9),
        text: moreText2,
        t1: text12,
        t2: text22,
        n: n2,
        x: rectangles[n2-1].x,
        y: rectangles[n2-1].y,
        width: rectangles[n2-1].width,
        height: rectangles[n2-1].height
      }
      
 
    setData([...Data, newItem2])
  
    setText12()
    setText22()
    setMoreText2("")
    setN2("")
  
    
  }


 
  const [rectangles, setRectangles] = React.useState([]);
 

  const [i, setI] = useState(1)

  const createRectangle = (e)=>{
    
    let newRectangle = {};
  
    const stage = e.target.getStage();
    const stageLocation = stage.getPointerPosition();
  
    setI(i=>i+1)
    newRectangle.width = 100
    newRectangle.height = 50
    newRectangle.x = stageLocation.x
    newRectangle.y = stageLocation.y
    newRectangle.fill = '#d037377f';
    newRectangle.id =i
    let rectangleFromState = [...rectangles];
    rectangleFromState.push(newRectangle);
    setRectangles(rectangleFromState)

    
  }

  

  const [selectedId, selectShape] = React.useState(null);





  /*
  var reader = new FileReader();
  reader.readAsDataURL(new Blob([new Uint8Array(IDBRequest)]));
  reader.onloadend = function () {
  var base64String = reader.result;

 setSelectedImage(base64String)
  }*/
  
 // var blobObj = new Blob([selectedImage], { type: "image/png" });
  //var url = window.URL.createObjectURL(blobObj);
 
  /*
useEffect(()=>{
 var blobObj = new Blob([iq], { type: "image/png" });
   url = window.URL.createObjectURL(blobObj);
}, [iq])*/

const D=(e)=>{

 
  console.log(selectedImage)

 //setSelectedImage(e.target.files[0])
 /*
 var blobObj = new Blob([e.target.files[0]], { type: "image/png" });
   url = window.URL.createObjectURL(blobObj);
   setSelectedImage(url)*/
}

const inputRef = useRef()

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedImage(event.dataTransfer.files[0])
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", selectedImage);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };
  
    return(

        <>
        
          <div className='new-test'>
          <h3 className='new-test__task'>Задание</h3>
            
            <textarea placeholder="Описание задания" value={mainText||""}
            onChange={(e)=>setMainText(e.target.value)} className='big_text-NewTest1'/>
              {!selectedImage&&
            <div className='DrugAndDrop'  
            onDragOver={handleDragOver}
            onDrop={handleDrop}>
              
         
           <>
        <div 
           className="dropzone"
        >
          
         
          <input 
            type="file"
            multiple
            onChange={(event) => setSelectedImage(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
         
       
        
        </div>
         <p>Добавить изображение</p>
         </>
         
          
        {/*<button onClick={() => inputRef.current.click()}>Select Files</button>*/}
        
        </div>
          }
          {selectedImage&& <button onClick={()=>{ setSelectedImage(null)}} className='new-test__remove-img'>Изменить изображение</button>}
           { selectedImage&&
<div className='new-test__image'>
<Stage

width={930}
height={600}
onMouseDown={e => {
const clickedOnEmpty = e.target === e.target.getStage();
if (clickedOnEmpty) {
  selectShape(null);
}
}}
onDblClick={(e) => createRectangle(e)}
>
  <Rectangles rectangles={rectangles}
  setRectangles={setRectangles} selectedImage={selectedImage}
  selectedId={selectedId} selectShape={selectShape}
 
  />

</Stage>

</div>}

        <div>
         
          <br />
 
        </div>
      
{/*}
            <input
            type="file"
            name="myImage"
            accept="image/png, image/jpeg"
          
            onChange={(e)=>setSelectedImage(e.target.files[0])}
/>*/}
          </div>
         
          <div>
            <div className='new-test__error-description'>
                <Form>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                          <h3 className='new-test__list-error'>Описание ошибки</h3>
                          <Form.Control type="text" placeholder="Краткое описание" value={moreText2}
                          onChange={(e)=>setMoreText2(e.target.value)} />
                      </Form.Group>
                      <Row className="g-3">
                          <Col md>
                              <Form.Select aria-label="Default select example"  value={text12 || ""}
                              onChange={(e)=>setText12(e.target.value)}>
                              <option> Тип ошибки</option>
                              <option value="логическая" >логическая</option>
                              <option value="типографическая (орфографические, пунктуационные)" >
                              типографическая (орфографические, пунктуационные)
                              </option>
                              <option value="ошибка в отрисовке интерфейса"  >ошибка в отрисовке интерфейса</option>
                              <option value="ошибка контента" >ошибка контента</option>
                              </Form.Select>
                          </Col>
                          <Col md>
                              <Form.Select aria-label="Default select example" value={text22 || ""}
                              onChange={(e)=>setText22(e.target.value)}>
                              <option >Серьёзность</option>
                              <option value="критична">критична</option>
                              <option value="не критична">не критична</option>
                              </Form.Select>
                          </Col>
                          <Col md>
                              <Form.Control type="text" placeholder="Номер ошибки" value={n2} onChange={(e)=>setN2(e.target.value)}/>
                          </Col>
                          <Col md>
                              <button className='new-test__error-description__add-error' onClick={(e)=>{AddError(e)}} >Записать ошибку</button>
                          </Col>
    
                      </Row>
                  </Form>
            </div>
          </div>
          <h3 className='new-test__list-error'>Список ошибок:</h3>
          {
              numb?
                <>
                    {
                        Data.map((todo)=>{
                        return(
                            <Error 
                            error={todo}
                            key={todo.id}
                            removeError = {removeError2}
                            />
                        );
                        })
                    }

                </>:
                      <p className='new-test__empty'>Пока что здесь пусто</p>
  
          }

     
      </>
    )
}