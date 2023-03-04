import { useEffect, useCallback } from 'react'
import classes from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'
import { authActions } from '../store/auth'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

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
      {isAuthenticated ? (
        <>
          <h1>Redux Counter</h1>
          {showCounter && <div className={classes.value}>{counter}</div>}
          <div>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increaseHandler}>Increase by 20</button>
            <button onClick={incrementHandler}>Increment</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </>
      ) : (
        <h1>Login to View Counter</h1>
      )}
    </main>
  )
}

export default Counter
