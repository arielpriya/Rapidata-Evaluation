import React, { useRef, MouseEvent, useState } from 'react';

type Props ={
  draw:(context:CanvasRenderingContext2D)=>void;
  imageUrl:string
}
const Canvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousedown ,setMouseDown]= useState<Boolean>(false);

  const drawRectangle = () => {
    const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(50, 30, 110, 90);
  };


 const handleClick=()=>{
    if(canvasRef.current) {
        drawRectangle();

    }
}
    return (
    <div onClick={handleClick}>
    <canvas
      ref={canvasRef}
      style={{
        width: "600px",
        height: "400px",
        background: `url(${props.imageUrl})`,
      }}
    />
  </div>
  );

};



export default Canvas;