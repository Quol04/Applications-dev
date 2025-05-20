import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [users, setUsers] = useState([])
  const [currentUse, setCurrentUse] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
    console.log('Hello from useEffect') 
  }
  , [count])



  return (
    <>
    <button onClick={()=> setCount(count+1)}>{count}</button>
      
    </>
  )
}

export default App
