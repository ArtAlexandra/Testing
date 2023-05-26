import React, { useState, useRef, useEffect } from 'react'
import './NewTest1.css'
//import Picture from './Picture'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Error from '../TakeTest/Error';

import Img from './Img';

import { Stage, Layer, Text, Group, Rect, Transformer} from 'react-konva';
//import useImage from "use-image";

const TestImage = ({selectedImage}) => {
 
 
    //var blobObj = new Blob([selectedImage], { type: "image/png" });
   // var url = window.URL.createObjectURL(blobObj);
  //  console.log(url)
   //const [image] = useImage("/Pict/p_1.png");//"/Pict/p_1.png"
 

 
  return (
     
    <Img src={selectedImage} width={900} height={657} space="fill"/>
  );
};


const Rectangles = ({rectangles,setRectangles, selectedImage, selectedId, selectShape})=>{
 return(
  <Layer>
    <TestImage selectedImage={selectedImage}/>
   
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
         console.log(node.width())
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

export default function NewTest1({ errorPoint, setErrorPoint, mainText, setMainText, selectedImage, setSelectedImage,Data, setData, numb, setNumb }){
    

    const [text12, setText12] = useState("")
    const [text22, setText22] = useState("")
    const [moreText2, setMoreText2] = useState("")
    const [n2, setN2] = useState("")


    function removeError2(id){
      setData([...Data.filter((todo)=>todo.id!==id)])
    }
   console.log(errorPoint)
    function Clear2(e){
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
        w: rectangles[n2-1].w,
        h: rectangles[n2-1].h
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

  var blobObj = new Blob([selectedImage], { type: "image/png" });
  var url = window.URL.createObjectURL(blobObj);


  const [circles, setCircles] = React.useState([]);
  const [selectedId, selectShape] = React.useState(null);
  console.log(rectangles)
    return(

        <>
          <div className='new-test'>
          <h3 className='new-test__task'>Задание</h3>
            
            <textarea placeholder="Описание задания" value={mainText||""}
            onChange={(e)=>setMainText(e.target.value)} className='big_text-NewTest1'/>
            {selectedImage&&(

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
              setRectangles={setRectangles} selectedImage={url}
              selectedId={selectedId} selectShape={selectShape}/>
     
            </Stage>
            )}
         
          

            <input
            type="file"
            name="myImage"
            onChange={e=>setSelectedImage(e.target.files[0])}
            />
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
                              <button className='new-test__error-description__add-error' onClick={(e)=>{Clear2(e)}} >Записать ошибку</button>
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