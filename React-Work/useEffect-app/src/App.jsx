import { useState,useEffect, } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Hello from useEffect')
    
  }
  , [])

  return (
    <>
      <p>Hello there</p>
    </>
  )
}

export default App
