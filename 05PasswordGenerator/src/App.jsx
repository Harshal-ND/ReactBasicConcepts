
import { useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('');
  const [numberAllowed, setNumberallowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  console.log(numberAllowed);
  return (
    
    <>
      <h1>Password Generator</h1>
      <div className="password-generator">
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" value={password} readOnly />
        <button>Copy</button>
        <label>
          <input type="checkbox" id="numbers" defaultChecked={numberAllowed} onChange={() => { setNumberallowed((prev) => !prev) }} />Allow Numbers
        </label>
        <label>
          <input type="checkbox" id="special-characters" defaultChecked={specialCharAllowed} onChange={() => { setSpecialCharAllowed((prev) => !prev) }}  />Allow Special Characters
        </label>
        <label htmlFor="password-length">Password Length:</label>
        <input type="range" id="password-length" min="6" max="20" value={passwordLength} onChange={(e) => { setPasswordLength(e.target.value) }} />
        <span id="password-length-display">{passwordLength}</span>
      </div>

    </>
  )
}

export default App
