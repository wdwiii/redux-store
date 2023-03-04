import { useCallback } from 'react'
import classes from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import { counterActions } from '../store/counter'
const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const logoutHandler = useCallback(
    e => {
      e.preventDefault()
      dispatch(authActions.logout())
      dispatch(counterActions.reset())
    },
    [dispatch]
  )

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
