import { useState } from 'react';
import './App.css'

function App() {
 
  const [counter, setCounter]=useState(15);
  // let counter=13;

  const addValue=()=>{
    // counter ++;
    // console.log(counter);

    // setCounter(counter+1);

    //Concept of Reconciliation

    // setCounter((prev)=>prev+1);
    // setCounter((prev)=>{ return (prev+1)});   Another way of writing the above code
    // console.log(counter);
      setCounter((prev)=>prev+1);
      setCounter((prev)=>prev+1);
      setCounter((prev)=>prev+1);
      setCounter((prev)=>prev+1);
  }


  const removeValue=()=>{
    setCounter((prev)=>prev-1);
  }

  return (
    <>
     <h1>React Course Basics : {counter}</h1>   
     <h2>Counter Value :  {counter}</h2>
     <button onClick={addValue}>Add Value</button> {"   "}
     <button onClick={removeValue}>Remove Value</button>
     <p>footer : </p>
    </>
  )
}

export default App;
