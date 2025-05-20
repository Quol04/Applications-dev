import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    if (count > 10) {
      setCount(1)
      return
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) =>setCurrentUser(data))
      .catch((error) => console.warn('Error fetching data:', error))  
  } , [count])

  return (
    <>
    <button onClick={()=> setCount(count+1)}>{count}</button>
    {/* {users.map((user) => user.name)} */}
    <h3 >{currentUser.name}</h3>
    <p>{currentUser.email}</p>

     {/* { users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))
      } */}
    </>
  )
}

export default App
