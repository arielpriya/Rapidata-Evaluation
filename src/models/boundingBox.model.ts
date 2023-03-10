export interface IBoundingBox {
    id:string;
    boundingBox:IPositions;
    
}
export interface IPositions {
    bottomRight:IAxis,
    topLeft:IAxis
}
export interface IAxis{
    x : number,
    y : number
}