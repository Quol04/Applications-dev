import { useState,useEffect } from 'react'
import './App.css'
import Post from './Post.jsx'

function App() {
  const [count, setCount] = useState(1)
  const [currentUser, setCurrentUser] = useState({})
  const [posts, setPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(0)

  useEffect(() => {
    if (count > 10) {
      setCount(1)
      return
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) =>setCurrentUser(data))
      .catch((error) => console.warn('Error fetching data:', error))  

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.warn('Error fetching data:', error))  
  } , [count])


  return (
    <>
    <button onClick={()=> setCount(count+1)}>{count}</button>
    <h3>Name: {currentUser.name}</h3>
    <p>Email: {currentUser.email}</p>
    <p>Phone Number: {currentUser.phone}</p>

    <Post post={post} 
     selectedPostId={selectedPostId}
     setSelectedPostId={setSelectedPostId}/>
    </>
  )
}

export default App
