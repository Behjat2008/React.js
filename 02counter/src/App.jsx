import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  
  // let counter = 15

  const addValue = () => {
    // if (counter < 20){
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      //   // counter = counter + 1
    // } else {
    //   console.log("value is 20");
      
    // }
  }
  
  const removeValue = () => {
    // if (counter > 0){
      setCounter(counter - 1)
    //   // counter = counter + 1
    // } else {
    //   console.log("value is 0");
    // }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
