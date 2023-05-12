// import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

//importing 
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/redux-store';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()


  const incrementHandler = () => {
    // dispatch({type: 'increment'})
    dispatch(counterActions.countUp())
  }

  const increaseHandler = () => {
    // dispatch({type: 'increase', value: 10})
    dispatch(counterActions.increment(10)) // dispatch({action: 'some_unique_identifier', payload: 10})
  }

  const decrementHandler = () => {
    // dispatch({type: 'decrement'})
    dispatch(counterActions.countDown())
  }

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button className='border-3 bg-blue-500 text-white p-1 m-2' onClick={incrementHandler} >Increment</button>
      <button className='border-3 bg-blue-500 text-white p-1 m-2' onClick={increaseHandler} >Increase</button>
      <button className='border-3 bg-blue-500 text-white p-1 m-2' onClick={decrementHandler}>Decrement</button>
      <button className='border-3 bg-blue-500 text-white p-1 m-2' onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
