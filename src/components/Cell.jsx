import React from 'react'

const Cell = ({id,cell,setCells,go,setGo,cells}) => {
  const handClick = (e) =>{
const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross") 
 if(!taken){
   if(go === "circle"){
    e.target.firstChild.classList.add("circle")
    CellChange("circle")
    setGo("cross")
    
   }
   if(go === "cross"){
    e.target.firstChild.classList.add("cross")
    CellChange("cross")

    setGo("circle")

   }
 }

}

const CellChange = (className) =>{
  const nextCells = cells.map((cell, index) =>{
    if(index === id){
      return className
    }else{
      return cell
      }
  })
  setCells(nextCells)
}
  return (
    <div className='square' id={id} onClick={handClick}>
      <div className={cell}></div>
    </div>
  )
}

export default Cell
