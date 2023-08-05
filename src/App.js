import Cell from './components/Cell';
import {useEffect, useState} from "react"

function App() {
 const [cells, setCells] = useState(["","","","","","","","",""])
 const[go,setGo] = useState("circle")
 const[winningsMessage,setWinningsMessage] = useState(null)


 const message = "it is now " + go + " go " 
  //console.log(cells)
  const checkScore = () =>{
    const WinCombos = [ 
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
                        ]
                        WinCombos.forEach(array =>{
         let circleWins = array.every(cell => cells[cell] === "circle")
          if(circleWins){
            setWinningsMessage("circle wins")
            return
          }
        })
        WinCombos.forEach(array =>{
          let crossWins = array.every(cell => cells[cell] === "cross")
           if(crossWins){
             setWinningsMessage("cross wins")
             return
           }
         })
  }
  useEffect(()=>{
        checkScore()
  },[cells])
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell,index) => (
          <Cell key={index} id={index} cell={cell} setCells={setCells} go={go} setGo ={setGo} cells={cells}/>
        ))}
      </div>
          <p>{winningsMessage || message}</p>
    </div>
  );
}

export default App;
