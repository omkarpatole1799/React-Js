import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()


  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button className='border-3 bg-blue-500 text-white p-1 m-2' onClick={incrementHandler} >Increment</button>
      <button className='border-3 bg-blue-500 text-white p-1 m-2' onClick={decrementHandler}>Decrement</button>
      <button className='border-3 bg-blue-500 text-white p-1 m-2' onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
