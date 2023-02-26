import classes from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {}

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
