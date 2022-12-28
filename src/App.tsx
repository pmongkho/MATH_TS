import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

const [topNumber, setTopNumber] = useState(Math.floor(Math.random() * 10))
const [bottomNumber, setBottomNumber] = useState(Math.floor(Math.random() * 10))
const [result, setResult] = useState("")



const handleChange = (e: React.FormEvent<HTMLInputElement>)=>{
  setResult(e.currentTarget.value)


  }


useEffect(() => {
  let resultNumber: number = +result

  if(topNumber*bottomNumber===resultNumber){
    setTopNumber(Math.floor(Math.random() * 10))
    setBottomNumber(Math.floor(Math.random() * 10))
    setResult("")

  }
}, [result])

  return (
    <div className="app">
        <div className="container">
          <div className="row">
            <div className="col">
             <div className="math"> 
             <div className="card">
                
              <div className="sign">X</div>
              <div className="numbers">
              <div className="top">{topNumber}</div>
              <div className="bottom">{bottomNumber}</div>
                </div>
            
              </div><hr />
              <div className="result">
                <input type="text" 
                value={result}
                onChange={handleChange}
                />
                </div>
         
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
