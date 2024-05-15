'react'

// import "tailwindcss/tailwind.css"
import './App.css'
import Card from './components/Card'

function App() {

  let myArray=[1,2,3,4,5]

  return (
    <>
     <h1>Hello Everyone</h1>

     {/* Passing props */}
     <Card name="Virat Kohli"/>
     <Card name="King Kohli"/>
     <Card name="Cheeku"/>
     <Card myArray={myArray}/>

    </>
  )
}

export default App;
