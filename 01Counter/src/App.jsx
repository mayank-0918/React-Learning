import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(15)
  const increment= ()=>{
    if(Counter<20){
      // setCounter(Counter+1);
      // setCounter(Counter+1);
      // setCounter(Counter+1);
      // setCounter(Counter+1);


      // iska output +1 hi hote jaaega koi fark nhi padega ... changes krne h to ye karo
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      // ISKA output 19 hojaaega 15+4
    }
  }

  const decrement= ()=>{
    if(Counter>0){
      setCounter(Counter-1);
    }
  }
  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Count: {Counter}</h2>

      <button onClick={increment}>Increment</button>
      <br/>
      <br/>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
