import { useState } from 'react'
import './App.css'
import "tailwindcss/tailwind.css"

function App() {
  const [bgColor, setBgColor] = useState('olive')

  // const backgroundChanger=()=>{
  //   setBgColor(value);
  // }

  return (

    <div className="backDiv" style={{ backgroundColor: bgColor }}>
      <h1>Background Changer</h1>
      <button onClick={() => { setBgColor('Red') }}>Red</button>{"    "}
      <button onClick={() => { setBgColor('Yellow') }}>Yellow</button>{"    "}
      <button onClick={() => { setBgColor('Blue') }}>Blue</button>
    </div>


  )
}

export default App
