import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment= () => {
    setCount(count + 1);
  };
  const decrement =()=> {
    setCount(count - 1);
  }

  return (
    <div className='counter'>
      <button onClick={decrement}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter