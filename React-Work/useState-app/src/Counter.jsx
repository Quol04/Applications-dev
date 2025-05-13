import { useState } from 'react';
import './Counter.css';

function Counter({startingValue, interval}) {
  const [count, setCount] = useState(startingValue);

  const increment= () => {
    setCount(count + interval);
  };
  const decrement =()=> {
    setCount(count - interval);
  }

  return (
    <div className='counter'>
      <button onClick={decrement}>Decrement by {interval}</button>
      <h1>{count}</h1>
      <button onClick={increment}>Increment by {interval}</button>
    </div>
  );
}

export default Counter