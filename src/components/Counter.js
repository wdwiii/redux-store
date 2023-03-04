import classes from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(20))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 20</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
