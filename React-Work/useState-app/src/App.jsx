
import './App.css'
import Counter from './Counter'

function App() {
  

  return (
    <>
      <Counter startingValue={0} interval={1} />
      <Counter startingValue={3} interval={3} />
      <Counter startingValue={5} interval={10} />
      <Counter startingValue={10} interval={100} />

    </>
  )
}

export default App
