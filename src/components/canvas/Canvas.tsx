import React, { useRef, MouseEvent, useState, useEffect } from 'react';
import { ICoordinates } from '../../models/coordinates.model';

type Props ={
  handleCoordinate: (coordinate:ICoordinates)=>void;
  imageUrl:string
}
const Canvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousedown ,setMouseDown]= useState<Boolean>(false);
  const [coordinates,setCoordinates] = useState<ICoordinates>({
    mouseX:0,
    mouseY:0,
    moveX:0,
    moveY:0
  })
  const draw = (ctx:any, x:number, y:number, w:number, h:number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
    ctx.strokeRect(x, y, w, h);
    props.handleCoordinate(coordinates);
  };

  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const render = () => {
      if(mousedown){
        let x = coordinates.mouseX - (canvas? canvas.offsetLeft : 0)
        let y = coordinates.mouseY - (canvas? canvas.offsetTop : 0)
        draw(context, x, y, coordinates.moveX, coordinates.moveY);
      }
    };
    render();
  }, [mousedown, coordinates.moveX, coordinates.moveY]);

  const handleDown = (e:any)=>{
    setMouseDown(true);
    const x = e.clientX;
    const y = e.clientY;
    setCoordinates({
     
      mouseX:x,
    mouseY:y,
   moveX:0,
   moveY:0
    })
   
  }

  const handleUp = ()=>{
    setMouseDown(false);
  }

  const handleMove = (e:any) =>{
    let x = e.clientX;
    let y = e.clientY;
    if(mousedown){
      let width = x-coordinates.mouseX;
      let height = y-coordinates.mouseY;
      setCoordinates({
     
      ...coordinates,
     moveX:width,
     moveY:height
      })
      // setMoveX(width);
      // setMoveY(height);
    }
  }

    return (
      <div onMouseDown={handleDown} onMouseUp={handleUp} onMouseMove={handleMove}>
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "400px",
        background: `url(${props.imageUrl})`,
      }}
    />
  </div>
  );

};



export default Canvas;